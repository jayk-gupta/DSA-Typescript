// Two strings are anagrams if they contain:

// Exactly the same characters

// Same frequency of each character

// Any order

export default function isStringAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  const m = new Map<string, number>();

  for (let i = 0; i < str1.length; i++) {
    const c = str1.charAt(i);
    const freq = (m.get(c) ?? 0) + 1;
    m.set(c, freq);
  }

  for (let i = 0; i < str2.length; i++) {
    const c = str2.charAt(i);
    const freq = m.get(c) ?? 0;
    if (freq === 0) return false;
    m.set(c, freq - 1);
  }

  return true;
}
console.log(isStringAnagram("anagram","nagmara"));
