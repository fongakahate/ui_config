#!/bin/bash

target_file=$1
target_date=$2
output_file_name=agregation_$target_date--$(date +%Y-%m-%d_%H-%M-%S).txt

validate_inputs() {
    if ! [[ $target_date =~ ^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2]) ]]
    then 
        echo "INVALID DATE! date should be dd-mm"
        exit 1
    fi

    if ! [[ -f $target_file ]]
    then
        echo "FILE DOES NOT EXIST!"
        exit 1
    fi
}

parse_archives() {
    local path=$1
    if [ -f "$path" ]
    then
        echo "Starting processing $path file"
        zcat $path >> $output_file_name
        echo "Finished processing $path file"
        echo "--------------------------------------------------"
    else 
        echo "$path does not exist."
    fi
}

read_target_file() {
    while IFS= read -r; do
        parse_archives "$REPLY"
    done < <(grep "zip/archive." $target_file | cut -d' ' -f3,13 | grep $target_date | awk '{print $2}')
}




validate_inputs
read_target_file