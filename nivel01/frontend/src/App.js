import React, {useState} from 'react';
import Header from './components/Header';

import './App.css';
import backgroundImage from './assets/background.jpg';

function App(){
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    // useState retorna um array com 2 posições:
  // 1. Variável com seu valor inicial
  // 2. Função para atualizarmos esse valor

  function handleAddProject() {
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  }

    return (
    <>
        <Header title="projects"></Header>
        <img width={300} src={backgroundImage} alt=""/>
        <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
            <button type="button" onClick={handleAddProject}></button>
    </>
        )
}

export default App;