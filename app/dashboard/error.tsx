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
        title="Something went wrong"
        subTitle={error.message || 'An unexpected error occurred'}
        extra={[
          <Button type="primary" key="retry" onClick={reset}>
            Try Again
          </Button>,
          <Link href="/dashboard" key="home">
            <Button>Go to Dashboard</Button>
          </Link>,
        ]}
      />
    </div>
  );
}
