//1 Multiply without *
// note: this is a simple solution that only works for numbers >= 0
function multiply(a, b) {
    let i = 0;
    let sum = 0;
    while (i < a) {
        sum += b;
        i++;
    }
    return sum;
}

//2 Islands of Ones
function islandsof1(arr) {
    let total = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] == 1 && arr[i + 1] != 1) {
        total += 1;
        }
        i++;
    }
    return total;
}

//3 Reverse a string
//version 1 without built in string/array methods
function reverse1(string) {
    let new_string = "";
    for (let i = string.length - 1; i >= 0; i--) {
        new_string += string[i];
    }
    return new_string;
}

//version 2 using built in string/array methods
function reverse2(string) {
    let string_array = string.split("");
    let reversed_string_array = string_array.reverse();
    let new_string = reversed_string_array.join("");
    return new_string;
}

//4 Palindrome
function palidromeCheck(string) {
    let i = 0;
    let j = string.length - 1;
    while (i < j) {
        if (string[i] != string[j]) {
            return false;
        } else {
            return true;
        }
    }
    i++;
    j--;
}