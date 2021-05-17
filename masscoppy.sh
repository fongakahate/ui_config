#!/bin/bash

input=archives_paths.txt

while IFS= read -r line
do
    l=`echo $line | sed 's/\\r//g'`
    echo "---------------------------------------------------------------------"
    echo $l
    sshpass -p "sqloravwdb2" scp -v ingres@10.51.10.78:$l /mnt/d/Stuff/ING_SDI/
    sleep 3
done < "$input"
