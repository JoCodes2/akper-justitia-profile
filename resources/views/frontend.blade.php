<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Judul SEO -->
    <title>Akademi Keperawatan Justitia - Pendidikan Keperawatan Berkualitas</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('assets/image/logo-universitas.png') }}">

    <!-- Google Fonts dengan preload -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <script>
        let appUrl = '{{ env('APP_URL') }}';
    </script>

    <!-- Meta Description -->
    <meta name="description" content="Akademi Keperawatan Justitia menyediakan pendidikan keperawatan profesional dengan dosen berpengalaman, fasilitas lengkap, dan peluang karier di dunia kesehatan.">

    <!-- Canonical URL -->
    <link rel="canonical" href="https://akperjustitia.ac.id" />

    <!-- Meta Keywords (opsional) -->
    <meta name="keywords" content="Akademi Keperawatan Justitia, Akper Palu, Pendidikan Keperawatan, Kampus Keperawatan, Kuliah Keperawatan Sulawesi Tengah, Justitia">

    <!-- Author -->
    <meta name="author" content="Akademi Keperawatan Justitia">

    <!-- Open Graph (Facebook, WhatsApp, LinkedIn) -->
    <meta property="og:title" content="Akademi Keperawatan Justitia">
    <meta property="og:description" content="Kampus keperawatan dengan kurikulum relevan, tenaga pendidik profesional, dan fasilitas modern.">
    <meta property="og:image" content="{{ asset('assets/image/logo-universitas.png') }}">
    <meta property="og:image:alt" content="Logo Akademi Keperawatan Justitia">
    <meta property="og:url" content="https://akperjustitia.acid">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Akademi Keperawatan Justitia">
    <meta property="og:locale" content="id_ID">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Akademi Keperawatan Justitia">
    <meta name="twitter:description" content="Pendidikan keperawatan profesional untuk mencetak tenaga kesehatan berkualitas.">
    <meta name="twitter:image" content="{{ asset('assets/image/logo-universitas.png') }}">
    <meta name="twitter:image:alt" content="Logo Akademi Keperawatan Justitia">
    <meta name="twitter:site" content="@akperjustitia">

    <!-- Structured Data (Schema.org JSON-LD) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "name": "Akademi Keperawatan Justitia",
  "alternateName": "Akper Justitia",
  "url": "https://akperjustitia.ac.id",
  "logo": "{{ asset('assets/image/logo-universitas.png') }}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Uwe Lambori, Tondo, Kec. Mantikulore",
    "addressLocality": "Palu",
    "addressRegion": "Sulawesi Tengah",
    "postalCode": "94148",
    "addressCountry": "ID"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62 852-9884-5213",
    "contactType": "customer service",
    "areaServed": "ID",
    "availableLanguage": ["Indonesian", "English"]
  }
}
</script>


    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

</head>
<body>
    <!-- Fallback content for SEO -->
    <noscript>
        <div style="padding: 20px; text-align: center; font-family: Poppins, sans-serif;">
            <h1>Akademi Keperawatan Justitia</h1>
            <p>Pendidikan keperawatan profesional dengan dosen berpengalaman, fasilitas lengkap, dan peluang karier di dunia kesehatan.</p>
            <p>JavaScript dinonaktifkan. Untuk pengalaman terbaik, harap aktifkan JavaScript.</p>
            <p>Alamat: Jl. Uwe Lambori, Tondo, Kec. Mantikulore, Palu, Sulawesi Tengah 94148</p>
            <p>Telepon: +62 852-9884-5213 | Email: Akperjustitia@gmail.com</p>
        </div>
    </noscript>
    @viteReactRefresh
    @vite('resources/js/index.jsx')
    <div id="frontend-app"></div>


</body>
</html>
