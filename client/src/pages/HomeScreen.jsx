import { useGetProductsQuery } from '../store/slices/productsApiSlice';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
  const { data, isLoading, error } = useGetProductsQuery({ keyword: '', pageNumber: 1 });

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[400px] rounded-3xl overflow-hidden bg-indigo-900 flex items-center px-12 text-white">
        <div className="relative z-10 max-w-xl space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Elevate Your Style with <span className="text-indigo-400">Exclusive</span> Collections
          </h1>
          <p className="text-indigo-100 text-lg">
            Discover the latest trends in fashion, electronics, and lifestyle. Quality meets affordability.
          </p>
          <button className="bg-white text-indigo-900 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors shadow-xl">
            Shop Now
          </button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-transparent"></div>
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000" 
          alt="Banner" 
          className="absolute right-0 top-0 h-full w-2/3 object-cover -z-0"
        />
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-500 mt-2">Explore our handpicked selection just for you.</p>
          </div>
          <button className="text-indigo-600 font-semibold hover:underline">View All</button>
        </div>

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error?.data?.message || error.error}</Message>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 text-center space-y-4">
        <h2 className="text-3xl font-bold">Never Miss a Trend</h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Subscribe to our newsletter and get 10% off your first purchase plus exclusive access to new drops.
        </p>
        <div className="flex justify-center max-w-md mx-auto mt-6">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-grow px-6 py-3 rounded-l-2xl border border-gray-200 focus:outline-none focus:border-indigo-500"
          />
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-r-2xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
