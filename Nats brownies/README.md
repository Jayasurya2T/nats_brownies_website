# Nats Brownies Website

A modern, responsive e-commerce website for Nats Brownies - a home-based brownie business.

## Features

- 🍫 Product catalog with filtering and sorting
- 🛒 Shopping cart with persistent storage
- 📱 Order placement via WhatsApp, Instagram, or Email
- 👨‍💼 Admin panel with CRUD operations
- 📱 Fully responsive design
- 🎨 Chocolate brown theme with modern UI

## Tech Stack

- React 18
- Vite
- React Router DOM
- CSS3 with CSS Variables

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
nats-brownies/
├── public/
│   ├── data/
│   │   └── products.json      # Product catalog
│   └── images/
│       └── products/          # Product images
├── src/
│   ├── components/            # React components
│   ├── hooks/                 # Custom React hooks
│   ├── pages/                 # Page components
│   ├── styles/                # CSS files
│   ├── utils/                 # Utility functions
│   ├── App.jsx                # Main app component
│   └── main.jsx               # Entry point
└── package.json
```

## Features Overview

### Product Catalog
- Display all brownie varieties (Egg and Eggless)
- Filter by category (All, Egg, Eggless)
- Sort by price (Low to High, High to Low)
- Responsive grid layout

### Shopping Cart
- Add products with quantity selection
- Update quantities
- Remove items
- Persistent cart (localStorage)
- Calculate totals

### Order Placement
- Generate formatted order summary
- WhatsApp integration (pre-filled message)
- Instagram DM (copy message)
- Email fallback

### Admin Panel
- View all products
- Add new products
- Edit existing products
- Delete products
- Products stored in localStorage (with JSON file as source)

## Product Images

Placeholder images are used by default. Replace images in `public/images/products/` with actual product photos. Image naming convention:
- `{product-name-lowercase}-{category-lowercase}.jpg`
- Example: `cashews-egg.jpg`, `badam-eggless.jpg`

## Contact Information

- WhatsApp: +91 84283 82877
- Instagram: @nats_vlog29
- Email: nats.brownies@example.com (update in About.jsx)

## License

© 2024 Nats Brownies. All rights reserved.

