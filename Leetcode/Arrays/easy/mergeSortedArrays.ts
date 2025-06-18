function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let n1 = m - 1,
    n2 = n - 1;
  let index = m + n - 1;
  while (n1 >= 0 && n2 >= 0) {
    if (nums1[n1] > nums2[n2]) {
      nums1[index] = nums1[n1];
      index--;
      n1--;
    } else {
      nums1[index] = nums2[n2];
      index--;
      n2--;
    }
  }
  while (n2 >= 0) {
    nums1[index] = nums2[n2];
    index--;
    n2--;
  }
}
