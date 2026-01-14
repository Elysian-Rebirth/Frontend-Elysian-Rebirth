'use client';

import { Result, Button } from 'antd';
import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Result
        status="error"
        title="Chat Error"
        subTitle={error.message || 'Failed to load chat'}
        extra={[
          <Button type="primary" key="retry" onClick={reset}>
            Retry
          </Button>,
          <Link href="/dashboard" key="home">
            <Button>Back to Dashboard</Button>
          </Link>,
        ]}
      />
    </div>
  );
}
