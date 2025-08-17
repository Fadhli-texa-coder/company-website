// Toggle menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  // Tutup menu saat link diklik
  menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); })
  );
}

// Tahun dinamis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// (Opsional) smooth scroll offset header
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top:y, behavior:'smooth' });
  });
});

console.log('UI responsif + mobile menu aktif ✅');

<script>
    // Tahun otomatis & smooth anchor
    document.getElementById('y').textContent = new Date().getFullYear();
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const id=a.getAttribute('href');if(id.length>1){e.preventDefault();document.querySelector(id)?.scrollIntoView({behavior:'smooth'});}
      });
    });
  </script>

  <!-- JSON-LD: LocalBusiness + FAQPage -->
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@graph":[
      {
        "@type":"Plumber",
        "name":"CV Karya Utama Solusi",
        "image":"https://contoh-domain-anda.com/logo.png",
        "url":"https://contoh-domain-anda.com/",
        "telephone":"+62-811-1001-2523",
        "areaServed":"Bogor",
        "description":"Sedot WC & Atasi Saluran Mampet 24 Jam area Bogor. Cepat, rapi, bergaransi.",
        "address":{"@type":"PostalAddress","addressRegion":"Jawa Barat","addressLocality":"Bogor","addressCountry":"ID"},
        "openingHours":"Mo-Su 00:00-23:59",
        "priceRange":"Rp"
      },
      {
        "@type":"FAQPage",
        "mainEntity":[
          {"@type":"Question","name":"Berapa lama teknisi tiba?","acceptedAnswer":{"@type":"Answer","text":"Umumnya 30–60 menit tergantung lokasi & lalu lintas."}},
          {"@type":"Question","name":"Apakah ada garansi?","acceptedAnswer":{"@type":"Answer","text":"Ada. Jika keluhan kembali dalam masa garansi, kami tindak lanjuti tanpa biaya jasa."}},
          {"@type":"Question","name":"Metode pembayaran?","acceptedAnswer":{"@type":"Answer","text":"Cash atau transfer. Nota & dokumentasi tersedia."}},
          {"@type":"Question","name":"Layanan 24 jam?","acceptedAnswer":{"@type":"Answer","text":"Ya, siaga 24/7 untuk keadaan darurat."}}
        ]
      }
    ]
  }
  </script>
