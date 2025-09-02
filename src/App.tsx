import { domAnimation, LazyMotion } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '@/Router';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </LazyMotion>
  );
}

export default App;
