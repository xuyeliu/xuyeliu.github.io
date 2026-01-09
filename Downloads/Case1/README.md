# Titanic Data Visualization Dashboard

A basic React-based web dashboard that loads and visualizes the Titanic dataset.

## 🔹 Task A: Data Visualization Dashboard – Titanic Dataset

### Stage 1: Codebase Construction
Build a web-based dashboard that loads and visualizes the Titanic dataset (e.g., via CSV)
- Implement interactive charts (e.g., survival rate by gender/class, age distribution) using a library like D3.js or Chart.js.
- Provide basic UI controls to filter data (e.g., select passenger class, age range).
- Design with responsiveness in mind, allowing different screen sizes to view visualizations.
- Encourage ambiguity in metric definitions (e.g., "visualize important trends"), requiring participant clarification.

### Stage 2: Codebase Modification
- Add a new visualization: e.g., survival correlation with family size or port of embarkation.
- Introduce a feature to export selected visualizations as PNG or PDF.
- Refactor chart generation to support switching between chart types (bar, line, pie).
- Fix performance issues when loading large subsets of the dataset.
- Add a summary statistics sidebar, dynamically updated based on filters.

## Current Implementation

This is a **minimal starting point** that provides:

✅ **Basic Features**:
- 📊 **CSV Data Loading**: Loads Titanic dataset from CSV file
- 📈 **Simple Visualization**: Basic bar chart showing passenger count by class
- 📋 **Data Preview**: Table showing sample passenger data
- 📱 **Responsive Layout**: Basic responsive design

🚧 **Features to Implement**:
- Interactive charts with survival analysis
- Data filtering controls
- Multiple chart types and visualizations
- Export functionality
- Performance optimizations
- Advanced UI/UX features

## Quick Start

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm start
```

The app will open at http://localhost:3000

### Build for Production
```bash
npm run build
```

## Project Structure

```
src/
├── App.js                    # Main application component
├── App.css                   # Global styles
├── index.js                  # Application entry point
└── components/
    ├── Dashboard.js          # Main dashboard component
    ├── Dashboard.css         # Dashboard styles
    └── BasicChart.js         # Simple chart component

public/
└── titanic.csv              # Titanic dataset
```

## Dataset

The dataset includes the following fields:
- **PassengerId**: Unique passenger identifier
- **Survived**: Survival status (0 = No, 1 = Yes)
- **Pclass**: Passenger class (1 = First, 2 = Second, 3 = Third)
- **Name**: Passenger name
- **Sex**: Gender
- **Age**: Age in years
- **SibSp**: Number of siblings/spouses aboard
- **Parch**: Number of parents/children aboard
- **Ticket**: Ticket number
- **Fare**: Passenger fare
- **Cabin**: Cabin number
- **Embarked**: Port of embarkation (S = Southampton, C = Cherbourg, Q = Queenstown)

## Technology Stack

- **React 18**: Frontend framework
- **Chart.js + react-chartjs-2**: Chart visualization library
- **Papa Parse**: CSV data parsing
- **CSS3**: Modern styling

## Development Notes

- This is a **basic starting point** for the study requirements
- Participants should build upon this foundation to implement Stage 1 and Stage 2 features
- The current implementation only shows basic data loading and simple visualization
- All advanced features need to be implemented by participants