
import { BrowserRouter,Router,Route,Routes } from 'react-router-dom';

import Home from './pages/home'
import Nav from './components/organisms/nav/nav';
import Aside from './components/organisms/aside/aside';

import { StyledContainer,MainContent } from './components/organisms/Container/Container.styled';

function App() {
  return (

    <div> 
    <BrowserRouter>
   
    <Nav/>
    <StyledContainer>
    <Aside/>
    <MainContent>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </MainContent>
      </StyledContainer>
    </BrowserRouter>

    </div>
 
  );
}

export default App;
