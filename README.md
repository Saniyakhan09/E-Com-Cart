#  Vibe Commerce — Mock E-Commerce Cart

>  A full-stack shopping cart web app built with **React**, **Node.js**, and **MongoDB** for the **Vibe Commerce Internship Assignment**.  
> It demonstrates product listing, cart management, checkout flow, and clean UI with backend API integration.

---

##  Overview
Vibe Commerce is a mock full-stack e-commerce cart system that allows users to:
- Browse products
- Add/remove items from cart
- View live totals
- Submit a checkout form to receive a mock receipt  

All data flows through REST APIs connecting the frontend (React) and backend (Express + MongoDB).

##  Tech Stack
| Area | Technology |
|------|-------------|
| Frontend | React.js, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Version Control | Git & GitHub |

###  Backend
cd Backend
npm server.js
Server will start on http://localhost:3000
3000

## Frontend
cd Frontend
npm install
npm run dev
App will run on http://localhost:5173

API Endpoints
Products
GET /api/products → Fetch product list

Cart
POST /api/cart/product → Add product to cart { productId, quantity }

GET /api/cart → Fetch all cart items
DELETE /api/delete/cart/:id → Remove item from cart

Checkout
POST /api/checkout → Generate mock receipt { total, timestamp }

Demo Video
https://youtu.be/WS7NRkgAMdI
