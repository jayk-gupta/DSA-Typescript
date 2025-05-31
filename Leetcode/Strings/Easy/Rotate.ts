function rotateString(s: string, goal: string): boolean {
  let ans;
  let word = s;
  for (let i = 1; i <= s.length; i++) {
    let letter = "";
    letter = word.slice(0, 1);
    word = word.slice(1, s.length);
    ans = word + letter; //bcdea
    console.log(ans);
    if (ans === goal) return true;
    word = ans;
    // console.log(word);


  }
  return false;
}

// optimized
function rotateString2(s: string, goal: string): boolean {
  return s.length === goal.length && (s + s).includes(goal);
};

///////////////////////////////////////////////
let s = "abcde",
  goal = "abcde";

console.log(rotateString(s, goal));
