import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fake Store API CRUD App",
  description: "Next.js 15 application with API abstraction for CRUD operations",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl">FakeStore</span>
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-600 hover:text-blue-600">
                    Products
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="min-h-screen bg-gray-50">{children}</main>
        <footer className="bg-white border-t py-6">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Fake Store API CRUD App. Built with Next.js 15.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
