var longestCommonPrefix = function (strs) {
  let len = strs.length
  let commonStrs = strs[0]

  for (let i = 0; i < len; i++) {
    let currentStrs = strs[i]
    let j = 0

    while (j < commonStrs.length && j < currentStrs.length) {
      if (commonStrs[j] !== currentStrs[j]) break;
      j++
    }

    commonStrs = commonStrs.substring(0, j)
  }
  return commonStrs
}

let strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs))