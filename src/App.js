
import { BrowserRouter,Router,Route,Routes } from 'react-router-dom';

import Home from './pages/home'
import { Login } from './pages/login';
import { AddPost } from './pages/addPost';
import { Outros } from './pages/outros';
import Nav from './components/organisms/nav/nav';
import Aside from './components/organisms/aside/aside';

import { StyledContainer,MainContent } from './components/organisms/Container/Container.styled';
import { Footer } from './components/organisms/footer/footer';

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
        <Route path="/Login" element={<Login />} />
        <Route path="/AddPost" element={<AddPost />} />
        <Route path="/Outros" element={<Outros />} />
      </Routes>
      
      </MainContent>
      </StyledContainer>

    </BrowserRouter>

    </div>
 
  );
}

export default App;
