function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    const target = nums1 // Can be nums1 or nums2, or a new array

    for (
        let i = m + n -1, i1 = m - 1, i2 = n - 1;
        i >= 0;
        --i
    ) {
        target[i] =
            i1 < 0 ? nums2[i2--] :
            i2 < 0 ? nums1[i1--] :
            nums1[i1] < nums2[i2] ? nums2[i2--] :
            nums1[i1--]
    }

}
