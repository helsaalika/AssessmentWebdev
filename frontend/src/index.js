import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TambahMahasiswa from "./components/tambahMahasiswa";
import ListMahasiswa from "./components/listMahasiswa";
import ListDosen from "./components/listDosen";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/tambahmahasiswa",
    element: <TambahMahasiswa />,
  },
  {
    path: "/mahasiswa",
    element: <ListMahasiswa />,
  },
  {
    path: "/dosen",
    element: <ListDosen />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
