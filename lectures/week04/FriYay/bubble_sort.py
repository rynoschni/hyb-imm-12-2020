def bubble(list_a):
    index_length = len(list_a) - 1
    sorted = False

    while not sorted:
        sorted = True #when all numbers are sorted, if statement won't activate and sorted will remain True, thus ending the while loop
        for i in range(0, index_length): #range does not include second number
            if list_a[i] > list_a[i+1]:
                sorted = False
                list_a[i], list_a[i+1] = list_a[i+1], list_a[i]
                #print(list_a)
        
    return list_a

print(bubble([2, 5, 7, 10, 14, 1]))