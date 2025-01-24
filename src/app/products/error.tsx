'use client';

import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const isLoginIn = false;
  return (
    <div className="mb-3">
      <h1 className="text-xl mb-6 font-bold"> {error.message}</h1>
      <Link href="/public">Home</Link>
      <br />
      <button className="p-1.5 border-4" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
