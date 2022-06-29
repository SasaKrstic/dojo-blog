import Home from './Home';
import Navbar from './Navbar';

function App() {
  const title = "Helooooo";
  const likes = 50;
  // const pesron = { name: 'Sasa', age: 30 };
  return (
    <div className="App">
      <Navbar /> 
      <div className='content'>
        <Home /> 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h3>{title}</h3>
        <h3>{likes} likes</h3>
      </div>
    </div>
  );
}

export default App;
