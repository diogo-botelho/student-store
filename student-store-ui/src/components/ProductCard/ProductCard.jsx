import * as React from "react";
import { Link } from "react-router-dom";

/** ProductCard component
 *
 * Takes the prop productCardDetails, an object with the following properties:
 * product - product object.
 * productId - number representing the id of the product.
 * quantity - quantity for this product found in the shoppingCart.
 * handleAddItemToCart - handler function defined in the App.jsx component.
 * handleRemoveItemToCart - handler function defined in the App.jsx component.
 * showDescription - boolean value that determines whether to show description.
 * 
 * App -> Home -> ProductGrid -> ProductCard
 */
export default function ProductCard({ productCardDetails }) {
  const {
    product,
    productId,
    quantity,
    handleAddItemToCart,
    handleRemoteItemToCart,
    showDescription,
  } = productCardDetails;

  return (
    <div className="product-card">
      <div className="product-name">Name: {product.name}</div>
      <div className="product-price">Price: {product.price}</div>
      {showDescription && (
        <div className="product-description">
          Description: {product.description}
        </div>
      )}
      <div className="media">
        <Link to={`/products/${productId}`}>
          <img src={product.image}></img>
        </Link>
      </div>
      <button className="add" onClick={handleAddItemToCart}></button>
      <button className="remove" onClick={handleRemoteItemToCart}></button>
      {quantity > 0 && (
        <div className="product-quantity">Items in cart: {quantity}</div>
      )}
    </div>
  );
}
