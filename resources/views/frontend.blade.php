<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Judul SEO -->
    <title>Akademi Keperawatan Justitia Palu - Pendidikan Keperawatan Berkualitas</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('assets/image/logo-universitas.jpeg') }}">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">


    <!-- Meta Description -->
    <meta name="description" content="Akademi Keperawatan Justitia Palu menyediakan pendidikan keperawatan profesional dengan dosen berpengalaman, fasilitas lengkap, dan peluang karier di dunia kesehatan.">

    <!-- Meta Keywords (opsional) -->
    <meta name="keywords" content="Akademi Keperawatan Justitia, Akper Palu, Pendidikan Keperawatan, Kampus Keperawatan, Kuliah Keperawatan Sulawesi Tengah, Justitia Palu">

    <!-- Author -->
    <meta name="author" content="Akademi Keperawatan Justitia Palu">

    <!-- Open Graph (Facebook, WhatsApp, LinkedIn) -->
    <meta property="og:title" content="Akademi Keperawatan Justitia Palu">
    <meta property="og:description" content="Kampus keperawatan dengan kurikulum relevan, tenaga pendidik profesional, dan fasilitas modern.">
    <meta property="og:image" content="{{ asset('assets/image/logo-universitas.jpeg') }}">
    <meta property="og:url" content="https://akperjustitia.ac.id">
    <meta property="og:type" content="website">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Akademi Keperawatan Justitia Palu">
    <meta name="twitter:description" content="Pendidikan keperawatan profesional untuk mencetak tenaga kesehatan berkualitas.">
    <meta name="twitter:image" content="{{ asset('assets/image/logo-universitas.jpeg') }}">

    <!-- Structured Data (Schema.org JSON-LD) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      "name": "Akademi Keperawatan Justitia Palu",
      "alternateName": "Akper Justitia",
      "url": "https://akperjustitia.ac.id",
      "logo": "{{ asset('assets/image/logo-universitas.jpeg') }}",
      "sameAs": [
        "https://facebook.com/akperjustitia",
        "https://instagram.com/akperjustitia"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Contoh No. 123",
        "addressLocality": "Palu",
        "addressRegion": "Sulawesi Tengah",
        "postalCode": "94111",
        "addressCountry": "ID"
      }
    }
    </script>
</head>
<body>
    @viteReactRefresh
    @vite('resources/js/index.jsx')
    <div id="frontend-app"></div>
</body>
</html>
