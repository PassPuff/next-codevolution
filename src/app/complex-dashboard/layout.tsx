export default function DashboardLayout({
  children,
  analytics,
  notifications,
  revenue,
  login,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoginIn = true;
  return isLoginIn ? (
    <>
      <main className={'mb-3 text-3xl'}>{children}</main>
      <div className={'flex gap-3'}>
        <ul className={'flex flex-col gap-3  text-3xl'}>
          <li>{analytics}</li>
          <li>{revenue}</li>
        </ul>

        <div className={'flex flex-1'}>{notifications}</div>
      </div>
    </>
  ) : (
    <h1>{login}</h1>
  );
}
