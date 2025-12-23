# Grade Calculator App

A simple and intuitive web application that calculates student grades based on their test scores. Built with React and TypeScript, this app helps students and educators quickly determine percentage grades and letter grades.

## Features

- **Multiple Score Input**: Enter multiple test scores separated by commas
- **Percentage Calculation**: Automatically calculates the percentage based on total possible score
- **Letter Grade Assignment**: Converts percentages to letter grades (A, B, C, F)
- **Pass/Fail Indicator**: Shows whether the student passed or failed
- **Real-time Validation**: Provides instant feedback on input validity
- **Clean UI**: Simple, user-friendly interface with visual feedback

## Grading Scale

- **A**: 80% and above
- **B**: 60% - 79%
- **C**: 50% - 59%
- **F**: Below 50%

## Tech Stack

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Material-UI** - Alert components
- **CSS3** - Custom styling
- **Vite** - Build tool (assumed)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anjaneew/grade-app2.git
cd grade-app2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Usage

1. **Enter Test Scores**: Input your test scores separated by commas (e.g., `85, 90, 78, 92`)
2. **Enter Total Score**: Input the maximum possible score for the test
3. **Click Submit**: The app will calculate your percentage and display your letter grade
4. **View Results**: See your total score, percentage, letter grade, and pass/fail status

### Example

```
Test Scores: 85, 90, 78
Total Score: 100
Result: 253/100 = 84.33% → Grade A → PASSED
```

## Project Structure

```
src/
├── components/
│   ├── Calculator.tsx    # Main calculator component with input form
│   └── GradeCard.tsx     # Results display component
├── App.tsx               # Root component
└── App.css               # Global styles
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Component Overview

**Calculator Component**
- Manages input state for scores and total
- Validates user input
- Calculates total score from comma-separated values
- Displays success/warning alerts

**GradeCard Component**
- Receives calculated scores as props
- Computes percentage grade
- Determines letter grade based on percentage
- Shows pass/fail status

## Deployment

This app is deployed on Vercel. To deploy your own version:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with default settings

Visit the live app: [Add your Vercel URL here]

## Known Issues

- Grade thresholds are hardcoded (consider making them configurable)
- No data persistence (scores are lost on page refresh)
- Limited error handling for edge cases

## Future Enhancements

- [ ] Add support for weighted grades
- [ ] Save calculation history
- [ ] Export results as PDF
- [ ] Support for multiple grading scales
- [ ] Dark mode support
- [ ] Mobile-responsive improvements


## License

All rights reserved

## Author

Anjanee Sewvandika Wijewardana 2025 (https://github.com/anjaneew)

## Acknowledgments

- Material-UI for the alert components
- React and TypeScript communities for excellent documentation