import {ReactNode} from "react";

export const metadata = {
  title: "Virmer page",
  description: 'the best site'
}

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">

    <body>
    <header
      style={{
        backgroundColor: 'lightblue',
        padding: '1rem'
      }}
    >
      <p>Header</p>
    </header>
    {children}
    <footer
      style={{
        backgroundColor: 'lightgoldenrodyellow',
        padding: '1rem'
      }}>
      <p>Footer</p>
    </footer>
    
    </body>
    </html>
  )
}