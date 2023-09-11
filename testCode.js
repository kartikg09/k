let inp = "abaaabbeeebabacceea";

let n = inp.length;
let freqObj = {};
for(let i = 0; i < n; i++) {
    // console.log(freqObj[inp[i]], inp[i]);
    if (freqObj[inp[i]]) freqObj[inp[i]]++;
    else freqObj[inp[i]] = 1;
    // console.log(freqObj[inp[i]], inp[i]);
}
// console.log("---", JSON.stringify(freqObj));
let sortingOrder = Object.values(freqObj).map(item => item).sort();
// console.log("---", JSON.stringify(sortingOrder));
let idxObj = {};

let insertIdx = Object.keys(freqObj).map(item => {
    let findIdx; 
    sortingOrder.map((item1, idx) => {
        if (freqObj[item] === item1) {findIdx = idx; return;}
        return;
    })
    // console.log(findIdx);
    // 0 - [a, b]
    // 1 - [c]
    // 3 - [d]
    if (idxObj[findIdx]) idxObj[findIdx].push(item);
    else idxObj[findIdx] = [item];
})

console.log("---", JSON.stringify(idxObj));
const convertToString = (ch, count) => Array(count).fill().map(() => ch).join("");

let n1 = sortingOrder.length;
let res = "";
for (let j = n1-1; j >= 0; j--) {
    if (idxObj[j]) {let s1 = idxObj[j].map(item => {
        // console.log(item, freqObj[item]*1, convertToString(item, freqObj[item]*1));
        return convertToString(item, freqObj[item]*1);
    });
    // console.log(s1);
    res += s1;
}
}

// let t = Array(7).fill().map(() => {console.log('a')});
// console.log(t);

console.log(res);


// let inp1 = "abaaabbeeebabacceea";

// // Create a frequency map
const frequencyMap = new Map();
for (const char of inp) {
  if (frequencyMap.has(char)) {
    frequencyMap.set(char, frequencyMap.get(char) + 1);
  } else {
    frequencyMap.set(char, 1);
  }
}
// console.log(frequencyMap);
// console.log([...frequencyMap.entries()], frequencyMap.entries());
// console.log(freqObj);

// Sort the characters based on frequency
const sortedChars = [...freqObj.entries()].sort((a, b) => b[1] - a[1]);
// console.log(sortedChars);
// Build the output string
let out = '';
for (const [char, count] of sortedChars) {
  out += char.repeat(count);
}

console.log(out);