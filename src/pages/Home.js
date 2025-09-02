import { Helmet } from "react-helmet";
import Navbar from '../components/Navbar';
import logo from '../logo.svg';

import labImage from '../assets/seminar.jpg';
import jaringanImage from '../assets/ti24prak.jpeg';
import seminarImage from '../assets/semin.jpeg';
import praktikumImage from '../assets/ti24.jpeg';
import strukturImage from '../assets/bily.jpg';
import kegiatanImage from '../assets/itgoestoschool.jpeg';
import lambangHmtiImage from '../assets/HMTI.png'; 
import strukturImage1 from '../assets/bagas.jpeg';

function Home() {
  return (
    <div className="App">
      <Helmet>
        <title>HMTI</title>
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>
      
      <Navbar currentPath="/" />

      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Himpunan Mahasiswa Teknologi Informasi
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-orange-300 animate-fade-in-delay">
            Politeknik Semen Indonesia
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-delay-2">
            Membentuk Generasi Digital Berjiwa pemimpin dan inovatif
          </p>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="shape shape-1 absolute top-1/4 left-1/4 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-float"></div>
          <div className="shape shape-2 absolute top-2/3 right-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-float animation-delay-1000"></div>
          <div className="shape shape-3 absolute top-1/3 right-1/3 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-float animation-delay-2000"></div>
          <div className="shape shape-4 absolute bottom-1/4 left-1/3 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-float animation-delay-3000"></div>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500 after:rounded">
              Himpunan Mahasiswa Teknologi Informasi
            </h2>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <p className="text-gray-600 mb-6 leading-relaxed text-justify">
HMTI Polteksi (Himpunan Mahasiswa Teknologi Informasi Politeknik Semen Indonesia) didirikan pada 2024 untuk mewakili suara mahasiswa di bidang teknologi informasi. Organisasi ini bertujuan memperkuat peran mahasiswa dalam kebijakan akademik dan sosial, menggali potensi akademik dan non-akademik, serta membangun jaringan dengan dunia industri. 
                </p>
                <p className="text-gray-600 leading-relaxed text-justify">
Dengan visi menjadi program studi unggulan, HMTI Polteksi berkomitmen untuk menghasilkan lulusan yang kompeten, berintegritas, dan siap berkontribusi pada pengembangan teknologi berkelanjutan demi kemajuan masyarakat.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <figure className="relative w-full max-w-md h-64 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={labImage} 
                    alt="Laboratorium Teknologi Informasi" 
                    className="w-full h-full object-cover"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 text-sm">
                    Teknologi Informasi Politeknik Semen Indonesia
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section id="vision" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500 after:rounded">
              Visi dan Misi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Visi</h3>
                <p className="text-gray-600 text-justify">
                  Menjadi program studi unggulan di bidang Teknologi Informasi yang berkontribusi pada
                  pengembangan teknologi berkelanjutan, serta menghasilkan lulusan yang berkompeten,
                  berintegritas, dan mampu memanfaatkan teknologi untuk kemajuan sosial dan ekonomi
                  masyarakat
                </p>
              </article>
              <article className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Misi</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600 text-justify">Bermanfaat untuk memecahkan masalah sosial, ekonomi, dan lingkungan menggunakan teknologi informasi.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600 text-justify">Menyediakan pendidikan berkualitas yang berfokus pada penguasaan teknologi informasi, dengan penekanan pada pengembangan soft skill dan hard skill mahasiswa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600 text-justify">Membangun kemitraan dengan industri untuk menghubungkan mahasiswa dengan peluang magang, kerja sama proyek, dan peluang karir di dunia industri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600 text-justify">Mengembangkan budaya belajar seumur hidup yang mendorong mahasiswa untuk terus meningkatkan keterampilan dan adaptasi terhadap perkembangan teknologi yang cepat.</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* President Section */}
        <section id="president" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500 after:rounded">
              Presiden HMTI
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <figure className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={strukturImage1} 
                    alt="Presiden Himpunan Mahasiswa Teknologi Informasi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="w-full md:w-2/3 mb-10">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">Bagas Satria Aribowo</h3>
                <p className="text-lg text-gray-600 mb-4">Masa Jabatan 2025-2026</p>
                <blockquote className="text-gray-700 italic border-l-4 border-orange-500 pl-4 mb-6 text-justify">
                  "membangun komunitas tempat mahasiswa TI bisa belajar bersama dalam suasana santai dan kolaboratif. Dari diskusi ringan hingga proyek nyata, Saya percaya bahwa kebersamaan adalah kunci untuk berkembang dan menciptakan solusi inovatif. Mari berkolaborasi, berbagi ide, dan tumbuh sebagai calon profesional digital yang berdampak!"
                </blockquote>
                <p className="text-gray-600 text-justify ">
                  terciptanya lingkungan belajar yang nyaman dan kolaboratif, di mana mahasiswa TI tidak hanya memperoleh pengetahuan teknis, tetapi juga mampu mengasah keterampilan berpikir kritis, bekerja sama dalam tim.
                </p>
              </div>
            </div>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <figure className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={strukturImage} 
                    alt="Presiden Himpunan Mahasiswa Teknologi Informasi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">Muhammad Brillian Mujahid Kamal</h3>
                <p className="text-lg text-gray-600 mb-4">Masa Jabatan 2024-2025</p>
                <blockquote className="text-gray-700 italic border-l-4 border-orange-500 pl-4 mb-6 text-justify">
                  "Berkomitmen untuk terus memberikan kontribusi positif di dunia pendidikan dan teknologi. Tujuan saya adalah menciptakan generasi mahasiswa yang aware terhadap perkembangan teknologi dan siap berkontribusi dengan penuh tanggung jawab dalam dunia digital, membentuk mereka menjadi pemimpin masa depan yang inovatif."
                </blockquote>
                <p className="text-gray-600 text-justify ">
                  Selama menjabat sebagai Ketua HMTI Polteksi, saya memimpin program-program seperti TIGoesToSchool untuk edukasi teknologi, Webinar Keamanan Jaringan untuk meningkatkan kesadaran siber, Class Discuss tentang tren IT, dan Seminar Media Sosial untuk penggunaan bijak media sosial. Semua program ini bertujuan untuk memperluas pengetahuan dan membentuk mahasiswa yang siap menghadapi dunia digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="lambang" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500 after:rounded">
              Lambang HMTI
            </h2>
            
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/2 flex justify-center">
                <figure className="relative w-full max-w-md">
                  <img 
                    src={lambangHmtiImage} 
                    alt="Lambang Himpunan Mahasiswa Teknologi Informasi" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <figcaption className="mt-4 text-center text-gray-600">
                    Lambang HMTI Politeknik Semen Indonesia
                  </figcaption>
                </figure>
              </div>
              
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Makna dan Arti Lambang</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Bunga Teratai Merah yang Mekar</h4>
                      <p className="text-gray-600 text-justify">Bunga teratai melambangkan kemurnian, pencerahan, dan kelahiran kembali.
Warna merah mewakili semangat, kekuatan, dan tekad. Teratai yang mekar
bisa diartikan sebagai simbol perkembangan, pertumbuhan, dan kemajuan
yang terus berlanjut, sejalan dengan visi dan misi HMTI untuk terus maju dan
berkembang dalam bidang teknologi informasi.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Tiga Bintang</h4>
                      <p className="text-gray-600 text-justify">Tiga bintang melambangkan cita-cita yang tinggi, prestasi, dan kualitas yang
unggul. Tiga bintang bisa mewakili tiga pilar utama yang dipegang teguh oleh
HMTI, seperti pendidikan, pengabdian, dan penelitian, atau bisa juga mewakili tiga tahap perkembangan, yaitu belajar, berkarya, dan berkontribusi.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Rangkaian Sirkuit Dan Chip</h4>
                      <p className="text-gray-600 text-justify">Elemen ini mewakili inti dari jurusan Teknologi Informasi, yang berkaitan erat
dengan elektronika, pemrograman, dan dunia digital. Sirkuit dan chip adalah
elemen penting dalam dunia teknologi informasi, melambangkan keahlian dan
fokus HMTI pada inovasi teknologi, keilmuan, dan keterampilan di bidang IT.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Lingkaran Dengan Daun Emas </h4>
                      <p className="text-gray-600 text-justify">Lingkaran dengan hiasan daun emas di sekitar logo menandakan kesatuan,
keabadian, dan prestasi. Ini melambangkan semangat kolektif dan tekad
mahasiswa Teknologi Informasi untuk terus maju dan mencapai prestasi yang
lebih tinggi.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Tulisan HMTI Dan Politeknik Semen Indonesia</h4>
                      <p className="text-gray-600 text-justify">Ini adalah identitas organisasi dan institusi pendidikan. Penegasan nama
HMTI dan Politeknik Semen Indonesia menunjukkan kebanggaan dan
identitas yang kuat dari himpunan mahasiswa ini.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500 after:rounded">
              Galeri Kegiatan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <figure className="relative group overflow-hidden rounded-xl cursor-pointer h-48">
                <img 
                  src={praktikumImage} 
                  alt="Praktikum Jaringan" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <figcaption className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold">PKKMB 2024</h3>
                  </div>
                </figcaption>
              </figure>
              <figure className="relative group overflow-hidden rounded-xl cursor-pointer h-48">
                <img 
                  src={seminarImage} 
                  alt="Seminar Teknologi" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <figcaption className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold">Seminar Teknologi</h3>
                  </div>
                </figcaption>
              </figure>
              <figure className="relative group overflow-hidden rounded-xl cursor-pointer h-48">
                <img 
                  src={kegiatanImage} 
                  alt="Proyek Akhir" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <figcaption className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold">IT GOES TO SCHOOL</h3>
                  </div>
                </figcaption>
              </figure>
              <figure className="relative group overflow-hidden rounded-xl cursor-pointer h-48">
                <img 
                  src={jaringanImage} 
                  alt="Kunjungan Industri" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <figcaption className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold">Class Discussion</h3>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-green-500 after:rounded">
              Kontak Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Informasi Program Studi</h3>
                <div className="space-y-4">
                  <p className="flex items-start">
                    <span className="font-semibold text-gray-700 min-w-20">Alamat:</span>
                    <span className="text-gray-600">Jl. Kartini No.25 C, Kesemen, Sukorame, Kec. Gresik, Kabupaten Gresik Jawa Timur</span>
                  </p>
                  <p className="flex items-start">
                    <span className="font-semibold text-gray-700 min-w-20">Email:</span>
                    <span className="text-gray-600">hmtipolteksi@gmail.com</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Kirim Pesan</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Nama Lengkap" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input 
                    type="email" 
                    placeholder="Alamat Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <textarea 
                    placeholder="Pesan Anda" 
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">HMTI</h3>
              <p className="opacity-80">Program Studi Teknologi Informasi<br />Politeknik Semen Indonesia</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Kontak</h3>
              <div className="space-y-2 opacity-80">
                <p>Jl. Kartini No.25 C, Kesemen, Sukorame, Kec. Gresik, Kabupaten Gresik<br />Jawa Timur, Indonesia</p>
                <p>Email: hmtipolteksi@gmail.com</p>
                
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/hmti_polteksi?igsh=MWg0dmVraXp1N3oxOQ==" className="text-white hover:text-orange-400 transition-colors duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center opacity-70">
            <p>&copy; 2024 Teknologi Informasi - Politeknik Semen Indonesia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;