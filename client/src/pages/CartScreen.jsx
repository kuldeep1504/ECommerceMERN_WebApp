import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../store/slices/cartSlice';

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping');
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold text-gray-900">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 space-y-6">
          <div className="flex justify-center">
            <ShoppingBag size={80} className="text-gray-200" />
          </div>
          <p className="text-gray-500 text-xl">Your cart is empty</p>
          <Link to="/" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item._id} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow space-y-1 text-center sm:text-left">
                  <Link to={`/product/${item._id}`} className="text-lg font-bold hover:text-indigo-600 transition-colors">
                    {item.name}
                  </Link>
                  <p className="text-gray-500 text-sm">{item.category}</p>
                </div>
                <div className="font-bold text-xl text-indigo-600">
                  ${item.price}
                </div>
                <div className="flex items-center space-x-4">
                  <select
                    value={item.qty}
                    onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                    className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    ))}
                  </select>
                  <button 
                    onClick={() => removeFromCartHandler(item._id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50 space-y-6 sticky top-24">
              <h2 className="text-2xl font-bold">Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>Price</span>
                  <span>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between items-center">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-2xl font-extrabold text-indigo-600">
                    ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={checkoutHandler}
                className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex justify-center items-center active:scale-95"
              >
                Checkout
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
