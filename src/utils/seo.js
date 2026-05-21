export const updateMetaTags = (title, description, keywords, ogImage = '') => {
  document.title = title;

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = description;

  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.content = keywords;

  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.content = title;

  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (!ogDescription) {
    ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescription);
  }
  ogDescription.content = description;

  if (ogImage) {
    let ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (!ogImageMeta) {
      ogImageMeta = document.createElement('meta');
      ogImageMeta.setAttribute('property', 'og:image');
      document.head.appendChild(ogImageMeta);
    }
    ogImageMeta.content = ogImage;
  }
};

export const addStructuredData = (data) => {
  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

export const businessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Reza Rent Car Semarang',
  'image': '/images/heroimage.png',
  'description': 'Sewa mobil Hiace Semarang terpercaya dengan harga terjangkau. Layanan 24/7, mobil terawat, dan proses booking mudah.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Perusahaan Rowosari Megah Asri 1 Blok F No 3',
    'addressLocality': 'Semarang',
    'addressRegion': 'Jawa Tengah',
    'postalCode': '50271',
    'addressCountry': 'ID'
  },
  'telephone': '+62-xxx-xxxx-xxxx',
  'url': 'https://rezarentcar.com',
  'priceRange': '$$',
  'areaServed': 'Semarang',
  'serviceType': 'Car Rental'
};

export const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Berapa harga sewa mobil Hiace di Semarang?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Harga sewa mobil Hiace Semarang bervariasi tergantung durasi sewa dan kebutuhan Anda. Hubungi kami via WhatsApp untuk penawaran terbaik.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Apakah tersedia layanan 24 jam?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Ya, kami menyediakan layanan sewa mobil 24/7 melalui WhatsApp untuk kemudahan Anda.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Apa saja persyaratan untuk menyewa mobil?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Persyaratan umum adalah KTP, SIM, dan data diri yang lengkap. Hubungi kami untuk detail lengkapnya.'
      }
    }
  ]
};
