from os import listdir
from datetime import datetime
import xlwt # pip install xlwt
from xlwt import Workbook

dateFormatMap = {
    'ingester': '%Y%m%d',
    'sdi': '%d-%m-%Y',
    'poller': '%d%m%Y'
}
columnIndexMap = {
    'ingester': 3,
    'sdi': 1,
    'poller': 2
}
pathToLogsDirectory = 'd:/Stuff/Stats/' # path to folder with logs

dataSet = {}

def main():
    fileList = listdir(pathToLogsDirectory)
    for fileName in fileList:
        print('Started processing: ' + fileName)
        readByLine(fileName)
        print('Finished processing: ' + fileName)
    writeToFile(dataSet)

def readByLine(fileName):
    logFile = open(pathToLogsDirectory + fileName, 'r')
    lines = logFile.readlines()
 
    index = 0
    for line in lines:
        if index > 0:  # skip first line
            parseLine(line, fileName)
        index += 1

def parseLine(line, fileName):                
    splitedLine = line.split(',')
    date = splitedLine[0]
    count = splitedLine[1]
    transformedDate = transformDate(date, fileName)
    writer(transformedDate, int(count), fileName)
        
def transformDate(date, fileName):
    logType = detectType(fileName)
    unifiedDate = datetime.strptime(date, dateFormatMap[logType])
    return unifiedDate.strftime('%d-%m-%Y') # resulted unified format of date

def detectType(fileName):
    if 'ingester' in fileName:
        return 'ingester'
    if 'sdi' in fileName:
        return 'sdi'
    if 'poller' in fileName:
        return 'poller'

def writer(date, count, fileName):
    msgCount = {}
    if date in dataSet.keys(): 
        msgCount = dataSet[date]
    else :
        msgCount = {
            'ingester': 0,
            'poller': 0,
            'sdi': 0
        }
        dataSet[date]={}

    logType = detectType(fileName)
    msgCount[logType] = msgCount[logType] + count
    dataSet[date] = msgCount

def writeToFile(dataSet):
    wb = Workbook()
    sheet = wb.add_sheet('Sheet 1')
    headerStyle = xlwt.easyxf('font: bold 1')
    sheet.write(0, 0, 'Date', headerStyle)
    sheet.write(0, 1, 'Number of SDI messages', headerStyle)
    sheet.write(0, 2, 'Number of msgs produced by poller 	', headerStyle)
    sheet.write(0, 3, 'Ingested messages', headerStyle)
    sheet.write(0, 4, 'Backlog', headerStyle)

    row = 1
    for date in dataSet:
        sheet.write(row, 0, date)
        for messageType in dataSet[date]:
            logType = detectType(messageType)
            sheet.write(row, columnIndexMap[logType], dataSet[date][messageType])
        sheet.write(row, 4, xlwt.Formula('C' + str(row+1) +'-D' + str(row+1)))
        row+=1

    wb.save('result.xls') # output result file


main()