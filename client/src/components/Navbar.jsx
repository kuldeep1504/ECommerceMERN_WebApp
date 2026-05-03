import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart, User, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { logout } from '../store/slices/authSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            E-SHOP
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/cart" className="relative text-gray-600 hover:text-indigo-600 flex items-center">
              <ShoppingCart size={20} className="mr-1" />
              <span>Cart</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.reduce((a, c) => a + c.qty, 0)}
                </span>
              )}
            </Link>

            {userInfo ? (
              <div className="relative group">
                <button className="text-gray-600 hover:text-indigo-600 flex items-center">
                  <User size={20} className="mr-1" />
                  <span>{userInfo.name}</span>
                </button>
                <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">Profile</Link>
                  {userInfo.isAdmin && (
                    <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">Dashboard</Link>
                  )}
                  <button onClick={logoutHandler} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="text-gray-600 hover:text-indigo-600 flex items-center">
                <User size={20} className="mr-1" />
                <span>Sign In</span>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 space-y-4">
          <Link to="/cart" className="flex items-center text-gray-600" onClick={() => setIsOpen(false)}>
            <ShoppingCart size={20} className="mr-2" />
            <span>Cart ({cartItems.reduce((a, c) => a + c.qty, 0)})</span>
          </Link>
          {userInfo ? (
            <>
              <Link to="/profile" className="block text-gray-600" onClick={() => setIsOpen(false)}>Profile</Link>
              {userInfo.isAdmin && (
                <Link to="/admin" className="block text-gray-600" onClick={() => setIsOpen(false)}>Dashboard</Link>
              )}
              <button onClick={() => { logoutHandler(); setIsOpen(false); }} className="flex items-center text-gray-600">
                <LogOut size={20} className="mr-2" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <Link to="/login" className="flex items-center text-gray-600" onClick={() => setIsOpen(false)}>
              <User size={20} className="mr-2" />
              <span>Sign In</span>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
