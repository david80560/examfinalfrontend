import './globals.css'
import {NavBar} from './components/NavBar'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Exam David</title>
      </head>
      <body>
          <NavBar/>
        {children}
      </body>
    </html>
  )
};