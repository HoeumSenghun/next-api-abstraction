import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6">Fake Store API CRUD App</h1>
        <p className="text-xl mb-8">A Next.js 15 application demonstrating API abstraction with CRUD operations</p>
        <Link
          href="/products"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Got To View Products <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </main>
  )
}
