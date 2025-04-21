"use server"

import { createProduct, updateProduct, deleteProduct } from "@/lib/api"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createProductAction(product) {
  await createProduct(product)
  revalidatePath("/products")
  redirect("/products")
}

export async function updateProductAction(id, product) {
  await updateProduct(id, product)
  revalidatePath(`/products/${id}`)
  revalidatePath("/products")
  redirect("/products")
}

export async function deleteProductAction(id) {
  await deleteProduct(id)
  revalidatePath("/products")
}
