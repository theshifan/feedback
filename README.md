# Feedback App – Product Feedback Management System

## Table of Contents

* [Introduction](#introduction)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Getting Started](#getting-started)
* [Installation](#installation)
* [Usage](#usage)
* [Admin Features](#admin-features)
* [Requirements](#requirements)
* [Contact](#contact)

---

## Introduction

**Feedback App** is a full-stack web application that enables users to submit feedback on various products and services. Built with React.js, Django, and SQLite, it provides a modern interface for users and administrators to manage product reviews effectively.

---

## Features
* Sign in and Sign up for the users and it can be regulated by the admin 
* Submit feedback with rating, comments, and category.
* Filter and sort feedback by product, category, or rating.
* Interactive admin dashboard with product rating analysis.
* Add/delete products and categories dynamically.
* Sleek and responsive UI using Material UI.

---

## Technologies Used

* **Frontend:** React.js
* **Backend:** Django (REST Framework)
* **Database:** SQLite
* **UI Framework:** Material UI

---

## Getting Started

To run this project locally, follow the steps below.

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/theshifan/feedback.git
cd feedback
```

---

### 2. Backend Setup (Django)

```bash
cd backend
python -m venv venv        # optional, but recommended
source venv/bin/activate   # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

> Make sure you have `Django` and `djangorestframework` installed.

---

### 3. Frontend Setup (React)

```bash
cd ../frontend
npm install
npm start
```

Also install MUI and icons:

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

---

## Usage

Once both frontend and backend servers are running:

* Access the frontend at: `http://localhost:3000`
* Backend API runs at: `http://localhost:8000`

---

## Admin Features
*can control the users
* Add and delete products and categories
* View and manage submitted feedback
* Visual charts: product vs rating analytics

---

## Requirements

Python packages (from `requirements.txt`):

```
asgiref==3.8.1
Django==5.2.3
djangorestframework==3.16.0
sqlparse==0.5.3
tzdata==2025.2
```

---

## Contact

For questions, issues, or suggestions:

* GitHub: [@theshifan](https://github.com/theshifan)
* Email: [shifan9914@gmail.com.com](mailto:shifan9914@gmail.com.com)

