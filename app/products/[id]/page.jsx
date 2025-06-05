import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Edit } from "lucide-react"
import { getProduct } from "@/lib/api"

export default async function ProductDetailPage({ params }) {
  const product = await getProduct(Number.parseInt(params.id))

  
  const imageUrl = product.images?.[0] || product.image || "/placeholder.svg"

  return (
    <div className="container mx-auto py-8 px-4">
      <Link href="/products" className="inline-flex items-center text-blue-600 mb-6">
        <ArrowLeft size={18} className="mr-2" /> Back to Products
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 relative h-80 bg-gray-100">
            <Image src={imageUrl || "/placeholder.svg"} alt={product.title} fill className="object-contain p-8" />
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold">{product.title}</h1>
              <Link href={`/products/edit/${product.id}`} className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
                <Edit size={20} />
              </Link>
            </div>

            <div className="mt-4 flex items-center">
              <span className="inline-flex items-center bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full text-sm font-medium">
                {product.category?.name || product.category}
              </span>
            </div>

            <div className="mt-6">
              <p className="text-gray-700">{product.description}</p>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
            </div>

            <button className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
