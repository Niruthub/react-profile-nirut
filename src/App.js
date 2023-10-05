import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Content, Content2, ContentImage, Footer, Header} from './func-components'

// คำสั่งรันขึ้น github : npm run deploy

function App() {
  return (
    <>
    <div className='App'>
      <Header/>
      <ContentImage/>
      <Content/>
      <Content2/>
      <Content2/>
      <Content2/>
      <Content2/>
      <Footer/>
    </div>
     </>
  );
}

export default App;
