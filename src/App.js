import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.css';

const Home = lazy(() => import('./components/views/Home'));
const Contact = lazy(() => import('./components/views/Contact'));

function App() {
  return (
   <Suspense fallback="Loading">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
     </BrowserRouter>
   </Suspense>
  );
}

export default App;
