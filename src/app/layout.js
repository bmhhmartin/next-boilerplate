import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
          <Header></Header>
          {children}
          <Footer></Footer>
      </body>
    </html>
  )
}
