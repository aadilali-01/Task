import './globals.css'

export const metadata = {
  title: 'Blacksof Task',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
