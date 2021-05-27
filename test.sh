#!/bin/bash

if [ -s test.txt ]
then
	echo 'full'
	rm -rf cloudfront_site
else
	echo 'empty'
fi
