# Multi-Level Category Management API (MERN Task)

A Node.js + Express + TypeScript + MongoDB API for managing multi-level categories with authentication.

## 🚀 Features
- JWT authentication
- Category creation with parent
- Fetch tree structure
- Update and delete categories
- Reassign children on delete

## ⚙️ Setup

### 1. Install
```
npm install
```

### 2. Environment Variables (.env)
```
JWT_SECRET=your_jwt_secret
MONGO_URL=mongodb://localhost:27017/mern_task
```

### 3. Run
```
npm run dev
```

## 🧪 Sample API Responses

### Register
```
POST /api/auth/register
{
  "email": "test@example.com",
  "password": "123456"
}
```

### Login
```
POST /api/auth/login
Response:
{
  "token": "eyJ...."
}
```

### Create Category
```
POST /api/category
{
  "name": "Electronics",
  "parent": null
}
```

### Category Tree
```
GET /api/category
[
  {
    "_id": "1",
    "name": "Electronics",
    "children": []
  }
]
```
