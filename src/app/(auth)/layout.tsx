export default function Layout({children}: {children?: React.ReactNode}) {
  return (
    <html lang="en">

    <body>
    <section style={{textAlign: 'center'}}>
      {children}
    </section>
    </body>
    </html>
  );
}