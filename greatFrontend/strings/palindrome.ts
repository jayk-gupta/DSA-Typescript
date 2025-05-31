export default function isStringPalindrome(str: string): boolean {
  let s = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s.charAt(i) != s.charAt(j)) {
      return false;
      }
      i++;
      j--;
  }
  return true;
}

console.log(isStringPalindrome("io 'x' in Nixon"));
