var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let center = Math.floor((start + end) / 2)
    if (nums[center] === target) {
      return center
    } else if (nums[center] < target) {
      start = center + 1
    } else {
      end = center - 1
    }
  }
  return start
};