import * as React from "react";
import { Link } from "react-router-dom";

/** ProductView component
 *
 * Takes the following props:
 * product - product object.
 * productId - number representing the id of the product.
 * quantity - quantity for this product found in the shoppingCart.
 * handleAddItemToCart - handler function defined in the App.jsx component.
 * handleRemoveItemToCart - handler function defined in the App.jsx component.
 *
 * App -> ProductDetail -> ProductView
 */
export default function ProductView({
  product,
  quantity,
  handleAddItemToCart,
  handleRemoteItemToCart,
}) {
    const productId = product.id;
  return (
    <div className="product-view">
      <h1 className="product-id">Product # {productId}</h1>
      <ProductCard
        productCardDetails={
          (product,
          quantity,
          handleAddItemToCart,
          handleRemoteItemToCart,
          (showDescription = true))
        }
      />
    </div>
  );
}
