def fizzBuzz(n):
    answer = []

    for num in range(1, n+1):
        divisible_by_3 = (num % 3 == 0)
        divisible_by_5 = (num % 5 == 0)
        if divisible_by_3 and divisible_by_5:
            # Divides by both 3 and 5, add FizzBuzz
            answer.append("FizzBuzz")
        elif divisible_by_3:
            # Divides by 3, add Fizz
            answer.append("Fizz")
        elif divisible_by_5:
            # Divides by 5, add Buzz
            answer.append("Buzz")
        else:
            # Not divisible by 3 or 5, add the number
            answer.append(str(num))

    return answer

print(fizzBuzz(30))