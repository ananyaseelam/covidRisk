from covidApi import findPercentChange
from googleApi import returnCounty, returnPlaceType, getPlaceID


location = 'John F Kennedy Airport'
x = returnCounty(getPlaceID(location))
y = returnPlaceType(location)
pc = findPercentChange(x)

print(pc)
print(x + ' County ' + str(y))