const nums = [1, 3, 2, 5, 2];
const num = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== 2) {
    num.push(nums[i]);
  }
}
console.log(num);
