<p align="center">
  <img src="https://i.postimg.cc/Y9DPW857/stationery-shop.jpg" alt="Stationery Shop Banner" width="100%" />
</p>

# 🛍️ Stationery Shop – Full Stack Web Application

A full-featured stationery shop built with **React**, **TypeScript**, and **Node.js**, offering user authentication, product and order management, and a beautiful, responsive UI. Designed to handle real-time product filtering, cart management, and role-based dashboards using **RTK Query**, **JWT**, and **MongoDB**.

---

## 🚀 Live Demo

🔗 [https://stationery-shop-client-sandy.vercel.app](https://stationery-shop-client-sandy.vercel.app)

---

## 📦 Tech Stack

| Frontend            | Backend              | Tools & Features             |
|---------------------|----------------------|------------------------------|
| React + TypeScript  | Node.js + Express.js | JWT Authentication           |
| Redux Toolkit Query | MongoDB              | RESTful API (CRUD Support)   |
| React Router DOM    | Mongoose             | Toast Notifications          |
| Tailwind CSS        |                     | Responsive UI                |

---

## 🔧 Features

### ✅ User Authentication
- Role-based login with JWT (admin / user)
- Secure password hashing with bcrypt
- Token storage in cookies
- Logout clears auth token

### 🏠 Public Pages
- **Home** with banner, featured products, blogs etc
- **Shop** page with:
  - Search (title, author, category)
  - Filter (category, price range, availability)
- **Product Details** page
- **Blog** page
- **About** page
- **Footer** with links, social icons, contact info

### 🛒 Cart & Orders (Private Route)
- Add to Cart with quantity check
- View and remove items
- Place orders
- Order summary + total price
- Payment integration via SurjoPay

### 🛠️ Dashboard
- **Admin**
  - Manage products (Add / Edit / Delete)
  - Manage orders (Update status)
  - Manage users
- **User**
  - View orders
  - Update profile info

---

## 🌐 API Integration

- **RESTful API** built using Express.js & MongoDB
- **RTK Query** handles all client-side data fetching with built-in caching and error handling
- **Endpoints include:**
  - `/api/products`
  - `/api/users`
  - `/api/orders`
  - `/api/auth`

---

## 🧪 Error Handling

- Friendly form & auth validation messages
- Fallbacks for invalid login / registration
- Toast notifications for key actions (login, order placed, etc.)
- Loading spinners during API calls

---

## 📱 Responsive Design

- Mobile-first layout
- Tailwind CSS for fast and flexible styling
- Clean and consistent UI across devices