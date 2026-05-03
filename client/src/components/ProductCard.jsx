import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
      <Link to={`/product/${product._id}`}>
        <div className="relative aspect-[4/5] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
            {product.category}
          </div>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product._id}`} className="hover:text-indigo-600">
            <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{product.name}</h3>
          </Link>
          <div className="flex items-center text-amber-500 bg-amber-50 px-2 py-1 rounded-lg">
            <Star size={14} fill="currentColor" />
            <span className="ml-1 text-xs font-bold">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 min-h-[40px]">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
          <button className="bg-indigo-600 text-white p-2 rounded-xl hover:bg-indigo-700 transition-colors shadow-indigo-200 shadow-lg active:scale-95">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
