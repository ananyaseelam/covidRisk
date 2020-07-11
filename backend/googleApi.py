import googlemaps
import pprint
import time
import requests
import json #// sort, search, etc 
import populartimes
import csv

# the result is a Python dictionary:
API_KEY = 'AIzaSyBveSLDqpF_INNFNwuaKwj2btremDjHtTs'

def getPlaceID(address):
    gmaps = googlemaps.Client(key=API_KEY)
    oneplaceblob = gmaps.find_place(address, 'textquery')
    oneplaceID = ((oneplaceblob['candidates'])[0])['place_id']
    return oneplaceID

def returnCounty(placeID):
    gmaps = googlemaps.Client(key=API_KEY)
    oneplace = gmaps.place(str(placeID))
    searchString = (oneplace['result'])['address_components']
    searchString = str(searchString)
    county = searchString[:searchString.find(' County')]
    pos = county.rindex("'")
    countyVal = county[pos+1:]
    return countyVal

def returnState(placeID):
    state_names = [
    "Alaska", "Alabama", "Arkansas", "American Samoa", 
    "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", 
    "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", 
    "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", 
    "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", 
    "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", 
    "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", 
    "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", 
    "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", 
    "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"
    ]
    gmaps = googlemaps.Client(key=API_KEY)
    oneplace = gmaps.place(str(placeID))
    searchString = (oneplace['result'])['address_components']
    stateVal = ''
    for state in state_names:
        if (str(searchString).find(str(state)) != -1):
            stateVal = str(state)
    return stateVal


def returnPlaceType(address):
    gmaps = googlemaps.Client(key=API_KEY)
    oneplaceblob = gmaps.find_place(address, 'textquery')
    oneplaceID = ((oneplaceblob['candidates'])[0])['place_id']
    oneplace = gmaps.place(str(oneplaceID))
    placeType = (oneplace['result'])['types']
    return placeType[0]


def returnPoptimes(day, hour, location):
    dayNum = {'Monday':0, 'Tuesday':1, 'Wednesday':2, 'Thursday':3, 'Friday':4, 'Saturday':5, 'Sunday':6}
    poptimes = populartimes.get_id(API_KEY, getPlaceID(location))
    dataPoint = (((poptimes['populartimes'])[dayNum[str(day)]])['data'])[int(hour)-1]
    return dataPoint

def avgTimeSpent(placeType):
    with open('Average_Time_Spent_Risk.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            if row[0] == placeType:
                avgTimeRisk = float(row[3])
    return avgTimeRisk

#print(returnState(getPlaceID('Starbucks in Miami Beach')))