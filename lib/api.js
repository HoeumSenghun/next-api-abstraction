// API abstraction for Platzi Fake Store API

const API_URL = "https://api.escuelajs.co/api/v1"

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
  // The Platzi API requires these specific fields
  const productData = {
    title: product.title,
    price: product.price,
    description: product.description,
    categoryId: getCategoryId(product.category),
    images: [product.image || "https://placeimg.com/640/480/any"],
  }

  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(`Failed to create product: ${JSON.stringify(errorData)}`)
  }

  return response.json()
}

// Update a product
export async function updateProduct(id, product) {
  // Only include fields that are being updated
  const updateData = {}
  if (product.title) updateData.title = product.title
  if (product.price) updateData.price = product.price
  if (product.description) updateData.description = product.description
  if (product.category) updateData.categoryId = getCategoryId(product.category)
  if (product.image) updateData.images = [product.image]

  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(`Failed to update product: ${JSON.stringify(errorData)}`)
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

  return { id }
}

// Helper function to map category names to IDs
// Platzi API uses category IDs instead of names
function getCategoryId(category) {
  const categoryMap = {
    electronics: 1,
    furniture: 2,
    clothes: 3,
    shoes: 4,
    others: 5,
    "men's clothing": 3,
    "women's clothing": 3,
    jewelery: 5,
  }

  return categoryMap[category] || 5 // Default to "others" if category not found
}

// Get all categories
export async function getCategories() {
  const response = await fetch(`${API_URL}/categories`)

  if (!response.ok) {
    throw new Error("Failed to fetch categories")
  }

  return response.json()
}
