# Employee Management System

A full-stack MERN employee management app for creating, viewing, editing, and deleting employee records.

## Overview
This project contains a React frontend and an Express/MongoDB backend. Employee data is saved in MongoDB and managed through REST APIs.

## Features
- Home page with navigation
- Create, view, edit, and delete employees
- Employee list and single employee details page
- Form handling with `react-hook-form`
- API calls with `fetch` and `axios`
- Context API and Zustand examples for global state
- Mongoose validation for required fields and 10-digit mobile numbers

## Tech Stack Used
- Frontend: React 19, Vite, React Router DOM, Tailwind CSS
- State/Form: Context API, Zustand, React Hook Form
- HTTP: Axios and Fetch API
- Backend: Node.js, Express.js, Mongoose
- Database: MongoDB
- Middleware/Config: CORS, Dotenv, Express JSON parser
- Deployment: Vercel for frontend, Render for backend

## Folder Structure
```text
Employee System/
  frontend/        React + Vite client app
  ReactBackend/    Express + MongoDB server
```

## Backend API
Base URL: `https://emp-management-app.onrender.com/employee-api`

```text
GET     /employees       Get all employees
POST    /employees       Create a new employee
PUT     /employees/:id   Update employee by ID
DELETE  /employees/:id   Delete employee by ID
```

Employee fields:
```text
name, email, mobile, designation, companyName
```

## Local Setup
Frontend:
```bash
cd frontend
npm install
npm run dev
```

Backend:
```bash
cd ReactBackend
npm install
npm start
```

Create `ReactBackend/.env`:
```env
DB_URL=your_mongodb_connection_string
PORT=5000
```

## Scripts
- Frontend: `npm run dev`, `npm run build`, `npm run lint`, `npm run preview`
- Backend: `npm start`

## Deployment Details
- Frontend is deployed on Vercel.
- Frontend URL found in CORS comments: `https://emp-management-app-chi.vercel.app`
- Another Vercel preview URL found: `https://emp-management-6dw0jzhrw-phani-madhuri-vadlamani-s-projects.vercel.app`
- Backend is deployed on Render.
- Backend URL: `https://emp-management-app.onrender.com`
- Database connection is managed through the `DB_URL` environment variable.
- Vercel SPA routing is configured in `frontend/vercel.json`.
