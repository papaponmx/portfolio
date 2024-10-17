import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { CheckSquare } from "lucide-react";

const ImageFrame = ({ src, alt }) => (
  <div
    className="w-full h-0 pb-[75%] bg-no-repeat bg-cover bg-center rounded-lg"
    style={{ backgroundImage: `url(${src})` }}
    role="img"
    aria-label={alt}
  />
);

const Home = ({ images }) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100 text-gray-800 font-sans">
      <Head>
        <title>Dynamic Address Management for Paw.com | Portfolio</title>
        <meta
          name="description"
          content="Seamless address management system for Paw.com using Shopify Liquid and React integration."
        />
        {/* Add more meta tags similar to the original */}
      </Head>

      <nav className="bg-purple-600 p-4">
        {/* Navigation similar to original */}
      </nav>

      <main className="p-8 max-w-4xl mx-auto text-center">
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-purple-800">
            Elevating E-commerce with Dynamic Address Management
          </h1>
          <p className="text-xl mb-6 text-blue-700 font-semibold">
            Seamless integration of React and Shopify Liquid for Paw.com
          </p>
          <p className="text-lg text-gray-800 mx-auto max-w-2xl">
            Discover how we transformed address management for Paw.com, creating a single-page application experience within Shopify's ecosystem. Our solution enables users to dynamically manage their addresses without page reloads, enhancing user experience and site performance.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-700">
            Visual Tour: Dynamic Address Management
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
            {images.map((src, index) => (
              <div key={index} className="w-full max-w-sm mx-auto">
                <ImageFrame
                  src={src}
                  alt={`Paw.com Address Management screenshot ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-700">Key Features & Benefits</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <h3 className="text-2xl font-bold mb-4 text-purple-800">
              Improvements and Innovations
            </h3>

            <ul className="list-none text-left mb-6">
              <li className="flex items-center py-2">
                <CheckSquare className="text-purple-600 w-5 h-5 mr-2" />
                <span>Seamless integration of React within Shopify Liquid templates</span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-purple-600 w-5 h-5 mr-2" />
                <span>Dynamic updates without full page reloads</span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-purple-600 w-5 h-5 mr-2" />
                <span>Improved user experience with faster response times</span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-purple-600 w-5 h-5 mr-2" />
                <span>Reduced server load through efficient client-side rendering</span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-purple-600 w-5 h-5 mr-2" />
                <span>Enhanced maintainability with modular React components</span>
              </li>
            </ul>

            <h4 className="text-xl font-semibold mb-2 text-purple-700">
              Technical Highlights:
            </h4>
            <ul className="list-none text-left mb-6">
              <li className="flex items-center py-2">
                <CheckSquare className="text-purple-600 w-5 h-5 mr-2" />
                <span>React for dynamic UI updates</span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-purple-600 w-5 h-5 mr-2" />
                <span>Shopify Liquid for server-side rendering</span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-purple-600 w-5 h-5 mr-2" />
                <span>Custom hooks for state management</span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-purple-600 w-5 h-5 mr-2" />
                <span>Optimized API calls for faster data retrieval</span>
              </li>
            </ul>
          </div>
        </section>

        <footer className="bg-white text-gray-800 p-8 rounded-lg shadow-lg relative">
          {/* Footer content similar to the original */}
        </footer>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const images = [
    "/paw-com/address-list.png",
    "/paw-com/edit-address.png",
    "/paw-com/add-address.png",
    "/paw-com/confirmation.png",
  ];

  return {
    props: {
      images,
    },
  };
}

export default Home;
