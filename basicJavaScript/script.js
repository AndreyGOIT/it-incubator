const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
};

// remember change initial value of i to "0" (zero)
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
};

console.log(result);