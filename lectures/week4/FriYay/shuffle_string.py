s = "litfartsaCigD"
indices = [6, 1, 11, 10, 9, 8, 4, 12, 5, 7, 3, 2, 0]
ans = ""

for i in range(len(indices)):
    ans += s[indices.index(i)]
print(ans)

