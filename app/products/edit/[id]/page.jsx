"use client"

import { getProduct } from "@/lib/api"
import { ProductForm } from "@/components/product-form"
import { updateProductAction } from "@/app/actions"

export default async function EditProductPage({ params }) {
  const product = await getProduct(Number.parseInt(params.id))

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Edit Product</h1>
      <ProductForm
        initialData={product}
        onSubmit={async (data) => {
          await updateProductAction(Number.parseInt(params.id), data)
        }}
      />
    </div>
  )
}
