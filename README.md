# AI Study Assistant

AI Study Assistant is a web application that transforms study notes into useful learning material using the Gemini API.

## Features

- AI-generated Summary
- Flashcards
- Multiple Choice Quiz
- Revision Checklist
- Responsive Interface
- Loading State
- Error Handling
- Local Storage Support

## Tech Stack

Frontend

- React
- Vite
- Axios

Backend

- Node.js
- Express.js
- Gemini API

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the server folder.

```
PORT=5000
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

## Project Structure

```
src
 ├── components
 ├── pages
 ├── services

server
 ├── controllers
 ├── routes
 ├── services
```

## Future Improvements

- User authentication
- PDF Upload
- Download Study Kit as PDF
- Dark Mode
- Save Multiple Study Kits