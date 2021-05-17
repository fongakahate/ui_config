#!/bin/bash

input_file=$1
script_file=$2

mkdir -p ./hdc_out_sort/$script_file

while IFS= read -r line
do
    hostname=`echo $line | sed 's/\\r//g'`
    cp ./hdc_out/$line/$script_file.sh ./hdc_out_sort/$script_file/$line.txt
    md5sum ./hdc_out_sort/$script_file/$line.txt >> ./hdc_out_sort/$script_file/sums
done < "$input_file"
