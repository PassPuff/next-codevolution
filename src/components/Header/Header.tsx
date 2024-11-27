import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex gap-2">
      <Link href="/">Main</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
    </nav>
  );
}
