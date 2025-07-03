function add(str) {
    if (str.trim() === "") return 0;

    const trimmed = str.replace(/\n/g, ",");

    const nums = trimmed
        .split(",")
        .map(num => num.trim())
        .filter(num => num !== "")
        .map(num => parseInt(num));

    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error("Negative numbers not allowed");
    }

    return nums.reduce((sum, val) => sum + val, 0);
}

module.exports = add;
