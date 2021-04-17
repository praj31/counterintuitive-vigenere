const domain = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const isValidKey = (key) => {
  for (let letter of key) {
    if (!domain.includes(letter)) {
      return false;
    }
  }
  return true;
};

export const links = [
  "Objective",
  "Theory",
  "Modification",
  "Algorithm",
  "Hands-On",
];

export const encrypt = (text, key) => {
  text = text.toString().toUpperCase().trim();
  key = key.toString().toUpperCase().trim();
  if (!isValidKey(key)) {
    return "***Please ensure the KEY contains only alphabet and digits.***";
  }
  let keyIndex = 0;
  let output = "";
  for (let letter of text) {
    if (domain.includes(letter)) {
      output +=
        domain[(domain.indexOf(letter) + domain.indexOf(key[keyIndex])) % 36];
      keyIndex = (keyIndex + 1) % key.length;
    } else {
      output += letter;
    }
  }
  return output.toString().trim();
};

export const decrypt = (text, key) => {
  text = text.toString().toUpperCase().trim();
  key = key.toString().toUpperCase().trim();
  if (!isValidKey(key)) {
    return "***Please ensure the KEY contains only alphabet and digits.***";
  }
  let keyIndex = 0;
  let output = "";
  for (let letter of text) {
    if (domain.includes(letter)) {
      output +=
        domain[
          (domain.indexOf(letter) - domain.indexOf(key[keyIndex]) + 36) % 36
        ];
      keyIndex = (keyIndex + 1) % key.length;
    } else {
      output += letter;
    }
  }
  return output.toString().trim();
};
