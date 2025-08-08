# Crypto Genius
## Overview

Crypto Genius is a React + MUI crypto dashboard powered by the public CoinGecko API.

Live Preview:  
[https://crypto-genius.netlify.app/](https://crypto-genius.netlify.app/)
---

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technology Used](#technology-used)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)
- [Contact / Support](#contact--support)

---

## Project Description

**Crypto Genius** is a modern, responsive ReactJS web application that displays real-time cryptocurrency data using the CoinGecko API. The platform enables users to browse coins, view detailed information, and navigate seamlessly with a focus on usability and performance.
---

## Features

- **Modern Responsive Design:** Fully responsive layout using CSS Grid and Flexbox.
- **Real-Time Data:** Fetches live cryptocurrency data from the CoinGecko API.
- **Routing:** Client-side navigation with React Router.
- **Pagination:** User-friendly navigation for large datasets.
- **Coin Detail Pages:** Detailed information for each coin via dynamic routes.
- **Accessibility:** Focus states and screen reader-friendly markup.
- **Smooth Animations:** Subtle transitions for interactive elements.
- **Dark Theme:** Visually appealing color palette for comfortable viewing.

---

## Technology Used

- **React** – Frontend library for building user interfaces
- **React Router DOM** – Declarative routing for React applications
- **Material UI (MUI)** – UI component library for responsive layouts and design
- **CSS3** – Styling and layout using Grid and Flexbox
- **CoinGecko API** – Source of real-time cryptocurrency data
- **Jest & React Testing Library** – Unit and component testing
- **Web Vitals** – Performance measurement utilities

---

## Installation

### Prerequisites

- [Git](https://git-scm.com/) (to clone the repository)
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (for dependency management)
- A modern web browser (Chrome, Edge, Firefox, Safari, etc.)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/usernayeem/crypto-genius.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd crypto-genius
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run locally:**

   ```bash
   npm start
   ```

   This will start the development server. The app will be available at `http://localhost:3000`.

---

## Usage

- **Homepage:** Browse a list of cryptocurrencies with live price data.
- **View Details:** Click on any coin to view detailed statistics and historical data.
- **Pagination:** Navigate between pages of coins using the pagination controls.
- **Accessibility:** All interactive elements are focusable and labeled for screen readers.

---

## Configuration

- **API Endpoint:** The application fetches data from the public CoinGecko API; no API key or environment variable is required by default.
- **Styling:** Modify the `index.css` file to customize colors, layout, or typography.
- **No backend configuration** or additional environment variables are needed for basic usage.

---

## Contributing

Contributions are welcome! If you would like to contribute to this project, follow these steps:

1. **Fork the Repository**:

   - Navigate to the repository you want to contribute to.
   - Click the **Fork** button in the upper right corner to create a personal copy of the project in your GitHub account.

2. **Clone the Forked Repository**:

   - Open your forked repository on GitHub.
   - Click the "Code" button to get the HTTPS or SSH URL of your forked repository.
   - Open your terminal or command prompt.
   - Use the `git clone` command followed by the URL you copied to clone the repository to your local machine:

     ```bash
     git clone https://github.com/yourusername/crypto-genius.git
     ```

     Replace `yourusername` with your own Github username.

   - Navigate into the cloned repository directory:
     ```bash
     cd crypto-genius
     ```

3. **Create a New Branch**: Switch to a new branch where you'll make your changes. You can do this using the following command:

   ```bash
   git checkout -b my-branch
   ```

   Replace `my-branch` with a branch name that describes your work.

4. **Make Your Changes**: Make the necessary changes to the codebase. You can add, modify, or delete files as needed.

5. **Stage Your Changes**: You can use `git add <filename>` to stage specific files or `git add .` to stage all changes.

   ```bash
   git add .
   ```

6. Commit Your Changes: Commit your staged changes with a descriptive message. Follow the imperative style for commit messages (e.g., “Fix bug” instead of “Fixed bug”). For example:

   ```bash
   git commit -m "my commit message"
   ```

   Replace `my commit message` with a meaningful message for your commit.

7. **Push to Your Branch**: Push your changes to the branch you created:

   ```bash
   git push -u origin my-branch
   ```

   Replace `my-branch` with your branch name.

8. **Submit a Pull Request**:
   - Navigate to your forked repository on GitHub.
   - Click the "Compare & pull request" button.
   - Review the changes you're proposing and ensure they are accurate.
   - Add a descriptive title and a detailed description of your contribution.
   - Click the "Create pull request" button to submit your contribution for review.

---

## Testing

- **Automated Testing:**  
  The project uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit and component testing.

- **Run Tests:**

  ```bash
  npm test
  ```

- For manual testing:
  - Open the app in different browsers and devices.
  - Test keyboard navigation and accessibility.
  - Check responsiveness on various screen sizes.

---

## License

This project is licensed under the [MIT](LICENSE) License.

---

## Contact / Support

- **Author:** [Md Nayeem](https://www.github.com/usernayeem)
- **Repository:** [github.com/usernayeem/crypto-genius](https://github.com/usernayeem/crypto-genius)
- **Issues:** Please use the [GitHub Issues page](https://github.com/usernayeem/crypto-genius/issues) for bug reports or feature requests.
