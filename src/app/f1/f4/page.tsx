import Link from 'next/link';

export default function F4() {
  return (
    <>
      F4 Page
      <div>
        <Link href="/f1/f3">F3 page link</Link>
        <Link href="/about">about page</Link>
      </div>
    </>
  );
}
