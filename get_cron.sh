#!/bin/bash

input_file=./hostnames
mkdir -p ./out/srvrs

get_scripts() {
    local hostname_file=$1
    mkdir -p ./out/$hostname_file

    while IFS= read -r line
    do
        script_path=`echo $line | sed 's/\\r//g'`
        scp ingres@$hostname_file:$script_path ./out/$hostname_file
    done < "$hostname_file"
}

while IFS= read -r line
do
    hostname=`echo $line | sed 's/\\r//g'`
    echo $hostname
    ssh -n -o StrictHostKeyChecking=no ingres@$hostname crontab -l | awk '{print $6}' | grep '.sh' > $hostname
    get_scripts $hostname
    mv $hostname ./out/srvrs/$hostname.txt
done < "$input_file"

tar -zcvf out.tar.gz out

rm -rf out

