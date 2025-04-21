// API abstraction for Fake Store API

const API_URL = "https://fakestoreapi.com"

// Get all products
export async function getProducts() {
  const response = await fetch(`${API_URL}/products`)

  if (!response.ok) {
    throw new Error("Failed to fetch products")
  }

  return response.json()
}

// Get a single product
export async function getProduct(id) {
  const response = await fetch(`${API_URL}/products/${id}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch product with id ${id}`)
  }

  return response.json()
}

// Create a new product
export async function createProduct(product) {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })

  if (!response.ok) {
    throw new Error("Failed to create product")
  }

  return response.json()
}

// Update a product
export async function updateProduct(id, product) {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })

  if (!response.ok) {
    throw new Error(`Failed to update product with id ${id}`)
  }

  return response.json()
}

// Delete a product
export async function deleteProduct(id) {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error(`Failed to delete product with id ${id}`)
  }

  return response.json()
}
