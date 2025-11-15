# Cryptocurrency Dashboard

A modern React-based frontend application for viewing real-time cryptocurrency data and market information.

## About

This application displays a list of cryptocurrencies with detailed market information including current prices, 24-hour price changes, and market capitalization. Users can select different cryptocurrencies from a sidebar menu to view their respective data cards.

## Technologies Used

- **React 19** - UI library for building interactive interfaces
- **Vite 7** - Fast build tool and development server
- **Ant Design (antd) 5** - UI component library for polished interface elements
- **Tailwind CSS 4** - Utility-first CSS framework for styling
- **Axios** - HTTP client for API requests
- **ESLint** - Code linting and quality enforcement

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager
- Backend API running on `http://localhost:8000`

## Installation

1. Install dependencies:
```bash
npm install
```

## Configuration

The application expects a backend API running at `http://localhost:8000` with the following endpoints:
- `GET /currencies/` - Fetch list of cryptocurrencies
- `GET /currencies/{id}` - Fetch specific cryptocurrency data

To change the API URL, update the axios calls in `src/App.jsx`.

## Available Scripts

- **Development server**: `npm run dev` - Starts the Vite development server
- **Build**: `npm run build` - Creates production build
- **Lint**: `npm run lint` - Runs ESLint for code quality checks
- **Preview**: `npm run preview` - Preview production build locally

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is occupied).
