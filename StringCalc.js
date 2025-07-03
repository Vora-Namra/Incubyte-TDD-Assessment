function add(str) {
    if (str.trim() === "") return 0;

    const nums = str.split(",").map(num => parseInt(num));

    if (nums.length === 1) {
        return nums[0];
    }

    return 0;

}

module.exports = add;
