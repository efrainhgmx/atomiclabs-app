import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading } from "./components/atoms";
import './styles/index.css';

const Home = lazy(() => import('./components/views/Home'));
const Contact = lazy(() => import('./components/views/Contact'));
const Success = lazy(() => import('./components/views/Success'));

function App() {
  return (
   <Suspense fallback={<Loading />}>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/success" element={<Success />}/>
        </Routes>
     </BrowserRouter>
   </Suspense>
  );
}

export default App;
