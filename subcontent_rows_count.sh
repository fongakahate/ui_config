#!/bin/bash
# set -x
target_input_file=bulk-estimates-pollerARCHIVER.log.0
result=0
# input_file is est.csv with list of subcontents and date specified _it is the only param required_
input_file=$1
sub_contents=()
dates=()

get_estimates_sub_contents() {
    mapfile sub_contents < <( awk -F "\"*,\"*" 'NR>1 {print $1}' $input_file)
}

get_dates() {
    header=$(head -n 1 $input_file)
    IFS=',' read -r -a dates <<< "$header"
}

count_records() {
    local path=$1
    local sub_content=$2
    if [ -f "$path" ]
    then
       local records=$(zgrep $sub_content $path | wc -l | cut -d ' ' -f 1)
       echo "Records in $path found: $records"
       let result+=$records
    else 
        echo "$path does not exist."
    fi
}

parse_logs() {
    local date=$1
    local sub_content=$2
    while IFS= read -r; do
        count_records $REPLY $sub_content
    done < <(grep "zip/archive." $target_input_file | cut -d' ' -f3,13 | grep $date | awk '{print $2}')
    echo "-----------------------------------------------------------------------------------------------" | tee -a subcontent_row_count_results.txt
    echo "*" | tee -a subcontent_row_count_results.txt
    echo "*"
    echo "Total record counts by $date for $sub_content:$result" | tee -a subcontent_row_count_results.txt
    echo "*"
    echo "*" | tee -a subcontent_row_count_results.txt
    echo "-----------------------------------------------------------------------------------------------" | tee -a subcontent_row_count_results.txt
    echo "$result" >> s_r_c_results_only.txt
    result=0
}

parse_table(){
for sub_content in "${sub_contents[@]}"
do
    for date in "${dates[@]}"
    do
        if [[ $date =~ ^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2]) ]]
        then
            local d=`echo $date | sed 's/\\r//g'`
            local sc=`echo $sub_content | sed 's/\\r//g'`
            echo "Processing Estimates Sub Content: $sc by $d"
            parse_logs $d $sc
        fi
    done     
done
}

get_estimates_sub_contents
get_dates
parse_table
