import WebLinks from '../components/WebLinks';
import Seo from '../components/Seo';
import seoData from '../next-seo.config';

export default function Home() {
  const page = {
    title: "Jaime Rios - Full Stack Developer",
    excerpt: 'Full Stack Developer with extensive experience in Front End technologies',
    slug: '/',
    coverImage: '/avatar.png' // Update this with your actual image path
  };

  return (
    <>
      <Seo page={page} />
      <WebLinks />
    </>
  )
}