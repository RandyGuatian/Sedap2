import React from "react";
export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        color: "#343a40",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "6rem", margin: 0 }}>404</h1>
      <h2 style={{ margin: "10px 0" }}>Oops! Halaman tidak ditemukan.</h2>
      <p style={{ maxWidth: "400px" }}>
        Sepertinya halaman yang kamu cari tidak tersedia atau telah dipindahkan.
      </p>
      <a
        href="/"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")} >
        Kembali ke Beranda
      </a>
    </div>
  );
}
