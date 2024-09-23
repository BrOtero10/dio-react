import gitLogo from "../assets/github.png"
import { useState } from "react";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { Container } from './styles'
import Button from "../components/Button";

import { api } from "../services/api";

function App() {
  
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`)

      if(data.id) {
        const isExist = repos.find(repo => repo.id == data.id)

        if(!isExist) {
          setRepos(prev => [...prev,  data]);
        }
      }

    } catch(error) {
      alert('Repositório não encontrado')
    }
  }

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(repo => repo.id !== id))
  }

  return (
    <Container>
      <img src={gitLogo} alt="github logo" width={72} height={72}/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      { repos.map(repo => <ItemRepo repo={repo} handleRemove={handleRemoveRepo} key={repo.id} />) } 
    </Container>
  );
}

export default App;