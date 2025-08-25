# 🎧 AudiTech

A full-stack e-commerce website application for browsing and managing audio products.
Built with **NEXT.js**, **MongoDB**, **NextAuth** and **Cloudinary**.

---

## Features

- User authentication with **NextAuth.js**.
- Products management with categories and brands.
- Image upload using **Cloudinary**.
- Secure Database connection with **MongoDB**.
- A simple Dashboard and Add-Products for authenticated users.
- Modern UI with **Tailwind v4** and **DaisyUi**.

---

## ⚙️ Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/audio-tech.git
cd audio-tech

```

2. Install Dependencies

```bash
npm install
# or
yarn install

```

3. Configure environment variables

```bash

MONGO_URI=your_mongo_uri
DB_NAME=your_db_name

NEXT_PUBLIC_URL=http://localhost:3000

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset

```

4. Run the development server

```bash

npm run dev

```


## Route Summary

# Public Routes

- / → Landing Page (Home)

- /products → All Products

- /products/[id] → Product Details

- /auth/login → Sign in page (NextAuth)


 # Protected (Dashboard) Routes

- /dashboard → Overview

- /dashboard/add-products → Manage Products

*(Some dashboard routes may currently just show a message until features are added.)*
