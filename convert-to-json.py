import csv
import json

csvfile = open('accidents.csv', 'r')
jsonfile = open('src/accidents.json', 'w')

fieldnames = ("Avalanche Year","YYYY","MM","DD","Place","Setting","State","LAT","LON","Primary Activity","Travel Mode","deaths","notes")
reader = csv.DictReader( csvfile, fieldnames)
data = []
# make sure coordinates given
for row in reader:
    if row["LAT"] != "" and row["LON"] != "":
        data.append(row)
del data[0] # delete header info
json.dump(data, jsonfile)

csvfile.close()
jsonfile.close()
