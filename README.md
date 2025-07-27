# Suizzes CLI Tool

A fun and interactive command-line (CLI) quiz app to test your knowledge of the Sui blockchain and Move programming language. Suizzes makes learning engaging with colorful animations, smooth prompts, and a modern terminal experience.

## Features

- Interactive quiz to test your Sui and Move knowledge.
- Cool CLI design with vibrant text, gradients, and animations.
- Easy to use with a single `npx` command.
- Fast feedback with instant results and loading spinners.

## Installation

Run Suizzes instantly without installing anything by using:

```bash
npx suizzes
```

To run Suizzes locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/suizzes.git
   ```
2. Navigate to the project folder:
   ```bash
   cd suizzes
   ```
3. Install the required dependencies:
   ```bash
   npm install chalk chalk-animation figlet gradient-string inquirer nanospinner
   ```
4. Run the quiz:
   ```bash
   node index.js
   ```

## Usage

Start the quiz by running:

```bash
npx suizzes
```

Follow the prompts to answer questions about Sui and Move. The CLI will guide you with colorful animations and show your results instantly.

## Packages Used

Suizzes is built with these awesome Node.js packages:

- [chalk](https://github.com/chalk/chalk): Adds colorful text to the terminal.
- [inquirer](https://github.com/SBoudrias/Inquirer.js): Creates interactive prompts for quiz questions.
- [gradient-string](https://github.com/bokub/gradient-string): Applies gradient effects to text for a stylish look.
- [chalk-animation](https://github.com/bokub/chalk-animation): Animates text for a lively quiz intro.
- [figlet](https://github.com/patorjk/figlet.js): Generates cool ASCII art for titles.
- [nanospinner](https://github.com/usmanyunusov/nanospinner): Shows loading spinners for smooth transitions.

To install these dependencies manually:

```bash
npm install chalk chalk-animation figlet gradient-string inquirer nanospinner
```

## Why Suizzes?

Suizzes is a unique CLI tool that makes learning about Sui and Move fun and interactive. Whether you're new to blockchain or a seasoned developer, Suizzes offers a quick way to test your knowledge in a visually appealing way.

## Contributing

We welcome contributions! To add new questions, improve the design, or fix bugs, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request on GitHub.

Please ensure your code is clean and includes clear comments or documentation.

## License

This project is licensed under the MIT License. You are free to use, modify, and share it.

## Acknowledgments

- Thanks to the Sui and Move communities for inspiring this project.
- Shoutout to the creators of the open-source packages used in Suizzes.

Happy quizzing with Suizzes! 🚀