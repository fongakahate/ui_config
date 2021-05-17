#!/bin/bash
port=21
input=$1

while IFS= read -r line
do
    l=`echo $line | sed 's/\\r//g'`
    nc -vz -w5 $l $port
done < "$input"
