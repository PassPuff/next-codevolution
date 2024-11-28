import Card from '@/components/Card/Card';
import Link from 'next/link';

export default function Archived() {
  return (
    <Card>
      <h2>Archived notifications</h2>
      <Link className={'hover:underline'} href={'/complex-dashboard'}>
        Default
      </Link>
    </Card>
  );
}
