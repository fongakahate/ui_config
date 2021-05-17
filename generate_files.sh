#!/bin/bash

target_file=$1
start_sequence_number=1

validate_inputs() {
    if ! [[ -f $target_file ]]
    then
        echo "FILE DOES NOT EXIST!"
        exit 1
    fi
}

generate_file() {
    local xml_content=$1
    if [[ $xml_content =~ "<?xml" ]]
    then
        local file_name=$(date +%s)-$start_sequence_number.xml
        echo "creating file:$file_name"
        echo $xml_content > ./xml/$file_name
        let start_sequence_number+=1
    fi

}

parse_file() {
    while IFS= read -r; do
        generate_file "$REPLY"
    done < $target_file
}




validate_inputs
parse_file