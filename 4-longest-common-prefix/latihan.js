const longestCommonPrefix = (strs) => {
  let len = strs.length
  let commonStrs = strs[0]
  // console.log(commonStrs)

  for (let i = 0; i < len; i++) {
    let currentStrs = strs[i]
    // console.log(currentStrs.length)
    let j = 0

    while (j < commonStrs.length && j < currentStrs.length) {
      // console.log(commonStrs[j])
      // console.log(currentStrs[j])
      if (commonStrs[j] !== currentStrs[j]) break;
      j++
    }
    commonStrs = commonStrs.substring(0, j)
  }
  return commonStrs
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))