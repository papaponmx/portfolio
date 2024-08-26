import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home = ({ images }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-red-100 text-gray-800">
      <Head>
        <title>My NextJS Page</title>
        <meta name="description" content="A responsive, accessible, and SEO-friendly NextJS page with TailwindCSS" />
      </Head>

      <nav className="bg-blue-600 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="text-white hover:text-red-200">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-white hover:text-red-200">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-white hover:text-red-200">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>

      <main className="p-8">
        <header className="mb-8">
          <h1 className="text-5xl font-bold mb-2 text-blue-800">Welcome to My NextJS Page</h1>
          <p className="text-xl mb-4 text-red-700">A responsive, accessible, and SEO-friendly page built with NextJS and TailwindCSS</p>
        </header>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Image Showcase</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg" style={{ paddingTop: '133.33%' }}>
              <Image
                src={images[0]}
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                priority
                className="rounded-lg"
              />
            </div>
            {images.slice(1).map((src, index) => (
              <div key={index} className={`relative overflow-hidden rounded-lg ${index >= 3 ? 'col-span-2 lg:col-span-1' : ''}`} style={{ paddingTop: '177.77%' }}>
                <Image
                  src={src}
                  alt={`Image ${index + 2}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 bg-white bg-opacity-70 p-6 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold mb-2 text-blue-700">Features</h2>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Responsive design</li>
            <li>Image optimization</li>
            <li>SEO-friendly structure</li>
            <li>Accessible navigation</li>
          </ul>
        </section>

        <footer className="flex justify-between items-end bg-white bg-opacity-70 p-4 rounded-lg border border-red-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-lg mr-4"></div>
            <div>
              <h3 className="text-xl font-bold text-blue-800">NextJS Showcase</h3>
              <p className="text-red-600">Image Gallery</p>
            </div>
          </div>
          <p className="text-gray-600">Created with Next.js</p>
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
