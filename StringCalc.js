function add(str) {
    if (str.trim() === "") return 0;

    const nums = str.split(",").map(num => parseInt(num));

    return nums.reduce((sum, val) => sum + val, 0);
}

module.exports = add;
