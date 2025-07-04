// // components/Seo.js
// import Head from 'next/head';

// export default function Seo({ title, description, keywords }) {
//   return (
//     <Head>
//       <title>{title ? `${title} | Boosst Query` : 'Boosst Query'}</title>
//       <meta name="description" content={description || 'Top website development & SEO agency.'} />
//       <meta name="keywords" content={keywords || 'web development, SEO, digital marketing'} />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <meta charSet="utf-8" />
//       <link rel="icon" href="/favicon.ico" />
//     </Head>
//   );
// }


// components/Seo.js
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Seo({
  title = 'Boosst Query',
  description = 'Top website development & SEO agency.',
  keywords = 'web development, SEO, digital marketing, Boosst Query',
  image = '/images/boostquery-og.png',
  type = 'website',
  schemaType = 'Organization',
  publishedTime,
  modifiedTime,
  schemaData = {},
}) {
  const router = useRouter();
  const canonical = `https://www.boosstquery.com${router.asPath === '/' ? '' : router.asPath}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: "Boosst Query",
    url: canonical,
    logo: "https://www.boosstquery.com/images/boostquery-logo.svg",
    ...(schemaType === 'WebPage' && {
      headline: title,
      description,
      url: canonical,
      image: `https://www.boosstquery.com${image}`,
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
    }),
    ...schemaData,
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title} | Boosst Query</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://www.boosstquery.com${image}`} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Boosst Query" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://www.boosstquery.com${image}`} />

      {/* Schema (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Head>
  );
}
