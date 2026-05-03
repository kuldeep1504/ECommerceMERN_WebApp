import { useParams, Link } from 'react-router-dom';
import { useGetProductDetailsQuery } from '../store/slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
  };

  return (
    <div className="space-y-8">
      <Link to="/" className="inline-flex items-center text-gray-600 hover:text-indigo-600 font-medium">
        <ArrowLeft size={20} className="mr-2" />
        Back to Products
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.message || error.error}</Message>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">{product.category}</span>
              <h1 className="text-4xl font-extrabold text-gray-900">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                  <span className="ml-2 font-bold text-gray-900">{product.rating}</span>
                </div>
                <span className="text-gray-400">({product.numReviews} reviews)</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="border-t border-b border-gray-100 py-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">Price</span>
                <span className="text-3xl font-bold text-indigo-600">${product.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">Status</span>
                <span className={`font-bold ${product.countInStock > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              {product.countInStock > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Quantity</span>
                  <select 
                    value={qty} 
                    onChange={(e) => setQty(Number(e.target.value))}
                    className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <button
              onClick={addToCartHandler}
              disabled={product.countInStock === 0}
              className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
            >
              <ShoppingCart size={24} className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
