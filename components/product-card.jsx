"use client"

import Image from "next/image"
import Link from "next/link"
import { Edit, Trash2 } from "lucide-react"
import { deleteProductAction } from "@/app/actions"

export function ProductCard({ product }) {
  const handleDelete = async () => {
    if (product.id && confirm("Are you sure you want to delete this product?")) {
      await deleteProductAction(product.id)
    }
  }

  // Get the first image from the images array or use a placeholder
  const imageUrl = product.images?.[0] || product.image || "/placeholder.svg"

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-gray-100">
        {/* <Image src={imageUrl || "/placeholder.svg"} alt={product.title} fill className="object-contain p-4" /> */}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold line-clamp-1">{product.title}</h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
            {product.category?.name || product.category}
          </span>
        </div>
        <div className="flex justify-between mt-4">
          <Link href={`/products/${product.id}`} className="text-sm text-blue-600 hover:underline">
            View Details
          </Link>
          <div className="flex space-x-2">
            <Link href={`/products/edit/${product.id}`} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-full">
              <Edit size={18} />
            </Link>
            <button onClick={handleDelete} className="p-1.5 text-red-600 hover:bg-red-50 rounded-full">
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
