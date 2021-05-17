#!/bin/bash

input_file=$1
script_name=$2

while IFS= read -r line
do
    hostname=`echo $line | sed 's/\\r//g'`
    scp -r ingres@$hostname:/home/ingres/local/dba/bin/$script_name /home/ingres/157/$hostname-$script_name
    md5sum $hostname-$script_name >> sums
done < "$input_file"

