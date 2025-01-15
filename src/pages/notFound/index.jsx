const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-9xl font-bold text-blue">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray mt-4">
        Page Not Found
      </h2>
      <p className="text-gray text-center mt-2">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 px-6 py-3 text-white bg-blue hover:bg-blue-700 rounded-lg transition duration-300"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFound;
