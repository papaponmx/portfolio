import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';


const ImageFrame = ({ src, alt }) => (
  <div
    className="w-full h-0 pb-[216.5%] bg-no-repeat bg-cover bg-center rounded-lg"
    style={{ backgroundImage: `url(${src})` }}
    role="img"
    aria-label={alt}
  />
);

const Home = ({ images }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-red-100 text-gray-800 font-sans">
      <Head>
        <title>Intuit Dome Suite Ordering Platform | LA Clippers</title>
        <meta name="description" content="Seamless suite service ordering for LA Clippers' Intuit Dome. User-friendly web view for food and beverage orders during events." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Intuit Dome Suite Ordering Platform | LA Clippers" />
        <meta property="og:description" content="Seamless suite service ordering for LA Clippers' Intuit Dome. User-friendly web view for food and beverage orders during events." />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:url" content="https://intuitdome.laclippers.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Intuit Dome Suite Ordering Platform | LA Clippers" />
        <meta name="twitter:description" content="Seamless suite service ordering for LA Clippers' Intuit Dome. User-friendly web view for food and beverage orders during events." />
        <meta name="twitter:image" content="/thumbnail.png" />
        <link rel="canonical" href="https://intuitdome.laclippers.com" />
      </Head>

      <nav className="bg-blue-600 p-4">
        <ul className="flex justify-center space-x-4 max-w-6xl mx-auto">
          <li><Link href="/"><a className="text-white hover:text-red-200 font-medium">Home</a></Link></li>
          <li><Link href="/about"><a className="text-white hover:text-red-200 font-medium">About</a></Link></li>
          <li><Link href="/contact"><a className="text-white hover:text-red-200 font-medium">Contact</a></Link></li>
        </ul>
      </nav>

      <main className="p-8 max-w-4xl mx-auto text-center">
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-800">Intuit Dome Suite Ordering Platform</h1>
          <p className="text-xl mb-6 text-red-700 font-semibold">Seamless food and beverage ordering for LA Clippers&apos; events</p>
          <p className="text-lg text-gray-800 mx-auto max-w-2xl">
            Experience our responsive and user-friendly web view for the LA Clippers&apos; new Intuit Dome. Order food and beverages effortlessly during events. We built this solution from scratch using React and AWS, delivering an MVP in just three weeks. <a href="#" className="text-blue-600 underline font-medium hover:text-blue-800">Read the full case study here.</a>
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Image Showcase</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div key={index} className="w-full max-w-sm mx-auto">
                <ImageFrame src={src} alt={`Intuit Dome Suite Ordering Platform screenshot ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>


        <footer className="bg-white text-gray-800 p-8 rounded-lg shadow-lg relative">
          {/* Thin gradient border */}
          <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-blue-500 via-blue-600 to-red-500">
            <div className="bg-white w-full h-full rounded-lg"></div>
          </div>

          <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Jaime Rios</h3>
              <p className="text-blue-600 font-medium">Full Stack Developer</p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <a href="mailto:jaime.rios@hey.com" className="mb-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out flex items-center">
                Get in Touch
              </a>

              <div className="flex space-x-4">
                <a href="https://github.com/papaponmx" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-300">
                  <Image src="/github.svg" alt="GitHub" width={24} height={24} />
                </a>
                <a href="https://www.linkedin.com/in/jaime-rios/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-300">
                  <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                </a>
                <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-300">
                  <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="relative mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
            © 2024 Jaime Rios. All rights reserved. | Inspired by LA Clippers
          </div>
        </footer>


      </main>
    </div>
  );
};

export async function getStaticProps() {
  const images = [
    '/shots1.png',
    '/shots2.png',
    '/shots3.png',
    '/shots4.png',
    '/shots5.png',
    '/shots6.png',
  ];

  return {
    props: {
      images,
    },
  };
}

export default Home;
