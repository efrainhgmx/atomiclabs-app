import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import('./components/views/Home'));

function App() {
  return (
   <Suspense fallback="Loading">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
     </BrowserRouter>
   </Suspense>
  );
}

export default App;
