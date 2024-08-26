import Head from 'next/head';
import Link from 'next/link';

const ImageFrame = ({ src, alt }) => (
  <div
    className="w-full h-0 pb-[216.5%] bg-no-repeat bg-cover bg-center"
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
          <li><Link href="/"><a className="text-white hover:text-red-200">Home</a></Link></li>
          <li><Link href="/about"><a className="text-white hover:text-red-200">About</a></Link></li>
          <li><Link href="/contact"><a className="text-white hover:text-red-200">Contact</a></Link></li>
        </ul>
      </nav>

      <main className="p-8 max-w-4xl mx-auto text-center">
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-800">Intuit Dome Suite Ordering Platform</h1>
          <p className="text-xl mb-6 text-red-700">Seamless food and beverage ordering for LA Clippers&apos; events</p>
          <p className="text-lg text-gray-800 mx-auto max-w-2xl">
            Experience our responsive and user-friendly web view for the LA Clippers&apos; new Intuit Dome. Order food and beverages effortlessly during events. We built this solution from scratch using React and AWS, delivering an MVP in just three weeks. <a href="#" className="text-blue-600 underline">Read the full case study here.</a>
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

        <section className="mb-12 bg-white bg-opacity-70 p-8 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Key Features</h2>
          <ul className="list-none mb-4 text-gray-700">
            <li className="mb-2">✓ Responsive design for all devices</li>
            <li className="mb-2">✓ Optimized images for fast loading</li>
            <li className="mb-2">✓ SEO-friendly structure and metadata</li>
            <li className="mb-2">✓ Accessible navigation and content</li>
            <li className="mb-2">✓ Real-time order tracking</li>
            <li>✓ Customizable menu options</li>
          </ul>
        </section>

        <footer className="flex flex-col items-center bg-white bg-opacity-70 p-6 rounded-lg border border-red-200">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-lg mr-4"></div>
            <div>
              <h3 className="text-xl font-bold text-blue-800">LA Clippers</h3>
              <p className="text-red-600">Intuit Dome Experience</p>
            </div>
          </div>
          <p className="text-gray-600">Powered by Next.js and AWS</p>
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
