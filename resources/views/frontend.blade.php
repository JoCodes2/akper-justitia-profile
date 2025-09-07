<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Judul SEO -->
    <title>Akademi Keperawatan Justitia - Pendidikan Keperawatan Berkualitas</title>

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="https://akperjustitia.ac.id/assets/image/logo-universitas.png" sizes="32x32">

    <!-- Google Fonts dengan preload -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

    <script>
        let appUrl = '{{ env('APP_URL') }}';
    </script>

    <!-- Meta SEO Dasar -->
    <meta name="description" content="Akademi Keperawatan Justitia (Akper Justitia atau Akpe Justitia) menyediakan pendidikan keperawatan profesional dengan dosen berpengalaman, fasilitas lengkap, dan peluang karier di dunia kesehatan.">
    <meta name="keywords" content="Akademi Keperawatan Justitia, Akper Justitia, Akpe Justitia, Pendidikan Keperawatan, Kampus Keperawatan, Kuliah Keperawatan Palu, Kuliah Keperawatan Sulawesi Tengah, Justitia">
    <meta name="author" content="Akademi Keperawatan Justitia">

    <!-- Canonical URL -->
    <link rel="canonical" href="https://akperjustitia.ac.id" />

    <!-- Structured Data (Schema.org JSON-LD) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      "name": "Akademi Keperawatan Justitia",
      "alternateName": ["Akper Justitia", "Akpe Justitia"],
      "url": "https://akperjustitia.ac.id",
      "logo": "https://akperjustitia.ac.id/assets/image/logo-universitas.png",
      "email": "Akperjustitia@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Uwe Lambori, Tondo, Kec. Mantikulore",
        "addressLocality": "Palu",
        "addressRegion": "Sulawesi Tengah",
        "postalCode": "94148",
        "addressCountry": "ID"
      },
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+62 852-9884-5213",
        "contactType": "customer service",
        "areaServed": "ID",
        "availableLanguage": ["Indonesian","English"]
      }]
    }
    </script>
</head>
<body>
    <!-- Fallback content untuk SEO -->
    <noscript>
        <div style="padding: 20px; text-align: center; font-family: Poppins, sans-serif;">
            <h1>Akademi Keperawatan Justitia</h1>
            <p>Pendidikan keperawatan profesional dengan dosen berpengalaman, fasilitas lengkap, dan peluang karier di dunia kesehatan.</p>
            <p>Alamat: Jl. Uwe Lambori, Tondo, Kec. Mantikulore, Palu, Sulawesi Tengah 94148</p>
            <p>Telepon: +62 852-9884-5213 | Email: Akperjustitia@gmail.com</p>
        </div>
    </noscript>

    @viteReactRefresh
    @vite('resources/js/index.jsx')
    <div id="frontend-app"></div>
</body>
</html>

