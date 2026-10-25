import React from "react";

export default function MemberTable({ members, onDeleteMember }) {
  // Conditional Rendering jika daftar member kosong
  if (members.length === 0) {
    return (
      <div className="empty-state">
        <p>Belum ada data member TeamLinux Indonesia.</p>
      </div>
    );
  }

  return (
    <section className="table-container">
      <h2>Daftar Member Komunitas</h2>
      <table className="member-table">
        <thead>
          <tr>
            <th>Nama User</th>
            <th>Gender</th>
            <th>Basis Distro</th>
            <th>Distro Favorit</th>
            <th>Pengalaman</th>
            <th>Keterampilan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {/* Render List menggunakan map() */}
          {members.map((member) => (
            <tr key={member.id}>
              <td className="name">{member.nama}</td>
              <td>{member.gender}</td>
              <td>
                <span className="badge badge-blue">{member.basis}</span>
              </td>
              <td>{member.distro}</td>
              <td>{member.pengalaman}</td>
              <td>
                <span className="badge badge-green">{member.keterampilan}</span>
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => onDeleteMember(member.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
