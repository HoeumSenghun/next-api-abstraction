"use client"

import { ProductForm } from "@/components/product-form"
import { createProductAction } from "@/app/actions"

export default function NewProductPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Create New Product</h1>
      <ProductForm onSubmit={createProductAction} />
    </div>
  )
}
