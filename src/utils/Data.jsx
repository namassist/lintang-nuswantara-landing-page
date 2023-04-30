import {
  landingPage,
  companyProfile,
  ecommerce,
  blog,
  school,
  wedding,
} from "../assets/img";

const features = [
  {
    id: 1,
    title: "Keahlian",
    desc: "Tim kami terdiri dari para ahli dan profesional di bidang pembuatan website yang telah berpengalaman dalam melayani berbagai jenis bisnis dari berbagai industri.",
  },
  {
    id: 2,
    title: "Desain Kreatif",
    desc: "Kami dapat memberikan desain website yang kreatif dan unik, sehingga website bisnis Anda dapat tampil menarik dan memikat perhatian pengunjung.",
  },
  {
    id: 3,
    title: "Professional",
    desc: "Kami selalu memberikan pelayanan yang professional dan responsif dalam melayani kebutuhan pembuatan website bisnis Anda.",
  },
  {
    id: 4,
    title: "Customizable",
    desc: "Kami dapat membuat website yang dapat disesuaikan dengan kebutuhan dan preferensi bisnis Anda, sehingga website yang dibuat benar-benar unik dan berbeda dari pesaing.",
  },
  {
    id: 5,
    title: "Harga Terjangkau",
    desc: "Kami dapat membuat website yang dapat disesuaikan dengan kebutuhan dan preferensi bisnis Anda, sehingga website yang dibuat benar-benar unik dan berbeda dari pesaing.",
  },
  {
    id: 6,
    title: "Support",
    desc: "Kami menyediakan dukungan purna jual yang memadai, termasuk pemeliharaan website, update, dan perbaikan jika diperlukan, sehingga website bisnis Anda tetap berjalan dengan baik dan terus berkembang.",
  },
];

const types = [
  {
    id: 1,
    img: landingPage,
    title: "Landing Page",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo similique vel, reprehenderit at reiciendis officiis quae hic quam quibusdam sint.",
  },
  {
    id: 2,
    img: companyProfile,
    title: "Company Profile",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo similique vel, reprehenderit at reiciendis officiis quae hic quam quibusdam sint.",
  },
  {
    id: 3,
    img: blog,
    title: "Blog Pribadi",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo similique vel, reprehenderit at reiciendis officiis quae hic quam quibusdam sint.",
  },
  {
    id: 4,
    img: school,
    title: "Sekolah",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo similique vel, reprehenderit at reiciendis officiis quae hic quam quibusdam sint.",
  },
  {
    id: 5,
    img: ecommerce,
    title: "Toko Online",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo similique vel, reprehenderit at reiciendis officiis quae hic quam quibusdam sint.",
  },
  {
    id: 6,
    img: wedding,
    title: "Undangan Pernikahan",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo similique vel, reprehenderit at reiciendis officiis quae hic quam quibusdam sint.",
  },
];

const packets = [
  {
    id: 1,
    title: "Basic",
    price: "1.499k",
    benefits: [
      { name: "1-3 Halaman statis", available: "yes" },
      { name: "desain sesuai permintaan", available: "yes" },
      { name: "website responsif", available: "yes" },
      { name: "free SSL", available: "yes" },
      { name: "500mb SSD disk space", available: "yes" },
      { name: "unlimited database", available: "no" },
      { name: "akses Cpanel", available: "y/n" },
      { name: "revisi 1x", available: "y/n" },
      { name: "gratis domain .com", available: "y/n" },
      { name: "maintenance", available: "no" },
      { name: "testing", available: "no" },
      { name: "akun admin website", available: "no" },
      { name: "file desain website", available: "no" },
    ],
  },
  {
    id: 2,
    title: "Professional",
    price: "3.500k",
    benefits: [
      { name: "maksimal 7 halaman dinamis", available: "yes" },
      { name: "desain sesuai permintaan", available: "yes" },
      { name: "website responsif", available: "yes" },
      { name: "free SSL", available: "yes" },
      { name: "unlimited SSD disk space", available: "yes" },
      { name: "unlimited database", available: "yes" },
      { name: "akses hosting", available: "yes" },
      { name: "revisi 2x", available: "yes" },
      { name: "gratis domain hingga 200k", available: "y/n" },
      { name: "maintenance (1 bulan pertama)", available: "y/n" },
      { name: "testing", available: "y/n" },
      { name: "akun admin website", available: "yes" },
      { name: "file desain website", available: "no" },
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    price: "7.000k",
    benefits: [
      { name: "maksimal 15 halaman dinamis", available: "yes" },
      { name: "professional web desain", available: "yes" },
      { name: "website responsif", available: "yes" },
      { name: "free SSL", available: "yes" },
      { name: "unlimited SSD disk space", available: "yes" },
      { name: "unlimited database", available: "yes" },
      { name: "akses hosting", available: "yes" },
      { name: "revisi 3x", available: "yes" },
      { name: "gratis domain hingga 300k", available: "yes" },
      { name: "maintenance (3 bulan pertama)", available: "yes" },
      { name: "testing", available: "yes" },
      { name: "akun admin website", available: "yes" },
      { name: "file desain website", available: "yes" },
    ],
  },
];

export { features, types, packets };
