candies = [2,3,5,1,3]
extraCandies = 3

m = max(candies)
result = []

for i in candies:
    if i + extraCandies >= m:
        result.append(True)
    else:
        result.append(False)
print(result)


## more condensed version
m = max(candies)
result = []

for i in candies:
    result.append(i + extraCandies >= m)
print(result)