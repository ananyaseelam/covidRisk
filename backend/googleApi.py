import googlemaps
import pprint
import time
import requests
import json #// sort, search, etc 

# the result is a Python dictionary:
API_KEY = 'AIzaSyBveSLDqpF_INNFNwuaKwj2btremDjHtTs'


def returnCounty(address):
    gmaps = googlemaps.Client(key=API_KEY)
    oneplaceblob = gmaps.find_place(address, 'textquery')
    oneplaceID = ((oneplaceblob['candidates'])[0])['place_id']
    oneplace = gmaps.place(str(oneplaceID))
    countyString = (oneplace['result'])['address_components']
    county = countySearch(countyString)
    #print(json.dumps(oneplace, sort_keys=True, indent=4))
    return county

def returnPlaceType(address):
    gmaps = googlemaps.Client(key=API_KEY)
    oneplaceblob = gmaps.find_place(address, 'textquery')
    oneplaceID = ((oneplaceblob['candidates'])[0])['place_id']
    oneplace = gmaps.place(str(oneplaceID))
    placeType = (oneplace['result'])['types']
    return placeType

def countySearch(searchString):
    searchString = str(searchString)
    county = searchString[:searchString.find(' County')]
    wordList = county.split()
    return str(wordList[-1])[1:]

location = 'Outer Banks'
x = returnCounty(location)
y = returnPlaceType(location)

print(x + ' ' + str(y))




