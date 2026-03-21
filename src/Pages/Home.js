import '../App.css';
import timothy from '../Ressources/timothy_burger.jpg';

function Home() {
  return (
    <div className="App-main">
      <h1>Super Mario enjoyer Fanclub</h1>
      <h2>auf dieser seite erwartet dich spaß und freude und liebe und freude und sex</h2>

      <p>das ist ein bild von mir, timothy görezn 😊</p>

      <img src={timothy} className="Picture-timothy" alt="Timothy am burger fooden" />
    </div>
  );
}

export default Home;