import React, { useState, useEffect } from 'react';
import api from './services/api';

import Header from './components/Header';

import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  // useState retorna um array com 2 posições:
  // 1. Variável com seu valor inicial
  // 2. Função para atualizarmos esse valor

  async function handleAddProject() {
    //setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    const response = await api.post('projects', {

      title: `Novo Projeto ${Date.now()}`,
      owner: "Owner 3",
    });

    const project = response.data;

    setProjects([...projects, project])

  }

  return (
    <>
      <Header title="projects"></Header>
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
      <button  type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}

export default App;