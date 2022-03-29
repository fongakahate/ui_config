#!/bin/bash

sed -i 's/skin=default/skin=nicedark.ini/g' ~/.config/mc/ini 

sudo sed -i 's/# CdParentSmart =/CdParentSmart = backspace/g' /etc/mc/mc.default.keymap
