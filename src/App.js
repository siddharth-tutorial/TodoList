
import { Route, Routes } from 'react-router';
import Home from './Home';
import ToDo from './ToDo';
// import Api from './Api';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/todo' element={<ToDo/>}/>
      {/* <Route path='/api' element={<Api/>}/> */}
    </Routes>
    </>
  );
}

export default App;
