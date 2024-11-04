
import { BrowserRouter,Router,Route,Routes } from 'react-router-dom';

import Home from './pages/home'
import Nav from './components/organisms/nav/nav';
import Aside from './components/organisms/aside/aside';

function App() {
  return (
    <div> 
    <BrowserRouter>
    <Nav></Nav>
    <Aside></Aside>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>

    </div>

  );
}

export default App;
