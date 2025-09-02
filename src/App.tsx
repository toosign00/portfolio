import { domMax, LazyMotion } from 'motion/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '@/Router';

function App() {
  return (
    <LazyMotion features={domMax} strict>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </LazyMotion>
  );
}

export default App;
