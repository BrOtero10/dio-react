import "./styles.css"
import Header from "../../components/Header";
import background from '../../assets/background.png'
import ItemList from "../../components/ItemList";
import { useState } from "react";

function App() {

  const [user, setUser] = useState("")
  const [currentUser, setCurrentUser] = useState({})
  const [repos, setRepos] = useState([])

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()

    if(newUser) {
      const { login, avatar_url, name, bio, html_url } = newUser;
      setCurrentUser({ login, avatar_url, name, bio, html_url })

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos = await reposData.json();
      console.log(newRepos)
      if(newRepos?.length) {
        setRepos(newRepos)
      }
    }
    console.log(newUser);
  }

  const handleOnClickUsername = () => {
    window.open(currentUser.html_url, '_blank')
  }

  return (
    <div className="App">
      <Header/>
      <div className="conteudo">
        <img src={background} alt="Imagem de background da logo do gihub" className='background' />
        <div className="info">
          <div>
            <input type="text" name="usuario" placeholder="@username" value={user} onChange={(e) => setUser(e.target.value)} />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          { currentUser.login && (
            <>
            <div className="perfil">
              <img src={currentUser.avatar_url} alt="Imagem de perfil" className="profile" />
              <div>
                <h3 onClick={handleOnClickUsername}>{currentUser.name}</h3>
                <span>@{currentUser.login}</span>
                <p>{currentUser.bio}</p>
              </div>
            </div>
            <hr/>
            { repos?.length && (
              <div>
                <h4 className="repositorio">Repositórios</h4>
                {repos.map((item, index) => <ItemList title={item.name} description={item.description} href={item.html_url} /> )}
              </div>
            ) }
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
