# 🎬 Tiny Movie Explorer

A sleek, modern, and fully responsive web application built with **React**, **React Router**, and **Tailwind CSS**. It allows users to explore trending shows, search through a vast database via the **TVMaze API**, and view rich details in an immersive modal overlay.

**Live Link**: https://ridowan01.github.io/Tiny-Movie-Explorer/

---

## ✨ Features

- **Dynamic Search & Discovery:** Instantly search for shows and movies with real-time API query handling and data normalization.
- **Interactive Details Modal:** Click on any movie card to open a responsive modal containing ratings, premiere dates, languages, types, summaries, and official site links.
- **Glassmorphism UI Design:** Built with a dark-mode first aesthetic using Tailwind CSS, featuring subtle glows, blurred headers (`backdrop-blur`), and custom gradient accents.
- **Client-Side Routing:** Powered by `react-router` with shared persistent layout structures (Navbar & Footer).
- **Sticky Layout Architecture:** Flexbox-powered viewport layout ensuring the footer stays pinned to the bottom even on shorter pages.

---

## 🛠️ Tech Stack

- **Frontend Library:** React (Hooks: `useState`, `useEffect`)
- **Routing:** React Router (`createBrowserRouter`, `RouterProvider`, `Outlet`, `Link`)
- **Styling:** Tailwind CSS
- **Data Source:** [TVMaze API](https://www.tvmaze.com/api)

---

## 📂 Project Structure

```text
src/
│
├── Components/
│   ├── card.jsx         # Individual movie card component
│   └── modal.jsx        # Immersive details modal overlay
│
├── Pages/
│   ├── home.jsx         # Landing page view
│   └── movies.jsx       # Movie exploration and search view
│
├── Services/
│   └── get-movies.js    # API service fetching and data normalization
│
├── layout.jsx           # Global persistent header, footer, and outlet layout
├── react-router.jsx     # App router configuration
└── main.jsx             # Application entry point

```

---

## 🚀 Getting Started Locally

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v16 or higher) and npm installed.

### Installation & Setup

1. **Clone the repository:**
```bash
git clone [https://github.com/your-username/tiny-movie-explorer.git](https://github.com/your-username/tiny-movie-explorer.git)
cd tiny-movie-explorer

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```


4. **Open your browser:**
Navigate to `http://localhost:5173` (or the port provided in your terminal).

---

## ☁️ Live Deployment

This project is configured for seamless deployment on modern static hosting platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

### Deploying to Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Import your repository into [Vercel](https://vercel.com).
3. Vercel will automatically detect Vite and configure the build settings:
* **Build Command:** `npm run build`
* **Output Directory:** `dist`


4. Click **Deploy**!

*(Note: Since React Router is being used for client-side routing, ensure your hosting provider redirects all routes to `index.html` if you encounter a 404 on page refresh).*

---

## 🔌 API Integration (`get-movies.js`)

The application handles dual endpoints from the TVMaze API seamlessly by normalizing search results:

* **Default Load:** Fetches `https://api.tvmaze.com/shows` (direct array of show objects).
* **Search Query:** Fetches `https://api.tvmaze.com/search/shows?q=${title}` and maps through the nested wrapper structure (`item.show`) to maintain cross-component consistency.

---

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).
