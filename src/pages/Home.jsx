import React from "react";
import {
  abidin,
  alfiyah,
  batuLawang,
  facebook,
  ibuSene,
  instagram,
  ipih,
  leonita,
  lmm,
  logo,
  mangrove,
  navMobile,
  nurulFajri,
  ramadhan,
  revi,
  yusrin,
} from "../assets/img";

const Home = () => {
  return (
    <>
      <section className="lg:px-10">
        <nav className="py-5 md:px-10 lg:px-5 lg:block mx-5">
          <div className="bg-blue-400 text-white shadow-md py-2 md:px-10 lg:px-5 rounded-md divNav pb-2 animasi animate-anim-navbar-close">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl">Bantoonusa</h1>
              <div className="lg:flex justify-center items-center gap-20 hidden">
                <div className="text-white-50 flex justify-center items-center gap-10 font-normal m-2 text-xl">
                  <a href="">Home</a>
                  <a href="">Tentang Kami</a>
                  <a href="">Program Kerja</a>
                  <a href="">Team</a>
                </div>
              </div>
              <div className="lg:hidden">
                <img src={navMobile} alt="" className="scale-75 btnNav open" />
              </div>
            </div>
            <div className="text-white flex-col justify-start items-center text-lg mt-5 gap-8 font-normal menuNav hidden">
              <a
                href="#"
                className="transition px-6 py-2 hover:font-medium hover:bg-primary hover:text-white w-full"
              >
                Home
              </a>
              <a
                href="#"
                className="transition px-6 py-2 hover:font-medium hover:bg-primary hover:text-white w-full mx-auto"
              >
                Tentang Kami
              </a>
              <a
                href="#"
                className="transition px-6 py-2 hover:font-medium hover:bg-primary hover:text-white w-full mx-auto"
              >
                Program Kerja
              </a>
              <a
                href="#"
                className="transition px-6 py-2 hover:font-medium hover:bg-primary hover:text-white w-full mx-auto"
              >
                Team
              </a>
            </div>
          </div>
        </nav>

        <div className="px-7 py-2 pb-10 md:px-10 md:py-16 lg:flex justify-center gap-20 items-center md:pt-10 lg:pt-0">
          <div className="">
            <h1 className="font-bold font-patua text-[40px] leading-[50px] lg:leading-normal md:w-[80%] md:text-center md:mx-auto lg:w-full lg:text-start lg:text-5xl text-dark-text lg:mt-10">
              Lintang Nuswantara
            </h1>
            <p className="text-slate-700 mt-3 md:mt-5 md:text-xl lg:w-full lg:text-start">
              Lintang Nuswantara merupakan social start up yang bergerak di
              bidang digital sociopreneur. Lintang Nuswantara berdiri pada
              tanggal 12 Juni 2020 dan saat ini sedang mengembangkan ekosistem
              digital dibidang sosial dan entrepreneur untuk kemaslahatan
              masyarakat.
            </p>
            <div className="flex justify-start items-center gap-3 mt-5">
              <button className="bg-primary py-2 px-8 shadow-lg rounded font-normal text-white gap-3 md:text-lg lg:text-base">
                Selengkapnya..
              </button>
            </div>
          </div>

          <div className="mt-10 mx-auto w-full md:flex justify-center items-center md:mt-14">
            <div className="relative">
              <img
                src={batuLawang}
                alt=""
                className="relative top-0 right-0 z-20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 px-10 pb-5 lg:px-32 lg:flex justify-center items-center gap-5">
        <div className="lg:w-[60%]">
          <h1 className="font-bold font-patua text-[30px] leading-[50px] lg:leading-normal md:w-[80%] md:text-center lg:w-[80%] md:mx-auto lg:mx-0 lg:text-start lg:text-4xl text-dark-text">
            Tentang Kami
          </h1>
          <div className="md:flex justify-center items-start gap-5 lg:block">
            <p className="text-slate-700 mt-3 md:mt-5 md:text-xl lg:w-[80%] lg:text-start md:w-[60%] lg:text-base">
              Lintang Nuswantara saat ini sedang merancang sebuah aplikasi
              mobile dibidang sosial untuk menghubungkan semua orang dan
              menumbuhkan rasa saling bantu kapanpun dan dimanapun. Lintang
              Nuswantara memiliki Sembilan Chief yang saling terintegrasi untuk
              mencapai visi misi yang sudah ditetapkan. Selain itu, Lintang
              Nuswantara juga sebagai Social Start Up membuat program pengabdian
              di suatu daerah dengan nama program Lintang Muda Mengabdi dan
              program sosial lainnya dimana program ini diperuntukkan untuk
              mahasiswa di seluruh Indonesia. Lintang Nuswantara sebagai Social
              Start Up juga membuka kelas-kelas digital dan jasa-jasa yang
              berkaitan dengan teknologi seperti jasa pembuatan website, jasa
              foto produk, jasa pengelolaan sosial media, jasa pemasaran produk
              melalui google ads/intagram ads/facebook ads dan jasa-jasa
              lainnya.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-8 md:flex flex-wrap items-center md:items-stretch gap-5 lg:gap-10 lg:w-[70%]">
          <div className="bg-primary bg-opacity-5 p-7 mb-10 lg:mb-0 md:w-[45%]">
            <div className="flex justify-start items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <p className="font-bold text-base">Visi</p>
            </div>
            <p className="font-normal text-slate-600 mt-4 text-sm leading-relaxed">
              Menumbuhkan rasa saling bantu dimanapun dan kapanpun
            </p>
          </div>
          <div className="bg-primary bg-opacity-5 p-7 mb-10 lg:mb-0 md:w-[45%]">
            <div className="flex justify-start items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <p className="font-bold text-base">Misi</p>
            </div>
            <p className="font-normal text-slate-600 mt-4 text-sm leading-relaxed">
              Membangun pemerataan sosial melalui ekosistem digital
              sosial-entrepreneur
            </p>
          </div>
          <div className="bg-primary bg-opacity-5 p-7 mb-10 lg:mb-0 md:w-[45%]">
            <div className="flex justify-start items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
                />
              </svg>

              <p className="font-bold text-base">Core Value</p>
            </div>
            <p className="font-bold text-base mt-4">BANTOO NUSA</p>
            <p className="font-normal text-slate-600 mt-4 text-sm leading-relaxed">
              Berdaya, Adaptif, Nasionalis, Transparan, Optimis, Orientasi
              Hasil, Nalar, Unggul, Sehat dan Aktif
            </p>
          </div>
        </div>
      </section>

      <section className="px-10 pb-10 lg:pt-20 lg:px-32 md:flex flex-col-reverse justify-start items-start gap-10 lg:flex-row lg:justify-between lg:items-center lg:gap-32">
        <div className="lg:w-[40%] md:mx-auto">
          <div className="rounded-lg">
            <img src={batuLawang} alt="" className="z-20 pt-10" />
          </div>
        </div>
        <div className="mt-5 lg:w-[60%]">
          <h1 className="font-bold font-patua text-[30px] leading-[45px] lg:leading-normal md:w-[80%] md:text-center lg:w-[80%] md:mx-auto lg:mx-0 lg:text-start lg:text-4xl text-dark-text">
            Youth Social Care Camp (YSCC)
          </h1>
          <p className="text-slate-600 mt-3 md:mt-5 md:text-xl lg:w-[80%] lg:text-start lg:text-base md:mx-5 lg:mx-0">
            Program ekspedisi budaya dan pengabdian masyarakat yang
            diselenggarakan oleh Lintang Nuswantara untuk pertama kalinya. Acara
            tersebut dilaksanakan pada tanggal 02-04 April 2021, berlokasi di
            Desa Cupang Kecamatan Gempol Kabupaten Cirebon. Dengan potensi alam
            yang kaya desa ini menjadi lokasi terpilih untuk program YSCC.
          </p>
          <p className="text-slate-600 mt-3 md:mt-5 md:text-xl lg:w-[80%] lg:text-start lg:text-base md:mx-5 lg:mx-0">
            Program YSCC ini berfokus pada pengembangan dan pemberdayaan
            masyarakat serta pengenalan kepada para volunteer tentang budaya dan
            potensi wisata di Kota Cirebon. Luaran dalam kegiatan ini yakni
            membuat poster edukasi, sosialisasi sampah organik dan anorganik
            kepada masyarakat desa Cupang, penanaman mangrove serta
            bersih-bersih bibir pantai pelatihan publik speaking, pelatihan PHB,
            Outing class, mewarnai, tebak gambar, pembuatan pohon impian serta
            pembuatan pojok literasi (perpustakaan alam) dan ditutup dengan
            ekspedisi budaya yang ada di Kota Cirebon diantaranya workshop
            pembuatan gerabah Sitiwinangun, workshop pembuatan batik Trusmi
            serta mengunjungi taman wisata goa Sunyaragi dan keraton Kesepuhan.
          </p>
          <button className="cursor-not-allowed bg-primary py-2 px-8 shadow-lg rounded font-normal text-white gap-3 md:text-lg lg:text-base mt-5">
            Daftar
          </button>
        </div>
      </section>
      <section className="px-10 pb-10 lg:pt-20 lg:px-32 md:flex flex-col-reverse justify-start items-start gap-10 lg:flex-row lg:justify-between lg:items-center lg:gap-32">
        <div className="mt-5 lg:w-[60%]">
          <h1 className="font-bold font-patua text-[30px] leading-[45px] lg:leading-normal md:w-[80%] md:text-center lg:w-[80%] md:mx-auto lg:mx-0 lg:text-start lg:text-4xl text-dark-text">
            IBU SENE
          </h1>
          <p className="text-slate-600 mt-3 md:mt-5 md:text-xl lg:w-[80%] lg:text-start lg:text-base md:mx-5 lg:mx-0">
            Ibu sene adalah seorang lansia yang hidup sebatangkara. Suaminya
            meninggal ketika beliau berusia sekitar lima puluh tahun. Ibu sene
            yang hidup sebatangkara mengidap tumor pada kelopak mata kanannya
            selama bertahun-tahun. Mendapatkan informasi tersebut, tim Lintang
            Nuswantara akhirnya berkunjung ke rumah bu Sene dan beliau
            menyampaikan harapannya agar dapat di operasi. Setelahnya, Tim
            Lintang Nuswantara membuat penggalangan dana untuk biaya operasi
            beliau. Akhirnya pada tanggal 3 Oktober 2021 donasi yang dilakukan
            Lintang Nuswantara telah terkumpul sebesar Rp. 20.100.000,-.
          </p>
          <p className="text-slate-600 mt-3 md:mt-5 md:text-xl lg:w-[80%] lg:text-start lg:text-base md:mx-5 lg:mx-0">
            Kemudian pada tanggal 1 Desember 2021 di rumah sakit Hasan Sadikin
            Bandung, Bu Sene di operasi dan alhamdulilah berjalan dengan lancar.
            Pasca operasi, Lintang Nuswantara menyalurkan bantuan pasca operasi
            untuk biaya perawatan sebesar Rp. 700.000,- dan sampai artikel ini
            di buat, beliau dalam keadaan sehat dan tidak merasakan sakit lagi
            di matanya. Terimakasih orang baik.
          </p>
          <button className="cursor-not-allowed bg-primary py-2 px-8 shadow-lg rounded font-normal text-white gap-3 md:text-lg lg:text-base mt-5">
            Daftar
          </button>
        </div>
        <div className="lg:w-[40%] md:mx-auto">
          <div className="rounded-lg">
            <img src={ibuSene} alt="" className="z-20 pt-10" />
          </div>
        </div>
      </section>
      <section className="px-10 pb-10 lg:pt-20 lg:px-32 md:flex flex-col-reverse justify-start items-start gap-10 lg:flex-row lg:justify-between lg:items-center lg:gap-32">
        <div className="lg:w-[40%] md:mx-auto">
          <div className="rounded-lg">
            <img src={lmm} alt="" className="z-20 pt-10" />
          </div>
        </div>
        <div className="mt-5 lg:w-[60%]">
          <h1 className="font-bold font-patua text-[30px] leading-[45px] lg:leading-normal md:w-[80%] md:text-center lg:w-[80%] md:mx-auto lg:mx-0 lg:text-start lg:text-4xl text-dark-text">
            LMM
          </h1>
          <p className="text-slate-600 mt-3 md:mt-5 md:text-xl lg:w-[80%] lg:text-start lg:text-base md:mx-5 lg:mx-0">
            Lintang Muda Mengabdi (LMM) adalah program kerja tahunan yang
            diadakan untuk melakukan pengabdian terhadap masyarakat yang
            sebelumnya bernama YSCC. LMM pada tahun 2022 mengadopsi tema “The
            Exotic Sundaland” yang berbasis Community Local Tourism. LMM
            diadakan pada tanggal 25 Juni – 02 Juli 2022 di Desa Cipasung
            Kecamatan Lemahsugih Kabupaten Majalengka, Jawa Barat. Divisi pada
            kegiatan LMM terbagi atas 5 divisi yakni, (1) Pendidikan dan
            Kebudayaan, (2) Ekonomi Kreatif dan Pariwisata, (3) Kesehatan
            Masyarakat, (4) Sosial dan Lingkungan, (5) Publikasi dan
            Dokumentasi. Dan dari awal sampai dengan akhir program LMM dapat
            berjalan dengan baik dan memberikan dampak positif terhadap lokasi
            pengabdian, masyarakat sekitar dan volunteer LMM.
          </p>
          <button className="cursor-not-allowed bg-primary py-2 px-8 shadow-lg rounded font-normal text-white gap-3 md:text-lg lg:text-base mt-5">
            Daftar
          </button>
        </div>
      </section>
      <section className="px-10 pb-10 lg:pt-20 lg:px-32 md:flex flex-col-reverse justify-start items-start gap-10 lg:flex-row lg:justify-between lg:items-center lg:gap-32">
        <div className="mt-5 lg:w-[60%]">
          <h1 className="font-bold font-patua text-[30px] leading-[45px] lg:leading-normal md:w-[80%] md:text-center lg:w-[80%] md:mx-auto lg:mx-0 lg:text-start lg:text-4xl text-dark-text">
            MANGROVE
          </h1>
          <p className="text-slate-600 mt-3 md:mt-5 md:text-xl lg:w-[80%] lg:text-start lg:text-base md:mx-5 lg:mx-0">
            Tim Lintang Nuswantara berkolaborasi dengan NGO Grow Up Institute
            dalam rangka melakukan kegiatan dalam bidang lingkungan dengan
            melakukan penanaman mangrove. Penanaman mangrove tersebut dilakukan
            di Desa Ambulu kecamatan Losari Kabupaten Cirebon, Jawa Barat.
            Kegiatan ini dilakukan atas kerjasama GUI dengan CSR PT. Telkom dan
            Lintang Nuswantara sebagai penyedia sumber daya manusia pada setiap
            kegiatan penanaman mangrove. Kerjasama antara ketiga lembaga ini
            berjalan selama 2 tahun dengan target penanaman bibit sebanyak
            15.000 bibit mangrove.
          </p>
          <button className="cursor-not-allowed bg-primary py-2 px-8 shadow-lg rounded font-normal text-white gap-3 md:text-lg lg:text-base mt-5">
            Daftar
          </button>
        </div>
        <div className="lg:w-[40%] md:mx-auto">
          <div className="rounded-lg">
            <img src={mangrove} alt="" className="z-20 pt-10" />
          </div>
        </div>
      </section>
      <section className="px-10 pb-10 lg:pt-20 lg:px-32 md:flex flex-col-reverse justify-start items-start gap-10 lg:flex-row lg:justify-between lg:items-center lg:gap-32">
        <div className="lg:w-[40%] md:mx-auto">
          <div className="rounded-lg">
            <img src={ramadhan} alt="" className="z-20 pt-10" />
          </div>
        </div>
        <div className="mt-5 lg:w-[60%]">
          <h1 className="font-bold font-patua text-[30px] leading-[45px] lg:leading-normal md:w-[80%] md:text-center lg:w-[80%] md:mx-auto lg:mx-0 lg:text-start lg:text-4xl text-dark-text">
            RAMADHAN BERBAGI
          </h1>
          <p className="text-slate-600 mt-3 md:mt-5 md:text-xl lg:w-[80%] lg:text-start lg:text-base md:mx-5 lg:mx-0">
            Lintang Nuswantara berkolaborasi dengan kitabisa.com dalam membuat
            kegiatan “Ramadhan berbagi” dalam rangka menyambut bulan Ramadhan.
            Agenda tersebut yakni “warteg bisa makan” dan “mobil bisa makan”
            dengan membagikan sekitar 700 box nasi kotak untuk berbuka puasa
            pada beberapa lokasi di Kota dan Kabupaten Cirebon. Selain kegiatan
            tersebut, Tim Lintang Nuswantara juga melakukan kunjungan kepaa anak
            yatim dan kaum Dhuafa di daerah Kedawung. Program ini berjalan
            sukses dan lancar.
          </p>
          <button className="cursor-not-allowed bg-primary py-2 px-8 shadow-lg rounded font-normal text-white gap-3 md:text-lg lg:text-base mt-5">
            Daftar
          </button>
        </div>
      </section>

      <section className="pb-10 lg:px-32 bg-primary bg-opacity-20 px-5">
        <div className="px-5 py-10">
          <h1 className="font-bold font-patua text-[30px] leading-[50px] lg:leading-normal md:w-[50%] md:text-center lg:w-[50%] md:mx-auto lg:mx-auto lg:text-center lg:text-4xl text-dark-text text-center">
            Tim
          </h1>
        </div>
        <div className="md:grid grid-cols-2 gap-5 md:mx-10 lg:grid-cols-3 lg:gap-5 justify-items-center place-items-center mb-5">
          <div></div>
          <div className="p-10 mb-5 md:mb-0 bg-white rounded-lg shadow-xl relative z-10 lg:w-[100%]">
            <div className="z-20">
              <div className="md:flex justify-between items-center">
                <div className="flex justify-start gap-5 items-center">
                  <img src={abidin} className="w-32 rounded-full" />
                  <div>
                    <h1 className="font-bold text-xl">Abidin</h1>
                    <p className="text-slate-600 my-1">
                      Chief Executive Officer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-5 md:mx-10 lg:grid-cols-3 lg:gap-5 justify-items-center place-items-start">
          <div className="p-10 mb-5 md:mb-0 bg-white rounded-lg shadow-xl relative z-10 lg:w-[100%]">
            <div className="z-20">
              <div className="md:flex justify-between items-center">
                <div className="flex justify-start gap-5 items-center">
                  <img src={ipih} className="w-32 rounded-full" alt="" />
                  <div>
                    <h1 className="font-bold text-xl">Ipih Safitri</h1>
                    <p className="text-slate-600 my-1">Chief Finance Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 mb-5 md:mb-0 bg-white rounded-lg shadow-xl relative z-10 lg:w-[100%]">
            <div className="z-20">
              <div className="md:flex justify-between items-center">
                <div className="flex justify-start gap-5 items-center">
                  <img src={revi} alt="" className="w-32 rounded-full" />
                  <div>
                    <h1 className="font-bold text-xl">Revi Dwi Lestari</h1>
                    <p className="text-slate-600 my-1">
                      Chief Operating Officer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 mb-5 md:mb-0 bg-white rounded-lg shadow-xl relative z-10 lg:w-[100%]">
            <div className="z-20">
              <div className="md:flex justify-between items-center">
                <div className="flex justify-start gap-5 items-center">
                  <img src={nurulFajri} className="w-32 rounded-full" alt="" />
                  <div>
                    <h1 className="font-bold text-xl">Nurul Fajri</h1>
                    <p className="text-slate-600 my-1">
                      Chief Communications Officer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 mb-5 md:mb-0 bg-white rounded-lg shadow-xl relative z-10 lg:w-[100%]">
            <div className="z-20">
              <div className="md:flex justify-between items-center">
                <div className="flex justify-start gap-5 items-center">
                  <img src={alfiyah} className="w-32 rounded-full" alt="" />
                  <div>
                    <h1 className="font-bold text-xl">Alfiyah Makarim</h1>
                    <p className="text-slate-600 my-1">Chief Product Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 mb-5 md:mb-0 bg-white rounded-lg shadow-xl relative z-10 lg:w-[100%]">
            <div className="z-20">
              <div className="md:flex justify-between items-center">
                <div className="flex justify-start gap-5 items-center">
                  <img src={leonita} alt="" className="w-32 rounded-full" />
                  <div>
                    <h1 className="font-bold text-xl">Leonita</h1>
                    <p className="text-slate-600 my-1">
                      Chief Happines Officer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 mb-5 md:mb-0 bg-white rounded-lg shadow-xl relative z-10 lg:w-[100%]">
            <div className="z-20">
              <div className="md:flex justify-between items-center">
                <div className="flex justify-start gap-5 items-center">
                  <img src={yusrin} className="w-32 rounded-full" alt="" />
                  <div>
                    <h1 className="font-bold text-xl">Yusrini Firdaningsih</h1>
                    <p className="text-slate-600 my-1">Social Media Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white md:flex items-start justify-around mx-10 mb-8 gap-10 lg:mt-10">
        <div className="text-slate-500 md:w-[80%] lg:w-[30%]">
          <div className="flex justify-start items-center gap-3 mb-5">
            <img src={logo} className="w-48" alt="" />
            <h1 className="font-bold text-2xl text-slate-900">Bantoonusa</h1>
          </div>
        </div>
        <div className="mt-8 md:mt-0 flex flex-col gap-2 text-slate-500 font-medium">
          <h1 className="font-semibold text-lg mb-2 text-slate-900">
            Tetep Terhubung di sosial media berikut:
          </h1>
          <div className="flex justify-start gap-2 mt-3 items-center">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
