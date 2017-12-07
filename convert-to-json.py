import csv
import json

csvfile = open('AvalancheDeaths.csv', 'r')
jsonfile = open('accidents.json', 'w')

fieldnames = ("Avalanche Year","YYYY","MM","DD","Place","Setting","State","LAT","LON","Primary Activity","Travel Mode","deaths","notes")
reader = csv.DictReader( csvfile, fieldnames)
data = [row for row in reader]
del data[0] # delete header info
json.dump(data, jsonfile)

csvfile.close()
jsonfile.close()
