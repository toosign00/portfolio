import { Component, type ReactNode } from 'react';
import { Button } from '@/components/Button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-black text-white">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold">오류가 발생했습니다</h1>
            <p className="mb-8 text-gray-400">페이지를 새로고침하거나 홈으로 돌아가주세요.</p>
            <div className="flex justify-center gap-4">
              <Button onClick={() => window.location.reload()} variant="primary" size="md">
                새로고침
              </Button>
              <Button href="/" variant="secondary" size="md">
                홈으로
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
