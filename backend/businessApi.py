import populartimes
from googleApi import getPlaceID, API_KEY
import json

def returnPoptimes(day, hour):
    dayNum = {'Monday':0, 'Tuesday':1, 'Wednesday':2, 'Thursday':3, 'Friday':4, 'Saturday':5, 'Sunday':6}
    poptimes = populartimes.get_id(API_KEY, getPlaceID('RDU'))
    dataPoint = (((poptimes['populartimes'])[dayNum[str(day)]])['data'])[int(hour)-1]
    return dataPoint

