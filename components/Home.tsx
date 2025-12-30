import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="flex items-center justify-center py-16">
          <h1 className="text-6xl font-bold font-heading">Start Prompting</h1>
        </div>
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default Home;