import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

// 1. Impor komponen Layout dan halaman-halaman Anda
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { HistoryPage } from './pages/HistoryPage';
// Hapus 'import App from ./App.jsx' karena sudah digantikan oleh router

// 2. Buat konfigurasi router ("peta" website Anda)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout ini akan membungkus semua halaman di dalamnya
    children: [
      {
        index: true, // Menandakan ini halaman utama (path: "/")
        element: <Home />,
      },
      {
        path: "history", // Membuat path baru di "/history"
        element: <HistoryPage />,
      },
    ],
  },
]);

// 3. Render aplikasi menggunakan RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);