
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="bg-gray-400 min-h-[calc(100vh-80px-112px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Create Account</h2>
          <p className="text-gray-700 mt-2">Join us and start building today.</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="w-full px-4 py-3 rounded-md border-none focus:ring-2 focus:ring-black outline-none shadow-sm text-gray-800 bg-white placeholder-gray-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-4 py-3 rounded-md border-none focus:ring-2 focus:ring-black outline-none shadow-sm text-gray-800 bg-white placeholder-gray-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="w-full px-4 py-3 rounded-md border-none focus:ring-2 focus:ring-black outline-none shadow-sm text-gray-800 bg-white placeholder-gray-500"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              className="w-full px-4 py-3 rounded-md border-none focus:ring-2 focus:ring-black outline-none shadow-sm text-gray-800 bg-white placeholder-gray-500"
              placeholder="Confirm your password"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-black hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
