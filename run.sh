#!/bin/bash
# Help
if [ $# -ne 2 ]
then
    echo './run.sh <OUTLET> <ACTION>
Example: ./run.sh 1 OFF';
    exit;
fi
# Get code
case "$1$2" in
'1ON')
    code='4199731';
    ;;
'1OFF')
    code='4199740';
    ;;
'2ON')
    code='4199875';
    ;;
'2OFF')
    code='4199884';
    ;;
'3ON')
    code='4200195';
    ;;
'3OFF')
    code='4200204';
    ;;
'4ON')
    code='4201731';
    ;;
'4OFF')
    code='4201740';
    ;;
'5ON')
    code='4207875';
    ;;
'5OFF')
    code='4207884';
    ;;
*)
    echo "Order not found ! Please use ./run.sh to be helped";
    exit;
esac
# Send 2 times the code
if [ -n "$code" ]
then
    for i in {1..2}
    do
        ./../rpi-rf/scripts/rpi-rf_send -p 172 -t 1 "$code";
    done
fi
