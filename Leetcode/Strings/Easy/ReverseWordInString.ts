// Input: s = "the sky is blue";
// Output: "blue is sky the";
// 151

function reverseWords(s:string) {
    const words = s.trim().split(" ").reverse().join(" ");
    return words;

}

console.log(reverseWords("the sky"));