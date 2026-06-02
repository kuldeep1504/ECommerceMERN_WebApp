# ECommerce MERN Web Application

A modern, full-stack E-Commerce web application built using the MERN (MongoDB, Express, React, Node.js) stack. The application features user authentication (JWT), product catalog, shopping cart, checkout, secure Stripe payments, and a fully responsive frontend designed with Vite, Tailwind CSS, and Framer Motion.

---

## 🚀 Features

- **User Authentication & Authorization**: Secure registration, login, and profile management with JWT and hashed passwords.
- **Product Management**: Browse products, view individual product details, and manage inventory.
- **Shopping Cart**: Fully functional cart using Redux Toolkit for seamless state updates.
- **Stripe Payments**: Integrated checkout using Stripe Payment Intents API.
- **Order Tracking**: Detailed purchase logs and checkout flow.
- **Responsive UI**: Sleek, mobile-friendly design with custom micro-animations.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Redux Toolkit (RTK Query), Tailwind CSS, Framer Motion, Lucide Icons, React Router DOM.
- **Backend**: Node.js, Express.js, Mongoose.
- **Database**: MongoDB.
- **Payment Gateway**: Stripe.

---

## 📁 Project Structure

```text
ECommerce_MERN/
├── client/          # Frontend React + Vite application
│   ├── src/         # Source code (Components, Pages, Redux store)
│   ├── public/      # Static assets
│   └── vercel.json  # Vercel SPA routing configuration
├── server/          # Backend Node + Express server
│   ├── config/      # Database connections
│   ├── controllers/ # Route handler logic
│   ├── models/      # Mongoose schemas
│   ├── routes/      # API endpoints
│   ├── data/        # Seed data (products, users)
│   └── server.js    # Express entrypoint
└── README.md        # Project documentation
```

---

## ⚙️ Local Setup and Configuration

### Prerequisites
- **Node.js** (v16+)
- **MongoDB** running locally or a MongoDB Atlas URI.

### 1. Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NODE_ENV=development
```

### 2. Backend Setup
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Seed the database with sample products and users (Optional):
   ```bash
   npm run data:import
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Open a new terminal and navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

The application will be accessible at `http://localhost:5173`.

---

## 💾 Available Scripts

### Backend (`server/`)
- `npm start` - Starts the server in production mode.
- `npm run dev` - Starts the server using nodemon for automatic restarts.
- `npm run data:import` - Imports sample products and users to MongoDB.
- `npm run data:destroy` - Clears all collections in the database.

### Frontend (`client/`)
- `npm run dev` - Launches the Vite development server.
- `npm run build` - Builds the application for production deployment.
- `npm run lint` - Runs ESLint to check for code issues.

---

## 🌐 Deployment

### Frontend (Vercel)
The client directory includes a `vercel.json` file for smooth URL routing:
1. Connect your repository to **Vercel**.
2. Set the **Root Directory** to `client`.
3. Add the environment variable `VITE_API_URL` pointing to your deployed backend API (e.g. `https://your-backend.onrender.com/api`).
4. Deploy!

### Backend (Render/Heroku)
1. Deploy the `server` folder.
2. Set the environment variables in your hosting provider's dashboard (`MONGO_URI`, `JWT_SECRET`, `STRIPE_SECRET_KEY`, `PORT`, etc.).
