import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Rut from './func-components'
import Educational from './educational-components';

// คำสั่งรันขึ้น github : npm run deploy

function App() {
  return (
    <>
    <div className='App'>
      <Rut.Header/>
      <Rut.ContentImage/>
      <Rut.Content/>
      <Rut.Status/>
      <Educational/>
      <Rut.Content2/>
      <Rut.Content2/>
      <Rut.Footer/>
    </div>
     </>
  );
}

export default App;
