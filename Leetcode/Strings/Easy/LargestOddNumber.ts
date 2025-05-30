function largestOddNumber(num: string): string {

  for (let i = num.length - 1; i >= 0; i--){
    const digit = num[i];
    if (parseInt(digit) % 2 !== 0) {
      return num.slice(0, i + 1);
    }
  }

  return "";
};

const ans = largestOddNumber("35427");
console.log(ans);

