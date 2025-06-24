import { Button } from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="p-8 text-center">
        <h1 className="mb-4 text-6xl font-bold text-red-500">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">페이지를 찾을 수 없습니다</h2>
        <p className="mb-8 text-gray-400">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => navigate(-1)} variant="secondary" size="md">
            이전 페이지
          </Button>
          <Button as={Link} to="/" variant="secondary" size="md">
            홈으로
          </Button>
        </div>
      </div>
    </div>
  );
}
