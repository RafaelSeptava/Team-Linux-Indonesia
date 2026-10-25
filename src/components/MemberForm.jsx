import React, { useState } from "react";

export default function MemberForm({ onAddMember }) {
  const [nama, setNama] = useState("");
  const [gender, setGender] = useState("Pria");
  const [basis, setBasis] = useState("Arch");
  const [distro, setDistro] = useState("");
  const [pengalaman, setPengalaman] = useState("Kurang dari 1 tahun");
  const [skills, setSkills] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama.trim() || !distro.trim()) {
      alert("Mohon isi nama dan distro favorit!");
      return;
    }

    const newMember = {
      id: Date.now(),
      nama,
      gender,
      basis,
      distro,
      pengalaman,
      keterampilan: skills.length > 0 ? skills.join(", ") : "Belum ada",
    };

    onAddMember(newMember);

    // Reset Form
    setNama("");
    setDistro("");
    setSkills([]);
  };

  return (
    <section className="form-card">
      <h2>Pendaftaran Anggota Baru</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nama User:</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan nama lengkap"
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Pria">Pria</option>
            <option value="Wanita">Wanita</option>
          </select>
        </div>

        <div className="form-group">
          <label>Basis Distro Favorit:</label>
          <select value={basis} onChange={(e) => setBasis(e.target.value)}>
            <option value="Debian">Debian</option>
            <option value="Arch">Arch</option>
            <option value="Fedora">Fedora</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div className="form-group">
          <label>Distro Favorit Spesifik:</label>
          <input
            type="text"
            value={distro}
            onChange={(e) => setDistro(e.target.value)}
            placeholder="Contoh: Arch Linux, Ubuntu, Fedora..."
            required
          />
        </div>

        <div className="form-group">
          <label>Pengalaman Penggunaan:</label>
          <select
            value={pengalaman}
            onChange={(e) => setPengalaman(e.target.value)}
          >
            <option value="Kurang dari 1 tahun">Kurang dari 1 tahun</option>
            <option value="1 - 3 tahun">1 - 3 tahun</option>
            <option value="Lebih dari 3 tahun">Lebih dari 3 tahun</option>
          </select>
        </div>

        <div className="skills-group">
          <label>Keterampilan:</label>
          <div className="skills-checkboxes">
            {["Scripting", "Server", "Ricing", "SoftDev"].map((skill) => (
              <label key={skill}>
                <input
                  type="checkbox"
                  value={skill}
                  checked={skills.includes(skill)}
                  onChange={handleCheckboxChange}
                />
                {skill}
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Tambah Anggota
        </button>
      </form>
    </section>
  );
}
