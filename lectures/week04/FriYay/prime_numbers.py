max = int(input("Find primes up to what number?: "))

def solution_1(num):
    prime_nums = []
    for x in range(2, num + 1): #range starts at 0
        isPrime = True
        for y in range(2, x):
            if x % y == 0:
                isPrime = False
                break
        if isPrime: 
            prime_nums.append(x)
    return prime_nums


## stop at square root of each number
def solution_2(num):
    prime_nums = []
    for x in range(2, max + 1):
        isPrime = True
        for y in range(2, int(x**0.5)+1):
            if x % y == 0:
                isPrime = False
                break
        if isPrime: 
            prime_nums.append(x)
    return prime_nums


print(solution_2(max))

## solution 3
start = 11
end = 25

for i in range(start,end):
    if i>1:
        for j in range(2,i):
            if(i % j==0):
                break
        else:
            print(i)