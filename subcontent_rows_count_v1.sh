#!/bin/bash
date=$1
sub_content=$2
target_file=bulk-estimates-pollerARCHIVER.log.0
result=0

validate_inputs() {
    if ! [[ $date =~ ^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2]) ]]
    then 
        echo "INVALID DATE! date should be dd-mm"
        exit 1
    fi

    if [[ -z $sub_content ]]
    then
        echo "PROVIDE SUB CONTENT NAME!"
        exit 1
    fi
}

count_records() {
    local path=$1
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
    while IFS= read -r; do
        count_records "$REPLY"
    done < <(grep "zip/archive." $target_file | cut -d' ' -f3,13 | grep $date | awk '{print $2}')
    echo "Total record counts by $date for $sub_content:$result" | tee -a subcontent_row_count_results.txt
}


validate_inputs

parse_logs
