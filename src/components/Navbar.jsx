import React from "react";

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <aside className="sidebar">
      <nav>
        <button
          className={activeTab === "beranda" ? "active" : ""}
          onClick={() => setActiveTab("beranda")}
        >
          Beranda
        </button>
        <button
          className={activeTab === "distro" ? "active" : ""}
          onClick={() => setActiveTab("distro")}
        >
          Distro
        </button>
        <button
          className={activeTab === "join" ? "active" : ""}
          onClick={() => setActiveTab("join")}
        >
          Join & Member
        </button>
      </nav>
    </aside>
  );
}
