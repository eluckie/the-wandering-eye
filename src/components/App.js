import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import CollapsibleNavbar from './CollapsibleNavbar';

function App() {
  return (
    <>
      <Router>
        <CollapsibleNavbar/>
        <AnimatedRoutes/>
      </Router>
    </>
  );
}

export default App;