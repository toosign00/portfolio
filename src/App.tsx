import { domAnimation, LazyMotion } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/routes/AppRoutes';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </LazyMotion>
  );
}

export default App;
