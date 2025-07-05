function add(str) {
    if (typeof str !== "string") {
        throw new Error("Input must be a string");
    }

    if (str.trim() === "") return 0;

    const trimmed = str.replace(/[^0-9\-]+/g, ","); 

    const nums = trimmed
        .split(/,+/)
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
