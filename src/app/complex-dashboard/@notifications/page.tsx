import Card from '@/components/Card/Card';
import Link from 'next/link';

export default function Notifications() {
  return (
    <Card>
      <h2>Default notifications</h2>
      <Link className={'hover:underline'} href={'/complex-dashboard/archived'}>
        Archived
      </Link>
    </Card>
  );
}
