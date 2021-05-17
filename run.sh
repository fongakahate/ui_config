#!/bin/bash

# grep "consumed" bulk-estimates-pollerE.log | awk '{print $2}' | sort | uniq -c | awk '{print $2}' > pollerE_DATES.txt
# grep "wrote" bulk-estimates-pollerBAE.log | awk '{print $2}' | sort | uniq -c | awk '{print $2}' > pollerBAE_DATES.txt
# grep "Estimates funnel hwm" bulk-estimates-pollerTL.log | awk '{print $2}' | sort | uniq -c | awk '{print $2}' > pollerTL_DATES.txt
# grep "Estimates funnel hwm" bulk-estimates-pollerSMART.log | awk '{print $2}' | sort | uniq -c | awk '{print $2}' > pollerSMART_DATES.txt

# DIFF=$(diff pollerE_DATES.txt pollerBAE_DATES.txt)
# if [ "$DIFF" != "" ]
# then
# 	echo "Dates do not match"
# fi

dates_file=bulk-estimates-pollerE_DATES.txt

while IFS= read -r line
do
	DATE=`echo $line | sed 's/\\r//g'`
	MSGCOUNT_POLLERE=`zgrep "$DATE" bulk-estimates-pollerE.log | grep "consumed" | wc -l`
	MSGCOUNT_POLLERE_MULTIPLIED=`expr $MSGCOUNT_POLLERE \* 20000`
	MSGCOUNT_POLLERBAE=`zgrep "$DATE" bulk-estimates-pollerBAE.log | grep "wrote" | wc -l`
	MSGCOUNT_POLLERBAE_MULTIPLIED=`expr $MSGCOUNT_POLLERBAE \* 10`
	SDI=`expr $MSGCOUNT_POLLERE_MULTIPLIED + $MSGCOUNT_POLLERBAE_MULTIPLIED`
	MSGCOUNT_POLLERTL=`zgrep "$DATE" bulk-estimates-pollerTL.log | grep "Estimates funnel hwm" | wc -l`
	MSGCOUNT_POLLERSMART=`zgrep "$DATE" bulk-estimates-pollerSMART.log | grep "Estimates funnel hwm" | wc -l`
	POLLERMSGS=`expr $MSGCOUNT_POLLERTL + $MSGCOUNT_POLLERSMART`
	echo $DATE $SDI $POLLERMSGS
done < "$dates_file"
