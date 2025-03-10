'use client';
import { useState, useEffect } from "react";
export default function ListarConsulta() {
  const [consultas, setConsultas] = useState([]);
  const [buscaPaciente, setBuscaPaciente] = useState("");
  const [buscaMedico, setBuscaMedico] = useState("");
  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/consultas")
      .then((response) => response.json())
      .then((data) => setConsultas(data))
      .catch((error) => console.error("Erro ao buscar consultas:", error));
  }, []);
  const consultasFiltradas = consultas.filter(
    (consulta) =>
      consulta.paciente.toLowerCase().includes(buscaPaciente.toLowerCase()) &&
      consulta.medico.toLowerCase().includes(buscaMedico.toLowerCase())
  );
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#768f9b" }}>Lista de Consultas</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          marginTop: "20px"
        }}
      >
        <input
          type="text"
          placeholder="Buscar paciente por nome"
          value={buscaPaciente}
          onChange={(e) => setBuscaPaciente(e.target.value)}
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
        <input
          type="text"
          placeholder="Buscar médico por nome"
          value={buscaMedico}
          onChange={(e) => setBuscaMedico(e.target.value)}
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
              <th>Médico</th>
              <th>Especialidade</th>
              <th>Paciente</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {consultasFiltradas.map((consulta, index) => (
              <tr
                key={consulta.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "white" : "#f2f7fa", 
                }}
              >
                <td>{consulta.id}</td>
                <td>{consulta.medico}</td>
                <td>{consulta.especialidade}</td>
                <td>{consulta.paciente}</td>
                <td>{consulta.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}