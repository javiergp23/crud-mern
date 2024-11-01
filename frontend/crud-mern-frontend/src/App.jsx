//importamos los componentes
import CompShowBlogs from './components/ShowBlogs';
import CompEditBlog from './components/EditBlog';
import logo from '/vite.svg';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
  
function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />        
        </header>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={ <CompShowBlogs />} />
              <Route path='/edit/:id' element={ <CompEditBlog />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    );
  }
  
export default App;
