import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeApp from './HomeApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/*' element={<HomeApp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;