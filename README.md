# Rock Paper Scissors JS

A command-line implementation of **Rock Paper Scissors** built with JavaScript and Node.js. Play against the computer directly from your terminal, with a simple interface and randomized moves.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Run the Game](#run-the-game)
- [How to Play](#how-to-play)
- [Game Rules](#game-rules)
- [Build a Windows Executable](#build-a-windows-executable)
- [Run the Executable](#run-the-executable)
- [Technologies Used](#technologies-used)

## Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/) 24 or a compatible version.
- npm, which is included with Node.js.

## Installation

1. Clone or download this repository.
2. Open a terminal in the project directory.
3. Install the required dependencies:

   ```bash
   npm install
   ```

## Run the Game

Start the game using Node.js:

```bash
node game.js
```

## How to Play

1. Launch the game from your terminal.
2. Enter one of the following options when prompted:
   - `rock`
   - `paper`
   - `scissors`
   - `exit`
3. The computer randomly selects its move.
4. The game displays both choices and announces the result.
5. Enter another move to play again.
6. Type `exit` to close the game.

### Game Rules

- **Rock** beats scissors.
- **Scissors** beats paper.
- **Paper** beats rock.
- If both players choose the same move, the round ends in a tie.

## Build a Windows Executable

You can package the application into a standalone Windows executable (`.exe`) using `@yao-pkg/pkg`.

Run the following command from the project directory:

```bash
npx @yao-pkg/pkg . --sea --targets node24-win-x64 --output RockPaperScissorsJS.exe
```

This command generates the following executable in the current directory:

```text
RockPaperScissorsJS.exe
```

Make sure your `package.json` is correctly configured and specifies the appropriate entry point and dependencies.

**Note:** Packaging compatibility may vary depending on your dependencies, Node.js version, and installed version of `@yao-pkg/pkg`.

## Run the Executable

On Windows, you can launch the game by double-clicking `RockPaperScissorsJS.exe` or running it from PowerShell:

```powershell
.\RockPaperScissorsJS.exe
```

Running the executable from a terminal is recommended when troubleshooting, as it allows you to see error messages.

## Technologies Used

- **JavaScript** — Game logic and application functionality.
- **Node.js** — JavaScript runtime.
- **Chalk** — Terminal text styling.
- **Chalk Animation** — Animated terminal title.
- **Ora** — Terminal loading spinners.
- **Readline Promises** — Asynchronous command-line input.
- **@yao-pkg/pkg** — Packaging the application into a Windows executable.

---

_Enjoy playing Rock Paper Scissors!_ 🎮
