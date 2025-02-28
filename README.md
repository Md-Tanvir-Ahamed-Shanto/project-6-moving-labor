# Moving Labor Project

A full-stack web application for managing moving labor services, built with React, Node.js, Express, and MySQL with Prisma ORM.

## Features

- User Authentication (Admin, User, Labor)
- Service Booking System
- Quote Generation
- Admin Dashboard
- Content Management System
- Blog Management
- Coverage Area Management
- Contact Management

## Tech Stack

### Frontend
- React with Vite
- Tailwind CSS
- React Icons
- Axios for API calls

### Backend
- Node.js
- Express.js
- Prisma ORM
- MySQL Database
- CORS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MySQL Server
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd project-6-moving-labor
```

2. Backend Setup
```bash
cd backend
npm install

# Configure environment variables
cp .env.example .env
# Update DATABASE_URL in .env with your MySQL credentials

# Run Prisma migrations
npx prisma migrate dev

# Start the server
npm start
```

3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

### Backend (.env)
```
DATABASE_URL="mysql://user:password@localhost:3306/moving_labor"
PORT=5000
```

## API Documentation

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - User login

### Bookings
- GET `/api/booking` - Get all bookings
- POST `/api/booking` - Create new booking
- PUT `/api/booking/:id` - Update booking status

### Services
- GET `/api/service` - Get all services
- POST `/api/service` - Add new service
- PUT `/api/service/:id` - Update service
- DELETE `/api/service/:id` - Delete service

## Project Structure

```
project-6-moving-labor/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── prisma/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── index.html
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License