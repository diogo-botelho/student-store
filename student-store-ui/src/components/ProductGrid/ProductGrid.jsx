import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({
    products,
    handleAddItemToCart,
    handleRemoteItemToCart
}) {
  return (
    <div className="product-grid">
      {products.map((product) => (<ProductCard
        productCardDetails={
          (product,
          quantity,
          handleAddItemToCart,
          handleRemoteItemToCart,
          (showDescription = false))
        }
      />))}
      </div>
  )
}