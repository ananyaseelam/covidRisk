from covidApi import findPercentChange
from googleApi import returnCounty, returnPlaceType


location = 'Outer Banks'
x = returnCounty(location)
y = returnPlaceType(location)

print(x + ' County ' + str(y))