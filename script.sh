#!/bin/bash
export LC_ALL=C
ts=$(date +%s%N)

declare -A stats=()
pollerE="bulk-estimates-pollerE.*"
pollerBAE="bulk-estimates-pollerBAE.*"
pollerTL="bulk-estimates-pollerTL.*"
pollerSMART="bulk-estimates-pollerSMART.*"
estimatesIngester="estimates-ingester.1.log.*"

pollerEMultiplier=20000
pollerBAEMultiplier=10

parselogs() {
    local logKeyword=$1
    local multiplier=$2
    local magicWord=$3
    echo "Looking for files for $logKeyword"
    local filesToProcess=`find . -name "$logKeyword" -type f`
    for i in $filesToProcess; do
        if [[ $logKeyword == $pollerE || $logKeyword == $pollerBAE ]]; then
            generalParser $i $multiplier 1 $magicWord
        fi
        if [[ $logKeyword == $pollerTL || $logKeyword == $pollerSMART ]]; then
            generalParser $i $multiplier 2 $magicWord
        fi
        if [[ $logKeyword == $estimatesIngester ]]; then
            majorParser $i $multiplier 3 $magicWord
        fi
    done
}

generalParser() {
    local file=$1
    local multiplier=$2
    local magicWord=${@:4}
    local column=$3
    echo "Start processing of $file with params ${@:2}"
    while IFS= read -r; do
        local date=`echo $REPLY | awk '{print $2}'`
        if [[ -z ${stats[$date]} ]]; then
            stats[$date]=`echo "0 0 0" | awk -v col=$column -v val=$multiplier '{$col = val; print}'`
        else
            local previosValue=`echo ${stats[$date]} | awk -v col=$column '{print $col}'`
            local newValue=$(($previosValue + $multiplier))
            stats[$date]=`echo ${stats[$date]} | awk -v col=$column -v val=$newValue '{$col = val; print}'`
        fi
        echo -ne "$date -- ${stats[$date]}\033[0K\r"
    done < <(zgrep "$magicWord" $file)
    echo "Finished processiong of $file"
    echo "-----------------------------"
}

majorParser(){
    local file=$1
    local multiplier=$2
    local magicWord=${@:4}
    local column=$3
    
    echo "Start processing of $file"
    
    local date="$(cut -d'.' -f5 <<<"$file")"
    local month=`echo $date | cut -c5-6`
    local day=`echo $date | cut -c7-8`
    local count=`zgrep "$magicWord" $file | wc -l`
    local unifiedDate="$day-$month"
    if [[ -z ${stats[$unifiedDate]} ]]; then
        stats[$unifiedDate]=`echo "0 0 0" | awk -v col=$column -v val=$count '{$col = val; print}'`
    else
        stats[$unifiedDate]=`echo ${stats[$unifiedDate]} | awk -v col=$column -v val=$count '{$col = val; print}'`
    fi
    
    echo "Finished processiong of $file"
    echo "-----------------------------"
}

parselogs "bulk-estimates-pollerE.*" 20000 "consumed"
parselogs "bulk-estimates-pollerBAE.*" 10 "wrote"
parselogs "bulk-estimates-pollerTL.*" 1 "Estimates funnel hwm"
parselogs "bulk-estimates-pollerSMART.*" 1 "Estimates funnel hwm"
parselogs "estimates-ingester.1.log.*" 1 "average"

echo "Printing results"
echo "Date SDI Poller Ingested Backlog" > results.csv 
for key in "${!stats[@]}"; do
    pollerVallue=`echo ${stats[$key]} | awk '{print $2}'`
    ingestedVallue=`echo ${stats[$key]} | awk '{print $3}'`
    echo "$key ${stats[$key]} $(($pollerVallue - $ingestedVallue))" >> results.csv
done

sed -i 's/ /, /g' results.csv

echo "$((($(date +%s%N) - $ts)/1000000)) ms"