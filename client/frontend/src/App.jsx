import React, { useState } from 'react';

// The main App component containing the entire home page
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScanClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Hide message after 3 seconds
  };

  return (
    <div className="text-gray-800 font-inter">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-green-600">Recycle+</a>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">How it Works</a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Rewards</a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
          </nav>
          <button className="md:hidden text-gray-600 hover:text-green-600 focus:outline-none" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden bg-white shadow-md ${isMenuOpen ? '' : 'hidden'}`}>
          <nav className="px-6 pt-2 pb-4 space-y-2">
            <a href="#" className="block text-gray-600 hover:text-green-600 transition-colors">Home</a>
            <a href="#" className="block text-gray-600 hover:text-green-600 transition-colors">How it Works</a>
            <a href="#" className="block text-gray-600 hover:text-green-600 transition-colors">Rewards</a>
            <a href="#" className="block text-gray-600 hover:text-green-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        {/* Hero Section */}
        <section className="bg-white rounded-xl shadow-lg mx-4 md:mx-auto max-w-7xl overflow-hidden mb-12">
          <div className="md:flex items-center">
            <div className="md:w-1/2 p-8 md:p-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                Transform Trash into Treasure
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Earn rewards for every item you recycle. Scan, sort, and get rewarded while helping the planet.
              </p>
              <button onClick={handleScanClick} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
                Start Recycling
              </button>
            </div>
            <div className="md:w-1/2 hidden md:block">
              {/* Placeholder Image */}
              <img src="https://placehold.co/1200x800/22C55E/ffffff?text=Recycling+Hero+Image" alt="Recycling illustration" className="w-full h-full object-cover rounded-tr-xl rounded-br-xl" />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container mx-auto px-6 mb-12">
          <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md transform hover:-translate-y-2 transition-transform">
              <div className="text-5xl mb-4">🤳</div>
              <h3 className="font-semibold text-xl mb-2">Scan</h3>
              <p className="text-gray-600">Use your camera to scan the barcode or label on an item.</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md transform hover:-translate-y-2 transition-transform">
              <div className="text-5xl mb-4">♻️</div>
              <h3 className="font-semibold text-xl mb-2">Sort</h3>
              <p className="text-gray-600">Our app tells you exactly how and where to recycle the item.</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md transform hover:-translate-y-2 transition-transform">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="font-semibold text-xl mb-2">Reward</h3>
              <p className="text-gray-600">Earn points for every item, which you can redeem for rewards.</p>
            </div>
          </div>
        </section>

        {/* Rewards Section */}
        <section className="bg-green-50 rounded-xl shadow-inner mx-4 md:mx-auto max-w-7xl p-8 mb-12">
          <div className="md:flex md:space-x-8 items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Unlock Amazing Rewards</h2>
              <p className="text-gray-600 mb-4">
                Your recycling efforts don't just help the planet—they also get you exclusive rewards! Use your points to redeem discounts, gift cards, or even donate to environmental charities.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Discounts on eco-friendly products</li>
                <li>Gift cards to popular stores</li>
                <li>Donations to green initiatives</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://placehold.co/800x600/6EE7B7/ffffff?text=Rewards+Illustration" alt="Rewards illustration" className="rounded-xl shadow-md" />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-6 text-center py-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg text-gray-600 mb-8">Join thousands of recyclers and start earning rewards today.</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Join Now
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; 2025 Recycle+. All rights reserved.</p>
        </div>
      </footer>

      {/* Simple Message Box */}
      {showMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 p-4 bg-green-500 text-white rounded-lg shadow-lg animate-fade-in-up">
          <p>This button is ready to start your recycling journey!</p>
        </div>
      )}
    </div>
  );
};

export default App;
