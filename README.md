# 🔗 URL Shortener
<p align="left"> <img src="https://img.shields.io/badge/React-18-blue?logo=react" /> <img src="https://img.shields.io/badge/Express.js-4.x-green?logo=express" /> <img src="https://img.shields.io/badge/MongoDB-Mongoose-success?logo=mongodb" /> <img src="https://img.shields.io/badge/Node.js-18+-green?logo=node.js" /> <img src="https://img.shields.io/badge/JWT-Authentication-orange?logo=jsonwebtokens" /> <img src="https://img.shields.io/badge/Status-Production--Ready-brightgreen" /> <img src="https://img.shields.io/github/license/CodeTechGuy/URL_SHORTNER" /> </p>

<p align="center">
  <img src="assets/banner.svg" alt="URL Shortener Banner" />
</p>

<p align="center">
  <img src="assets/logo.svg" width="92" height="92" alt="URL Shortener Logo" />
</p>


## Project Overview

Welcome to **URL Shortener**, a full-stack application designed to convert long, cumbersome URLs into short, memorable, and easily shareable links. This project is built with a segregated architecture, featuring a robust backend API and a modern frontend interface.

---

## ✨ Features

* **URL Shortening:** Converts any valid long URL into a short, unique, 7-character code.
* **Redirection:** Fast and reliable redirection from the short link back to the original URL.
* **Customization:** *(Optional: Include if you added this)* Allows users to define custom short codes for their links.
* **Analytics:** *(Optional: Include if you added this)* Tracks the number of clicks for each shortened link.
* **Responsive UI:** A clean and easy-to-use interface for both desktop and mobile devices.

---

## 🛠️ Tech Stack

This project is divided into two major components:

### Backend

The backend is a powerful API built using Node.js, responsible for generating, storing, and managing the short URLs, as well as handling redirection requests.

| Technology | Purpose |
| :--- | :--- |
| **Language** | JavaScript (Node.js) |
| **Framework** | [Express.js] |
| **Database** | [MongoDB]  |
| **ORM/ODM** | [Mongoose] |

### Frontend

The frontend provides the user interface for submitting long URLs and displaying the generated short links.

| Technology | Purpose |
| :--- | :--- |
| **Language** | JavaScript |
| **Framework** | [React] |
| **Styling** | [ Tailwind CSS ] |

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

You need the following software installed on your machine:

* **Node.js** (LTS version recommended)
* **npm** or **yarn**
* A running instance of your database ([e.g., MongoDB Atlas account or local installation]).

### Installation

1.  **Clone the Repository**

    ```bash
    git clone [https://github.com/code-tech-guy/URL_SHORTNER.git](https://github.com/code-tech-guy/URL_SHORTNER.git)
    cd URL_SHORTNER
    ```

2.  **Backend Setup**

    Navigate to the `BACKEND` directory and install dependencies:

    ```bash
    cd BACKEND
    npm install
    # or yarn install
    ```

3.  **Frontend Setup**

    Open a new terminal, navigate to the `FRONTEND` directory, and install dependencies:

    ```bash
    cd ../FRONTEND
    npm install
    # or yarn install
    ```

### Configuration

The backend requires environment variables for connection strings and other settings.

1.  Create a file named `.env` in the root of the **`BACKEND`** directory.
2.  Add your configuration variables. A typical setup includes:

    ```
    # Example .env file in BACKEND directory
    PORT=[8080 or your chosen port]
    MONGO_URI=[Your Database Connection String]
    BASE_URL=[http://localhost:3000 or your deployment URL]
    ```

### Running the Application

1.  **Start the Backend API**

    From the **`BACKEND`** directory:

    ```bash
    npm start 
    # or node server.js (if your main file is named server.js)
    ```
    The API should now be running at `http://localhost:[Your_PORT]`.

2.  **Start the Frontend Client**

    From the **`FRONTEND`** directory:

    ```bash
    npm run dev 
    # or npm start (depending on your frontend setup)
    ```
    The frontend should now be accessible in your browser, typically at `http://localhost:3000`.

---

## 🌐 API Endpoints

The backend exposes the following endpoints for both user authentication and core URL shortening functionality.

---

### 🔒 Authentication Endpoints

These endpoints manage user registration, login, and session retrieval.

| Method | Endpoint | Description | Request Body Example | Success Response |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a **new user**. | `{"username": "user", "password": "password123"}` | User data (or success message) |
| `POST` | `/api/auth/login` | **Login** user via cookies/session. | `{"username": "user", "password": "password123"}` | User data and sets a secure cookie |
| `GET` | `/api/auth/me` | Get the **authenticated user**'s details. | *None (uses session cookie)* | User details |

---

### 🔗 URL Shortening Endpoints

These are the primary endpoints for creating, retrieving, and managing short links.

| Method | Endpoint | Description | Request Body Example | Success Response Example |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/api/create` | **Create short URL**. Requires authentication. | `{"longUrl": "https://example.com/very/long/path"}` | `{"shortId": "abcde12", "shortUrl": "http://[BASE_URL]/abcde12"}` |
| `GET` | `/:shortId` | **Redirect** to original URL & **increment click count**. | *None* | **HTTP 302** Redirection |
| `GET` | `/api/user/urls` | **Fetch all URLs** created by the logged-in user. Requires authentication. | *None (uses session cookie)* | Array of URL objects |

---

## 📸 Screenshots

Here are some screenshots demonstrating the application's functionality:

### 1. URL Shortening and Customization

This image shows the main dashboard where users can input a long URL, optionally provide a custom short code, and view the generated short link along with a list of previously shortened URLs.

!https://short.io/("C:\Users\VISHAL PRAJWAL S\Pictures\Screenshots\Screenshot 2025-11-10 133321.png")
<img src="C:\Users\VISHAL PRAJWAL S\Pictures\Screenshots\Screenshot 2025-11-10 133321.png" alt="Screenshot of the app" width="300" />

<p align="center">
  <img src="assets/pic01.png" alt="URL Shortener Banner" />
</p>



### 2. Listing Shortened URLs and Click Count

This screenshot further illustrates the dashboard, showcasing how newly shortened URLs are added to the list and how the click count updates for each link.

![Dashboard with New Shortened URL and Updated Clicks]("C:\Users\VISHAL PRAJWAL S\Pictures\Screenshots\Screenshot 2025-11-10 133454.png")
<img src="C:\Users\VISHAL PRAJWAL S\Pictures\Screenshots\Screenshot 2025-11-10 133454.png" alt="Screenshot of the app" width="300" />

<p align="center">
  <img src="assets/pic02.png" width="92" height="92" alt="URL Shortener Logo" />
</p>

---

## 🧑‍💻 Author

**VISHAL PRAJWAL S**
* **GitHub:** [https://github.com/code-tech-guy](https://github.com/code-tech-guy)
