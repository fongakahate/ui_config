#! /bin/bash

ec2ip=$(cat ip.txt)
cfhn=$(cat cfhn.txt)

echo "export ec2ip=$ec2ip" >> ~/.bash_profile 
echo "export cfhn=$cfhn" >> ~/.bash_profile
