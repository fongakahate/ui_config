#! /bin/bash

ec2ip=$(cat ip.txt)

echo "export ec2ip=$ec2ip" >> ~/.bash_profile 
