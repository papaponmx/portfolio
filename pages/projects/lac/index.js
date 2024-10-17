import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { CheckSquare } from "lucide-react";

const ImageFrame = ({ src, alt }) => (
  <div
    className="w-full h-0 pb-[216.5%] bg-no-repeat bg-cover bg-center rounded-lg"
    style={{ backgroundImage: `url(${src})` }}
    role="img"
    aria-label={alt}
  />
);

const Home = ({ images }) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-red-100 text-gray-800 font-sans">
      <Head>
        <title>Intuit Dome Suite Ordering Platform | LA Clippers</title>
        <meta
          name="description"
          content="Seamless suite service ordering for LA Clippers' Intuit Dome. User-friendly web view for food and beverage orders during events."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Intuit Dome Suite Ordering Platform | LA Clippers"
        />
        <meta
          property="og:description"
          content="Seamless suite service ordering for LA Clippers' Intuit Dome. User-friendly web view for food and beverage orders during events."
        />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:url" content="https://intuitdome.laclippers.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Intuit Dome Suite Ordering Platform | LA Clippers"
        />
        <meta
          name="twitter:description"
          content="Seamless suite service ordering for LA Clippers' Intuit Dome. User-friendly web view for food and beverage orders during events."
        />
        <meta name="twitter:image" content="/thumbnail.png" />
        <link rel="canonical" href="https://intuitdome.laclippers.com" />
      </Head>

      <nav className="bg-blue-600 p-4">
        <ul className="flex justify-center space-x-4 max-w-6xl mx-auto">
          <li>
            <Link href="/">
              <a className="text-white hover:text-red-200 font-medium">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-white hover:text-red-200 font-medium">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-white hover:text-red-200 font-medium">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <main className="p-8 max-w-4xl mx-auto text-center">
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-800">
            Reinventing LA Clippers Online Food Odering System
          </h1>
          <p className="text-xl mb-6 text-red-700 font-semibold">
            Streamlined food and beverage ordering for LA Clippers&apos; premium
            suite guests
          </p>
          <p className="text-lg text-gray-800 mx-auto max-w-2xl">
            Discover how we transformed suite service at the LA Clippers&apos;
            Intuit Dome, enabling premium guests to effortlessly order food and
            beverages from a single, sleek interface.
          </p>
          <br />
          <p className="text-lg text-gray-800 mx-auto max-w-2xl">
            Built with React and AWS, this solution was designed to enhance the
            luxury experience while ensuring efficiency and reliability. Our
            team delivered a fully functional MVP in just three weeks, setting a
            new standard for in-event service.
          </p>
        </header>

        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
            {images.map((src, index) => (
              <div key={index} className="w-full max-w-sm mx-auto">
                <ImageFrame
                  src={src}
                  alt={`Intuit Dome Suite Ordering Platform screenshot ${index + 1
                    }`}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Key Metrics</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">
              Estimated Improvements Checklist
            </h3>

            <h4 className="text-xl font-semibold mb-2 text-blue-700">
              For the Stadium (User Experience):
            </h4>
            <ul className="list-none text-left mb-6">
              <li className="flex items-center py-2">
                <CheckSquare className="text-blue-600 w-5 h-5 mr-2" />
                <span>
                  Estimated 20-40% increase in user engagement due to a
                  streamlined ordering process.
                </span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-blue-600 w-5 h-5 mr-2" />
                <span>
                  Estimated 40-50% reduction in task completion time for placing
                  orders, thanks to the single-page interface.
                </span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-blue-600 w-5 h-5 mr-2" />
                <span>
                  Estimated 15-25% reduction in bounce rate by improving ease of
                  use and reducing page loads.
                </span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-blue-600 w-5 h-5 mr-2" />
                <span>
                  Estimated 10-20% increase in order completion rates, driven by
                  the efficient ordering system.
                </span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-blue-600 w-5 h-5 mr-2" />
                <span>
                  Estimated 30-50% increase in mobile user satisfaction due to a
                  responsive design.
                </span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-blue-600 w-5 h-5 mr-2" />
                <span>
                  Estimated 10-15% increase in repeat usage by delivering a
                  positive user experience.
                </span>
              </li>
            </ul>

            <h4 className="text-xl font-semibold mb-2 text-blue-700">
              For the Food Service Company (Operational Efficiency):
            </h4>
            <ul className="list-none text-left mb-6">
              <li className="flex items-center py-2">
                <CheckSquare className="text-blue-600 w-5 h-5 mr-2" />
                <span>
                  Estimated 20-30% reduction in server load by consolidating
                  page loads and using React for dynamic updates.
                </span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-blue-600 w-5 h-5 mr-2" />
                <span>
                  Estimated 25-35% reduction in staff training time, thanks to a
                  simplified, intuitive interface.
                </span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-blue-600 w-5 h-5 mr-2" />
                <span>
                  Estimated 15-25% improvement in order accuracy due to reduced
                  manual input errors.
                </span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-blue-600 w-5 h-5 mr-2" />
                <span>
                  Estimated 10-20% faster delivery times with improved order
                  processing efficiency.
                </span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-blue-600 w-5 h-5 mr-2" />
                <span>
                  Estimated 15-20% increase in customer satisfaction ratings due
                  to improved service delivery.
                </span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-blue-600 w-5 h-5 mr-2" />
                <span>
                  Potential 10-15% reduction in operational costs from
                  streamlined processes and reduced resource waste.
                </span>
              </li>
            </ul>

            <h4 className="text-xl font-semibold mb-2 text-blue-700">
              Estimated Gross Value and Client Reach:
            </h4>
            <ul className="list-none text-left mb-6">
              <li className="flex items-center py-2">
                <CheckSquare className="text-blue-600 w-5 h-5 mr-2" />
                <span>
                  Estimated $2-5 million in gross value enabled annually by the
                  suite ordering platform.
                </span>
              </li>
              <li className="flex items-center py-2">
                <CheckSquare className="text-blue-600 w-5 h-5 mr-2" />
                <span>
                  Estimated 50,000-100,000 premium guests served annually
                  through the platform.
                </span>
              </li>
            </ul>

            <p className="text-sm text-gray-600 text-center mt-6">
              *Please note: These metrics are estimated and cannot be precisely
              measured at this time, as the stadium is brand new. They are based
              on industry benchmarks and expected improvements from similar
              implementations.
            </p>
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
              <p className="text-blue-600 font-medium">
                Full Stack Developer & User Experience Innovator
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <a
                href="mailto:jaime.rios@hey.com"
                className="mb-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out flex items-center"
              >
                Get in Touch
              </a>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/papaponmx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                >
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/jaime-rios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                >
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="https://twitter.com/your_twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                >
                  <Image
                    src="/twitter.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="relative mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
            © {currentYear} Jaime Rios. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const images = [
    "/shots/shots1.png",
    "/shots/shots2.png",
    "/shots/shots3.png",
    "/shots/shots4.png",
    "/shots/shots5.png",
    "/shots/shots6.png",
    "/shots/shots7.png",
    "/shots/shots8.png",
  ];

  return {
    props: {
      images,
    },
  };
}

export default Home;
