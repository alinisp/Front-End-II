'use client';
import { useState, useEffect } from "react";
export default function ListarMedicos() {
  const [medicos, setMedicos] = useState([]);
  const [busca, setBusca] = useState("");
  const [medicosFiltrados, setMedicosFiltrados] = useState([]);
  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/medicos")
      .then((response) => response.json())
      .then((data) => {
        const medicosOrdenados = data.sort((a, b) => a.id - b.id);
        setMedicos(medicosOrdenados);
        setMedicosFiltrados(medicosOrdenados);
      })
      .catch((error) => console.error("Erro ao buscar médicos:", error));
  }, []);
  const handleSearch = (e) => {
    const valorBusca = e.target.value;
    setBusca(valorBusca);
    const filtrados = medicos.filter((medico) =>
      medico.nome.toLowerCase().includes(valorBusca.toLowerCase())
    );
    setMedicosFiltrados(filtrados);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#768f9b" }}>Lista de Médicos</h1>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Buscar médico por nome"
          value={busca}
          onChange={handleSearch}
          style={{
            width: "50%",
            height: "40px",
            fontSize: "18px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
      </div>

      <div style={{ overflowX: "auto", marginTop: "20px" }}>
        <table
          border="1"
          width="100%"
          style={{
            borderCollapse: "collapse",
            minWidth: "600px"
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#768f9b", color: "white" }}>
              <th>ID</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Especialidade</th>
            </tr>
          </thead>
          <tbody>
            {medicosFiltrados.map((medico, index) => (
              <tr
                key={medico.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "white" : "#f2f7fa",
                }}
              >
                <td>{medico.id}</td>
                <td>{medico.nome}</td>
                <td>{medico.telefone}</td>
                <td>{medico.email}</td>
                <td>{medico.especialidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}