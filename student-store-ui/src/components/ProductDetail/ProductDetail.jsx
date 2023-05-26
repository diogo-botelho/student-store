import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductView from "../ProductView/ProductView";

const BACKEND_URL = "http://localhost:3001/store";

/** ProductView component
 *
 * Takes the following props:
 * handleAddItemToCart - handler function defined in the App.jsx component.
 * handleRemoveItemToCart - handler function defined in the App.jsx component.
 *
 * App -> ProductDetail -> ProductView
 */
export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  let { productId } = useParams();
  const [product, setProduct] = useState(undefined);
  const [needsProduct, setNeedsProduct] = useState(true);

  useEffect(function loadProductInfo() {
    async function getCurrentProduct(productId) {
      try {
        const currentProduct = (await axios.get(`${BACKEND_URL}/${productId}`))
          .data;
        setProduct(currentProduct);
        setNeedsProduct(false);
      } catch {
        setProduct(undefined);
      }
    }
    getCurrentProduct(productId);
  }, []);

  console.log(product, productId, `${BACKEND_URL}/${id}`);

  return (
    <div className="product-detail">
      {needsProduct ? (
        "Loading..."
      ) : product ? (
        <ProductView
          product={product}
          quantity={product.quantity}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
}
