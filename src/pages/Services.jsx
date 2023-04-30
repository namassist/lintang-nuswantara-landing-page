// assets image
import { ilustration } from "../assets/img";

// demo data
import { features, types, packets } from "../utils/Data";

const Services = () => {
  return (
    <>
      <section className="hero-wrapper bg-gradient-to-r from-[#0500FF] via-[#F8FB76] to-[#4EFF75]">
        <div className="lg:px-36 bg-[#F6FAFF] bg-opacity-90 backdrop-blur-[125px] px-10">
          <nav className="py-10 h-[150px]">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold lg:text-2xl">Bantoonusa</h1>
              <div className="lg:flex justify-center items-center gap-20 text-lg text-gray-900 opacity-80 hidden">
                <a href="#">Home</a>
                <a href="#">Tentang Kami</a>
                <a href="#">Services</a>
                <a href="#">Konsultasi</a>
              </div>
              <a href="https://wa.me/628986832378">
                <button className="lg:block py-3 px-6 border-2 border-gray-600 font-semibold hidden">
                  Hubungi Kami
                </button>
              </a>
              <button className="lg:hidden font-semibold block ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </nav>
          <div className="w-full space-y-5 flex flex-col justify-center items-center mx-auto lg:min-h-[calc(100vh_-_150px)] lg:w-8/12">
            <h1 className="text-xl font-semibold text-center lg:text-4xl leading-relaxed tracking-wider">
              Buat Website Bisnis Anda Terlihat Profesional dengan Layanan Jasa
              Pembuatan Website Kami
            </h1>
            <p className="text-sm text-center leading-relaxed lg:tracking-wider text-opacity-60 text-black lg:text-lg capitalize">
              Jadikan Bisnis Anda Terlihat Profesional di Mata Pelanggan dengan
              Layanan Jasa Pembuatan Website Kami yang Mengutamakan
              <b> Kualitas</b> dan <b>Keahlian</b> di Bidang Digital Marketing
            </p>
            <div className="flex justify-center items-center space-x-10">
              <a href="#paket">
                <button className="text-sm lg:text-base lg:py-4 py-3 lg:px-6 px-5 font-semibold rounded-full bg-[#7C67FE] text-gray-50 tracking-wide shadow-2xl flex items-center gap-1">
                  Pilih Paket Pembuatan Website
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </a>
            </div>
            <img className="scale-75" src={ilustration} alt="ilustrasi" />
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#0500FF] via-[#F8FB76] to-[#4EFF75]">
        <div className="px-10 lg:px-36 bg-[#F6FAFF] bg-opacity-90 backdrop-blur-[125px] py-10 space-y-10">
          <div className="space-y-5 flex flex-col justify-center items-center mx-auto">
            <h1 className="text-xl font-semibold text-center lg:text-4xl leading-relaxed lg:tracking-wider">
              KENAPA HARUS DI BANTOONUSA
            </h1>
            <p className="text-sm text-center leading-relaxed tracking-wide text-opacity-60 text-black lg:text-lg capitalize">
              Alasan mengapa anda harus memilih kami untuk jasa pembuatan
              website professional
            </p>
          </div>
          <div className="content-wrapper flex justify-center items-center flex-wrap gap-6">
            {features.map((data) => {
              return (
                <div
                  key={data.id}
                  className={`w-full lg:w-[calc(33.333333%_-_1.25rem)] rounded-md bg-[#F4F6FC] p-10 lg:px-10 lg:py-28 drop-shadow-lg transition-all duration-500 hover:scale-105`}
                >
                  <div className="w-8 h-8 flex justify-center items-center bg-[#2405F2] lg:w-10 lg:h-10 rounded-md relative mb-5">
                    <span className="absolute h-2/4 w-2.5 inset-4 inset-x-0 bg-[#FCD980] rounded-tr-sm"></span>
                    <span className="font-bold lg:text-xl text-gray-50">
                      {data.id}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold lg:text-2xl mb-3">
                    {data.title}
                  </h4>
                  <div className="h-0.5 w-full mx-auto bg-gray-900 bg-opacity-[0.05] mb-3"></div>
                  <div className="card-content text-black text-opacity-60">
                    <p className="text-xs lg:text-lg leading-relaxed">
                      {data.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#0500FF] via-[#F8FB76] to-[#4EFF75] via-#00FFD1">
        <div className="px-10 lg:px-36 bg-[#F6FAFF] bg-opacity-90 backdrop-blur-[125px] py-10 space-y-10">
          <div className="space-y-5 flex flex-col justify-center items-center mx-auto">
            <h1 className="text-xl font-semibold text-center lg:text-4xl leading-relaxed lg:tracking-wider">
              JENIS WEBSITE YANG KAMI KERJAKAN
            </h1>
            <p className=" w-full lg:w-2/4 lg:mx-auto text-sm text-center leading-relaxed tracking-wide text-opacity-60 text-black lg:text-lg capitalize">
              Sebagai penyedia jasa pembuatan website profesional, kami
              menyediakan layanan yang <b>berkualitas </b>
              dan dapat disesuaikan dengan kebutuhan bisnis Anda.
            </p>
          </div>
          <div className="content-wrapper flex flex-wrap justify-center items-center gap-7">
            {types.map((data) => {
              return (
                <div
                  key={data.id}
                  className="w-full lg:w-[calc(33.333333%_-_1.25rem)] rounded-md bg-gray-50 p-10 lg:px-10 lg:py-24 drop-shadow-lg"
                >
                  <img src={data.img} className="h-44 mx-auto mb-5" />
                  <h4 className="text-base font-semibold lg:text-xl text-center mb-3">
                    {data.title}
                  </h4>
                  <div className="h-0.5 w-full mx-auto bg-gray-900 bg-opacity-[0.05] mb-3"></div>
                  {/* <div className="card-content">
                    <p className="text-xs lg:text-lg text-black text-opacity-60 leading-relaxed">
                      {data.desc}
                    </p>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        id="paket"
        className="bg-gradient-to-r from-[#0500FF] via-[#F8FB76] to-[#4EFF75] via-#00FFD1"
      >
        <div className="px-10 lg:px-36 bg-[#F6FAFF] bg-opacity-90 backdrop-blur-[125px] py-10 space-y-10">
          <div className="space-y-5 flex flex-col justify-center items-center mx-auto">
            <h1 className="text-xl font-semibold text-center lg:text-4xl leading-relaxed lg:tracking-wider">
              Paket Harga Jasa Pembuatan Website
            </h1>
            <p className="w-full lg:w-6/12 lg:mx-auto text-sm text-center leading-relaxed tracking-wide text-opacity-60 text-black lg:text-lg capitalize">
              Kami menawarkan berbagai pilihan paket, mulai dari paket sederhana
              hingga paket yang lebih kompleks dengan fitur-fitur khusus. Paket
              kami juga mencakup layanan hosting yang andal dan perawatan
              berkala untuk memastikan website Anda tetap berjalan dengan
              lancar.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center item gap-7">
            {packets.map((data) => {
              return (
                <div
                  key={data.id}
                  className="w-full lg:w-[calc(33.333333%_-_1.25rem)] rounded-tl-lg rounded-bl-lg rounded-br-lg bg-gray-50 p-10 drop-shadow-lg text-[#160E4B]"
                >
                  <div className="card-heading">
                    <h2 className="text-base font-extrabold lg:text-lg mb-3">
                      {data.title}
                    </h2>
                    <h4 className="text-[48px] font-bold -mt-5 tracking-wide">
                      <span className="text-sm text-black text-opacity-60">
                        Start &nbsp;&nbsp;
                      </span>
                      {data.price}
                    </h4>
                    {/* <p className="text-xs lg:text-base text-black text-opacity-60 leading-relaxed">
                      A budget-friendly option for individuals and small
                      businesses.
                    </p> */}
                    <div className="h-0.5 w-full mx-auto bg-gray-900 bg-opacity-[0.05] mb-6 mt-2"></div>
                  </div>
                  <div className="card-content mb-6">
                    <h4 className="text-sm lg:text-base text-black text-opacity-60 mb-3">
                      Features
                    </h4>
                    <ul className="space-y-3">
                      {data.benefits.map((benefit, index) => {
                        return (
                          <li
                            key={index}
                            className="flex gap-2 items-center capitalize lg:text-base text-xs"
                          >
                            {benefit.available === "yes" && (
                              <div className="rounded-full bg-[#7C67FE] p-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-gray-50 font-bold"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                              </div>
                            )}
                            {benefit.available === "no" && (
                              <div className="rounded-full bg-[#FF4794] p-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-gray-50 font-bold"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </div>
                            )}
                            {benefit.available === "y/n" && (
                              <div className="rounded-full bg-yellow-400 p-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-gray-50 font-bold"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                              </div>
                            )}
                            <span className="text-black text-opacity-60 leading-relaxed">
                              {benefit.name}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <button className="bg-[#7C67FE]  px-10 py-3 w-full text-gray-50 rounded-md lg:text-base text-sm">
                    Pesan Sekarang
                  </button>
                </div>
              );
            })}
          </div>
          <div className="w-full lg:w-6/12 mx-auto rounded-tl-lg rounded-bl-lg rounded-br-lg bg-gray-50 p-7 lg:p-10 drop-shadow-lg text-[#160E4B]">
            <div className="card-heading text-center">
              <h4 className="lg:text-[60px] text-[40px] font-bold uppercase">
                paket Custom
              </h4>
              <span className="text-base font-bold lg:text-2xl">
                Anda memiliki kebutuhan yang unik untuk website Anda?
              </span>
              <div className="h-0.5 w-2/4 mx-auto bg-gray-900 bg-opacity-[0.05] mb-6 mt-2"></div>
            </div>
            <div className="card-content mb-6">
              <p className="text-black text-opacity-60 leading-relaxed text-center lg:text-xl text-xs">
                Kami menyediakan layanan pembuatan website custom dengan
                fitur-fitur khusus dan unik yang sesuai dengan kebutuhan bisnis
                Anda. Dapatkan jaminan pemeliharaan dan dukungan selama 6 bulan,
                serta konsultasi dan diskusi desain yang lebih dalam dan
                intensif dengan tim kami. Kami berkomitmen untuk memberikan
                solusi website yang sesuai dengan kebutuhan Anda. Jangan ragu
                untuk menghubungi kami dan kita bisa memulai membangun website
                yang sesuai dengan impian Anda!
              </p>
            </div>
            <button className="bg-[#7C67FE] lg:px-10 px-8 lg:py-3 py-2 w-full text-gray-50 rounded-md">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>
      <footer className="relative bg-[#1a0c78] bg-opacity-90 backdrop-blur-[125px]">
        <div className="lg:px-36 px-10 py-10">
          <div className="wrapper flex">
            <div className="w-3/12 text-white flex-grow">
              <h4 className="font-bold text-2xl">[Bantoonusa]</h4>
              {/* <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                ullam! Autem, sequi?
              </p> */}
              <div className="card absolute bg-[#FCD980] px-10 py-2 rounded-tl-md rounded-tr-md bottom-0 text-gray-900">
                <div className="flex gap-14">
                  <div className="contact-email">
                    <h4 className="font-bold">Email</h4>
                    <p>email@gmail.com</p>
                  </div>
                  <div className="contact-email">
                    <h4 className="text font-bold">Telephone</h4>
                    <p>+6288 999 222 333</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-5/12 text-white justify-end">
              <div className="flex gap-24">
                <div className="ml-auto">
                  <h4 className="font-bold text-xl">Social Media</h4>
                  <div className="space-y-2 mt-5">
                    <p className="text-lg">Instagram</p>
                    <p className="text-lg">Facebook</p>
                  </div>
                </div>
                <div className="ml-auto">
                  <h4 className="font-bold text-xl">Program</h4>
                  <div className="space-y-2 mt-5">
                    <p className="text-lg">Youth Social Care Camp</p>
                    <p className="text-lg">LMM</p>
                    <p className="text-lg">Ramadhan Berbagi</p>
                  </div>
                </div>
                <div className="ml-auto">
                  <h4 className="font-bold text-xl">Dukungan</h4>
                  <div className="space-y-2 mt-5">
                    <p className="text-lg">Tentang Kami</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Services;
