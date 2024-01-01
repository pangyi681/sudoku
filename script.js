var initialSudoku = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const sudokuGrid = document.getElementById('sudoku-grid');

// 創建9x9的數獨表格
for (let i = 0; i < 9; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j < 9; j++) {
    const cell = document.createElement('td');
    const input = document.createElement('input');
    input.type = 'number';

    // 如果是初始數獨中已經有數字，設置為disabled
    if (initialSudoku[i][j] !== 0) {
      input.value = initialSudoku[i][j];
      input.disabled = true;
    }

    // 將用戶輸入的值存儲到數獨陣列中
    input.addEventListener('input', function() {
      initialSudoku[i][j] = parseInt(this.value) || 0;
    });

    cell.appendChild(input);
    row.appendChild(cell);
  }
  sudokuGrid.appendChild(row);
}
function check(){
  var ans =[
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];
    var win = true;
      for(let i = 0; i<9; i++){
        for(let j = 0; j<9; j++){
         if(initialSudoku[i][j] != ans[i][j]){
          win = false;
          break;
         }
         if(win = false){
          break;
         }
        }
      }
      if(win == true){
        alert("ongratulations! You got the wrong answer");
      }
      else{
        alert("There is something wrong～");
      }
}
var w = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

function rst() {
  // 重置 initialSudoku 到初始狀態 w
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      initialSudoku[i][j] = w[i][j];
    }
  }

  // 更新表格中的數字和狀態
  const inputs = document.querySelectorAll('#sudoku-grid input');
  inputs.forEach((input, index) => {
    if (w[Math.floor(index / 9)][index % 9] !== 0) {
      input.value = w[Math.floor(index / 9)][index % 9];
      input.disabled = true;
    } else {
      input.value = '';
      input.disabled = false;
    }
  });
}
