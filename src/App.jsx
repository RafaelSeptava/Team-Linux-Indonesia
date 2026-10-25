import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import DistroCard from "./components/DistroCard";
import MemberForm from "./components/MemberForm";
import MemberTable from "./components/MemberTable";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("beranda");

  const [members, setMembers] = useState([
    {
      id: 1,
      nama: "Linus Torvalds",
      gender: "Pria",
      basis: "Fedora",
      distro: "Fedora",
      pengalaman: "Lebih dari 3 tahun",
      keterampilan: "Scripting, SoftDev",
    },
    {
      id: 2,
      nama: "Rafael Putra Septava",
      gender: "Pria",
      basis: "Arch",
      distro: "Arch",
      pengalaman: "Kurang dari 1 tahun",
      keterampilan: "Ricing, SoftDev",
    },
  ]);

  const distros = [
    {
      id: "d1",
      name: "Debian",
      category: "Debian",
      logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Openlogo-debianV2.svg/1280px-Openlogo-debianV2.svg.png",
      description: "Cocok untuk dipakai di server.",
    },
    {
      id: "d2",
      name: "Ubuntu",
      category: "Debian",
      logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/UbuntuCoF.svg/1280px-UbuntuCoF.svg.png",
      description: "Cocok untuk pemula dan penggunaan harian.",
    },
    {
      id: "d3",
      name: "Arch Linux",
      category: "Arch",
      logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Arch_Linux_%22Crystal%22_icon.svg/960px-Arch_Linux_%22Crystal%22_icon.svg.png",
      description: "Cocok untuk kustomisasi dan merakit sistem sendiri.",
    },
    {
      id: "d4",
      name: "Fedora",
      category: "Fedora",
      logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Fedora-logo.svg/330px-Fedora-logo.svg.png",
      description: "Cocok untuk developer dan mengejar teknologi terbaru.",
    },
  ];

  const handleAddMember = (newMember) => {
    setMembers((prevMembers) => [...prevMembers, newMember]);
  };

  const handleDeleteMember = (id) => {
    setMembers((prevMembers) => prevMembers.filter((m) => m.id !== id));
  };

  return (
    <>
      <Header
        title="TeamLinux Indonesia"
        subtitle="Komunitas Pengguna dan Pengembang Linux Indonesia"
      />

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Halaman Beranda */}
      {activeTab === "beranda" && (
        <main className="home-main">
          <section className="hero-section">
            <img
              src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/960px-Tux.svg.png"
              alt="Logo Linux"
              className="hero-logo"
            />
            <img
              src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/960px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg"
              alt="Linus Torvalds"
              className="hero-photo"
            />
          </section>
          <section className="welcome-card">
            <h2>Selamat datang di Komunitas Linux Indonesia</h2>
            <p>
              Website ini berisi informasi tentang sistem operasi Linux bagi
              pengguna di Indonesia. Ayo jelajahi berbagai macam distribusi
              Linux. Daftarlah sebagai anggota komunitas. Dan bagikan
              kustomisasi tampilan desktop.
            </p>
          </section>
        </main>
      )}

      {/* Halaman Distro */}
      {activeTab === "distro" && (
        <main className="main-container">
          <section>
            <h2>Berbagai Distro Linux Populer</h2>
            <div className="distro-grid">
              {distros.map((item) => (
                <DistroCard
                  key={item.id}
                  name={item.name}
                  category={item.category}
                  logo={item.logo}
                  description={item.description}
                />
              ))}
            </div>
          </section>
        </main>
      )}

      {/* Halaman Join & Member */}
      {activeTab === "join" && (
        <main className="main-container">
          <MemberForm onAddMember={handleAddMember} />
          <MemberTable members={members} onDeleteMember={handleDeleteMember} />
        </main>
      )}

      <footer>
        <p>
          &copy; 2026 TeamLinux Indonesia. Dibuat oleh{" "}
          <strong>Rafael Putra Septava</strong> pada{" "}
          <time>30 September 2026</time>.
        </p>
      </footer>
    </>
  );
}
