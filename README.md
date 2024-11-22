# Sudoku Solver

This is a simple and interactive Sudoku solver built with HTML, CSS, and JavaScript. It allows users to play Sudoku and even solve puzzles automatically with a "Solve" button. This project is designed to be lightweight, easy to use, and fun for Sudoku enthusiasts.

## Features

- **Interactive Sudoku Grid**: A 9x9 grid where users can input their numbers.
- **Validation**: Users can check if their solution is correct by clicking the "Check" button.
- **Automatic Solver**: Clicking the "Solve" button solves the puzzle for the user using backtracking logic.

## How to Use

1. **Input Numbers**: Click on any cell in the grid and type a number between 1-9.
2. **Check**: After filling in the grid, click the "Check" button to see if your solution is correct.
3. **Solve**: If you're stuck, click the "Solve" button to let the program complete the puzzle for you!

## How It Works

The Sudoku solver uses a **backtracking algorithm** to find the solution. It iterates through the grid, checking for valid numbers based on Sudoku rules (each row, column, and 3x3 box must contain unique numbers 1-9). If a number can’t fit, it backtracks and tries the next possibility.

## Technologies Used

- **HTML5**: Structure of the game board and interface.
- **CSS3**: Styling for a clean, simple user interface.
- **JavaScript**: Logic for handling Sudoku grid interactions and solving.

## Contributing

If you want to contribute to this project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
