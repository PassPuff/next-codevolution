import {ReactNode} from "react";

export const metadata = {
  title: "Virmer page",
  description: 'the best site'
}

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  )
}