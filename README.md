# 📘 Incubyte TDD Assessment – String Calculator

This repository contains a solution to the **Incubyte TDD Kata** challenge as part of the hiring process. The objective is to implement a `StringCalculator` using the principles of **Test-Driven Development (TDD)**.

---

## 🔧 Tech Stack

- **Language**: JavaScript (ES6)
- **Testing Framework**: [Vitest](https://vitest.dev)

---

## ✅ What This Kata Does

Implements a function `add(string)` that returns the **sum of numbers** in a string. It supports:

- Empty string returns 0
- A single number returns itself
- Multiple numbers separated by:
  - Commas (`,`)
  - Newlines (`\n`)
  - Random delimiters (e.g. `;`, `***`, etc.)
  - Custom delimiters using `//[delimiter]\n`
- Ignores numbers > 1000
- Throws an error when negatives are passed, listing **all** negative values

---

## Screenshot of Passed Test Cases
![Test.png](/Test.png)


## 🚦 3 Laws of TDD

> Originally defined by **Robert C. Martin (Uncle Bob)**

1. **You may not write production code unless it is to make a failing test pass.**
2. **You may not write more of a test than is sufficient to fail (not compiling is failing).**
3. **You may not write more production code than is sufficient to pass the failing test.**

---

## 🧪 Test Status

All tests are written using Vitest.  
To run tests:

```bash
npm install
npx vitest run
