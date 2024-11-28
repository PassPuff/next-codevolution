import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex gap-2">
      <Link className={'hover:underline'} href="/">
        Main
      </Link>
      <Link className={'hover:underline'} href="/blog">
        Blog
      </Link>
      <Link className={'hover:underline'} href="/about">
        About
      </Link>
      <Link className={'hover:underline'} href="/products">
        Products
      </Link>
    </nav>
  );
}
