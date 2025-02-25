'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';
export default function AgendarConsulta() {
  const [medico, setMedico] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [paciente, setPaciente] = useState("");
  const [tipo, setTipo] = useState("");
  const [dataConsulta, setDataConsulta] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Cria o objeto com os dados da nova consulta
    const novaConsulta = {
      medico,
      especialidade,
      paciente,
      tipo,
      dataConsulta,
    };
    try {
      const response = await fetch("https://api-clinica-2a.onrender.com/consultas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novaConsulta),
      });
      if (response.ok) {
        alert("Consulta agendada com sucesso!");
        router.push("/listarConsulta"); // Redireciona para a página de listagem de consultas
      } else {
        alert("Houve um erro ao agendar a consulta. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao agendar consulta:", error);
      alert("Erro ao agendar consulta. Verifique o console para mais detalhes.");
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      {/* Div centralizada para o título */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ color: "#768f9b" }}>Agendar Consulta</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Nome do Médico"
          value={medico}
          onChange={(e) => setMedico(e.target.value)}
          required
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
          placeholder="Especialidade"
          value={especialidade}
          onChange={(e) => setEspecialidade(e.target.value)}
          required
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
          placeholder="Nome do Paciente"
          value={paciente}
          onChange={(e) => setPaciente(e.target.value)}
          required
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
          placeholder="Tipo da Consulta"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
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
          type="datetime-local"
          placeholder="Data e Hora"
          value={dataConsulta}
          onChange={(e) => setDataConsulta(e.target.value)}
          required
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
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            backgroundColor: "#768f9b",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Agendar Consulta
        </button>
      </form>
    </div>
  );
}