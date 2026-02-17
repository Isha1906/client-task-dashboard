# Client Task Dashboard

A mini full-stack **Client Task Dashboard** built using **Next.js** and **Supabase**.
This project demonstrates authentication, secure database access with Row Level Security (RLS), and a dynamic task management UI.

---

## 🚀 Live Demo

👉 [Add your Vercel URL here]

## 📂 GitHub Repository

👉 https://github.com/Isha1906/client-task-dashboard

---

## ✨ Features

### 🔐 Authentication

* Email magic-link login using Supabase Auth
* Session-based dashboard access
* Logout functionality

### 🛡 Database Security (Core Requirement)

* Tasks stored in Supabase PostgreSQL
* **Row Level Security enabled**
* **Staff users**

  * Can only view and update tasks assigned to them
* **Admin users**

  * Can view, edit, and delete all tasks across the system

### 📊 Dashboard UI

* Clean responsive dashboard layout
* Add new tasks instantly
* Dynamic filters:

  * Pending
  * In Progress
  * Completed
* Task status updates without page refresh

### ⭐ Custom Ownership Feature

* **Priority labels with colored badges**

  * High → Red
  * Medium → Blue
  * Low → Gray
* Helps financial teams quickly identify urgent client work

---

## 🏗 Tech Stack

* **Frontend:** Next.js (App Router), React
* **Backend / Database:** Supabase (PostgreSQL)
* **Authentication:** Supabase Auth
* **Security:** Supabase Row Level Security (RLS)
* **Styling:** Custom CSS

---

## ⚙️ Local Setup Instructions

1. Clone repository

```bash
git clone <repo-url>
cd client-task-dashboard
```

2. Install dependencies

```bash
npm install
```

3. Create environment variables:

Create `.env.local`

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

4. Run the development server

```bash
npm run dev
```

Open: http://localhost:3000

---

## 🧠 Hardest Challenge Faced

The most challenging part was configuring **Supabase Row Level Security (RLS)** correctly.
Initially, queries returned empty results because policies were blocking access.

This was debugged by:

* Verifying the authenticated user ID
* Testing RLS conditions in Supabase SQL editor
* Ensuring the role lookup in the profiles table matched `auth.uid()`

Once the policies were corrected, the dashboard worked as expected.

---

## 📌 Future Improvements

* Admin UI to assign tasks to staff
* Due-date & overdue alerts
* File upload support for client documents
* Search & sorting functionality

---

## 👩‍💻 Author

Built by **Isha**
