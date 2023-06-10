let first = [];
let last = [];

for (let i = 0; i < 16; i++) {
  first[i] = i + 1;
}

let rdm;
for (let i = 0; i < 16; i++) {
  rdm = Math.floor(Math.random() * first.length);
  last[i] = first[rdm];
  first.splice(rdm, 1);
}

let table = '';
for (let i = 0; i < 4; i++) {
  table += '<tr>';
  for (let j = 0; j < 4; j++) {
    let index = i * 4 + j;
    table += `<td onclick="clicktable(this, ${last[index]}, ${index})">${last[index]}</td>`;
  }
  table += '</tr>';
}

let tbl = document.getElementById("tbl");
tbl.innerHTML = table;

let nowNumber = 1;

function clicktable(cell, number) {
  if (number === nowNumber) {
    cell.style.backgroundColor = 'green';
    nowNumber++;
    if (nowNumber === 17) {
      alert('success');
      
    }
} else {
    alert('try again');
  }
}
