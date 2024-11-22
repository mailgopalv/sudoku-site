// Function to generate a random Sudoku puzzle
function generateSudoku() {
    let board = Array.from({ length: 9 }, () => Array(9).fill(0));
  
    // Recursive backtracking function to fill the board
    function isValid(board, row, col, num) {
      for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num) {
          return false;
        }
      }
  
      let boxRow = Math.floor(row / 3) * 3;
      let boxCol = Math.floor(col / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[boxRow + i][boxCol + j] === num) {
            return false;
          }
        }
      }
  
      return true;
    }
  
    function solve(board) {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (board[row][col] === 0) {
            for (let num = 1; num <= 9; num++) {
              if (isValid(board, row, col, num)) {
                board[row][col] = num;
                if (solve(board)) {
                  return true;
                }
                board[row][col] = 0; // Backtrack
              }
            }
            return false;
          }
        }
      }
      return true;
    }
  
    solve(board);
    return board;
  }
  
  // Function to remove numbers and create a puzzle
  function createPuzzle(board, difficulty = 'medium') {
    let numCellsToRemove;
    
    switch (difficulty) {
      case 'easy':
        numCellsToRemove = 40;
        break;
      case 'medium':
        numCellsToRemove = 50;
        break;
      case 'hard':
        numCellsToRemove = 60;
        break;
      default:
        numCellsToRemove = 50;
    }
  
    let puzzle = board.map(row => row.slice()); // Copy the board to keep the original intact
    let cellsRemoved = 0;
  
    while (cellsRemoved < numCellsToRemove) {
      let row = Math.floor(Math.random() * 9);
      let col = Math.floor(Math.random() * 9);
  
      if (puzzle[row][col] !== 0) {
        puzzle[row][col] = 0;
        cellsRemoved++;
      }
    }
  
    return puzzle;
  }
  
  // Function to display the puzzle on the page
  function displayPuzzle(puzzle) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let cell = document.getElementById(`cell-${i * 9 + j}`);
        if (puzzle[i][j] !== 0) {
          cell.value = puzzle[i][j];
          cell.disabled = true; // Disable the cell to prevent editing
        } else {
          cell.value = '';
          cell.disabled = false;
        }
      }
    }
  }
  
  // Event listener for the "Generate New Puzzle" button
  document.getElementById('generatePuzzle').addEventListener('click', () => {
    const completeBoard = generateSudoku();
    const puzzle = createPuzzle(completeBoard, 'medium');
    displayPuzzle(puzzle);
  });
  
  // Event listeners for the "Check" and "Solve" buttons (to be implemented)
  document.getElementById('check').addEventListener('click', () => {
    alert('Check logic goes here!');
  });
  
  document.getElementById('solve').addEventListener('click', () => {
    alert('Solve logic goes here!');
  });
  