import { domMax, LazyMotion } from 'motion/react';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { useScrollTracking } from '@/hooks/useScrollTracking';
import { Router } from '@/Router';
import { SnowrEffect } from '@/components/SnowEffect';
import '@/i18n';

function App() {
  const isMobile = useIsMobile();
  useScrollTracking();

  useEffect(() => {
    // 프로덕션 환경에서만 GA 초기화
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('G-G21KRWVJZX');
      ReactGA.send('pageview');
    }
  }, []);

  return (
    <LazyMotion features={domMax} strict>
      <SnowrEffect />
      <BrowserRouter>
        <Router />
        <Toaster
          position={isMobile ? 'bottom-center' : 'top-right'} // 토스트 위치 설정 (모바일: 하단 중앙, 데스크탑: 우측 상단)
          richColors={false} // 색상 강화 비활성화
          theme='dark' // 테마 다크로 설정
          expand={false} // 확장 모드 비활성화
          closeButton={false} // 닫기 버튼 비활성화
          visibleToasts={3} // 동시에 표시되는 토스트 수
          toastOptions={{
            duration: 2500,
            style: { background: '#232b3d', color: '#fefefe', borderColor: '#333842' },
          }}
        />
      </BrowserRouter>
    </LazyMotion>
  );
}

export default App;
