"use client";
import { useState, useEffect } from "react";
export default function CadastroConsulta() {
  const [pacientes, setPacientes] = useState([]);
  const [medicos, setMedicos] = useState([]);
  const [formData, setFormData] = useState({
    paciente: "",
    medico: "",
    especialidade: "",
    data: "",
    horario: "",
    tipo: ""
  });
  const [confirmado, setConfirmado] = useState(false);
  // Estado para controlar se o botão está com o mouse por cima (hover)
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/pacientes")
      .then(response => response.ok ? response.json() : [])
      .then(data => setPacientes(Array.isArray(data) ? data : [data]));
  }, []);
  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/medicos")
      .then(response => response.ok ? response.json() : [])
      .then(data => setMedicos(Array.isArray(data) ? data : [data]));
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFormData = { ...formData, [name]: value };
    if (name === "medico") {
      const selectedMedico = medicos.find(medico => medico.id === Number(value));
      updatedFormData.especialidade = selectedMedico ? selectedMedico.especialidade : "";
    }
    setFormData(updatedFormData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmado(true);
  };
  const inputStyle = {
    width: "100%",
    height: "40px",
    fontSize: "18px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  };
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#768f9b" }}>Agendar Consulta</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}
      >
        <label style={{ fontSize: "18px" }}>Paciente</label>
        <select name="paciente" value={formData.paciente} onChange={handleChange} required style={inputStyle}>
          <option value="">Selecione um Paciente</option>
          {pacientes.map(paciente => (
            <option key={paciente.id} value={paciente.id}>{paciente.nome}</option>
          ))}
        </select>
        <label style={{ fontSize: "18px" }}>Médico</label>
        <select name="medico" value={formData.medico} onChange={handleChange} required style={inputStyle}>
          <option value="">Selecione um Médico</option>
          {medicos.map(medico => (
            <option key={medico.id} value={medico.id}>{medico.nome}</option>
          ))}
        </select>
        <label style={{ fontSize: "18px" }}>Especialidade</label>
        <input type="text" name="especialidade" value={formData.especialidade} readOnly style={inputStyle} />
        <label style={{ fontSize: "18px" }}>Data</label>
        <input type="date" name="data" value={formData.data} onChange={handleChange} required style={inputStyle} />
        <label style={{ fontSize: "18px" }}>Hora</label>
        <input type="time" name="horario" value={formData.horario} onChange={handleChange} required style={inputStyle} />
        <label style={{ fontSize: "18px" }}>Tipo</label>
        <select name="tipo" value={formData.tipo} onChange={handleChange} required style={inputStyle}>
          <option value="">Plano de Saúde ou Particular?</option>
          <option value="Plano de Saúde">Plano de Saúde</option>
          <option value="Particular">Particular</option>
        </select>
        <button 
          type="submit" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ 
            backgroundColor: isHovered ? "#5a8fa8" : "#86a6b5", // altera a cor ao passar o mouse
            color: "white", 
            padding: "15px", 
            borderRadius: "8px", 
            cursor: "pointer", 
            fontSize: "18px" 
          }}
        >
          Agendar Consulta
        </button>
      </form>
      {confirmado && (
        <div style={{
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          padding: "15px",
          marginTop: "20px",
          borderRadius: "8px",
          textAlign: "center"
        }}>
          <h3 style={{ color: "#13425c" }}>Consulta Agendada</h3>
          <p><strong>Paciente:</strong> {pacientes.find(p => p.id == formData.paciente)?.nome}</p>
          <p><strong>Médico:</strong> {medicos.find(m => m.id == formData.medico)?.nome}</p>
          <p><strong>Especialidade:</strong> {formData.especialidade}</p>
          <p><strong>Data:</strong> {formData.data}</p>
          <p><strong>Hora:</strong> {formData.horario}</p>
          <p><strong>Tipo:</strong> {formData.tipo}</p>
          <button 
            onClick={() => setConfirmado(false)} 
            style={{ 
              marginTop: "10px", 
              backgroundColor: "#ccc", 
              padding: "10px", 
              borderRadius: "5px", 
              cursor: "pointer" 
            }}
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
}