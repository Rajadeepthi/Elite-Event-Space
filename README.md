# 🏛️ Elite Event Spaces
A modern **Convention Hall Booking System** built using the **MERN Stack**. This application allows users to register, log in, browse convention halls, view hall details, book halls for events, and manage bookings through a dashboard.

## 📌 Project Overview

Elite Event Spaces is an online platform that simplifies the process of booking convention halls for various events such as:

* 💍 Weddings
* 🎉 Receptions
* 🏢 Corporate Meetings
* 🎂 Birthday Parties
* 🎓 Seminars & Conferences
* 🎭 Cultural Events

The application provides an easy-to-use interface with a modern design and stores all user and booking information in MongoDB.

## ✨ Features

### 👤 User Module

* User Registration
* User Login
* Secure Authentication
* MongoDB Database Integration

### 🏛 Hall Module

* View Available Convention Halls
* Hall Images
* Hall Capacity
* Hall Location
* Hall Price
* Hall Details

### 📅 Booking Module

* Book Convention Halls
* Store Booking Information
* Booking Confirmation

### 📊 Dashboard

* Total Bookings
* Available Halls
* Recent Booking Details
* Dynamic Data from MongoDB

---

## 🛠 Technologies Used

### Frontend

* React.js
* React Router
* Axios
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Tools

* VS Code
* Postman
* MongoDB Compass
* Git
* GitHub

---

## 📂 Project Structure

```
Elite-Event-Space
│
├── Backend
│   ├── config
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── Frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/Rajadeepthi/Elite-Event-Space.git
```

---

### Install Frontend Dependencies

```bash
cd Frontend
npm install
```

---

### Install Backend Dependencies

```bash
cd ../Backend
npm install
```

---

### Configure Environment Variables

Create a `.env` file inside the **Backend** folder.

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

### Start Backend

```bash
npm start
```

---

### Start Frontend

```bash
cd ../Frontend
npm run dev
```

---

## 💾 Database

MongoDB stores:

* User Details
* Convention Hall Details
* Booking Details

Collections:

* users
* halls
* bookings

---

## 📸 Application Screens

* Home Page
* Login Page
* Register Page
* Convention Halls
* Hall Details
* Booking Page
* Dashboard

(Add screenshots here after uploading them.)

---

## 🚀 Future Enhancements

* Online Payment Integration
* Email Notifications
* Booking Cancellation
* Admin Dashboard
* Search & Filter Halls
* Reviews & Ratings
* User Profile Management

---

## 👩‍💻 Developer

**Rajadeepthi Kanapaka**

GitHub: https://github.com/Rajadeepthi

---

## 📄 License

This project is developed for educational and learning purposes.
