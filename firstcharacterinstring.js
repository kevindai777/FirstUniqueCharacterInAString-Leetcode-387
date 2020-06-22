//Objective is to find the first unique letter's index in a string
//For example, "leetcode" would return 0
//If not found, return -1

let string = 'leetcode'


//O(n) solution

let map = {}

//Easy counter to find the frequency of all characters in string
for (let i = 0; i < string.length; i++) {
    if (map[string.charAt(i)] === undefined) {
        map[string.charAt(i)] = 1
    } else {
        map[string.charAt(i)]++
    }
}

//Starting from the front of the string, find character with frequency of 1
for (let i = 0; i < string.length; i++) {
    if (map[string.charAt(i)] === 1) {
        return i
    }
}

//If the unique character doesn't exist, return -1
return -1