import logo from './logo.svg';
import './App.css';
import Navbar from './bar';

function App() {
  return (
    <div className="App" style={{height:'100vh'}}>
    <Navbar/>
    <div style={{height:'50px'}}></div>
    <div className='content' style={{margin: '100px 200px 200px 200px',backgroundColor: 'rgba(255, 255, 255, 0.5)', height: '500px'}}>Hi Nitut</div>
    </div>
      
  );
}

export default App;
