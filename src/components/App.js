import './../css/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import Footer from './Footer';

function App() {
  return (
    <>
      <Router>
        <AnimatedRoutes/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;