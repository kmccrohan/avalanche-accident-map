import csv
import json

def isFloat(num):
    try:
        float(num)
        return True
    except ValueError:
        return False

csvfile = open('accidents.csv', 'r')
jsonfile = open('src/accidents.json', 'w')

fieldnames = ("Avalanche Year","YYYY","MM","DD","Place","Setting","State","LAT","LON","Primary Activity","Travel Mode","deaths","notes")
reader = csv.DictReader( csvfile, fieldnames)
data = []
i = 0
for row in reader:
    # make sure coordinates given
    if isFloat(row["LON"]) and isFloat(row["LAT"]):
        row["LAT"] = float(row["LAT"])
        row["LON"] = float(row["LON"])
        row["YYYY"] = int(row["YYYY"])
        row["MM"] = int(row["MM"])
        row["DD"] = int(row["DD"])
        row["deaths"] = int(row["deaths"])
        # give row an id
        row["id"] = i
        i = i + 1
        data.append(row)
json.dump(data, jsonfile)

csvfile.close()
jsonfile.close()
