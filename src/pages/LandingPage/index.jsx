import React from 'react'
import Navbar from '../../components/organisms/NavigasiBar'
import bgImage from '../../assets/bg_image.png';

import AlurPendaftaran from '../../components/organisms/AlurPendaftaran';
import ContactLocation from '../../components/organisms/Kontak';
import Footer from '../../components/organisms/Footer';
import Button from '../../components/atoms/Button';
import { Jadwal } from '../../components/organisms/Jadwal';
import './style.css'
import { Link, useNavigate } from 'react-router-dom';

export const LandingPage = () => {

    const scrollToSection = (id, offset = 100) => {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: offsetTop - offset, behavior: "smooth" });
        }
      };
      
    return (
        <div className="w-full h-full overflow-x-hidden">
            <div className='fixed top-0 left-0 w-full z-[100]'>
                <Navbar bgColor="bg-white" scrollToSection={scrollToSection} />
            </div>

            {/* formulir */}
            <div
                className="w-full h-screen flex items-center "
                id='bg-header'

            >
                {/* Overlay untuk efek gelap */}
                {/* <div className="absolute inset-0 bg-black/50"></div> */}
                {/* Konten */}
                {/* <div className="relative z-10 flex flex-col items-start justify-center gap-16 ] h-full  text-white text-left pl-16 md:pl-28 w-full md:w-[60%]">
                    <div className="gap-4  ">
                        <h1 className="text-4xl font-bold md:text-5xl leading-tight">
                            Daftar Sekarang & Wujudkan Impian Anak Anda!
                        </h1>
                        <p className="mt-4 text-lg max-w-2xl">
                            Sekolah Dasar XYZ membuka pendaftaran peserta didik baru! Dapatkan pengalaman belajar yang menyenangkan dengan kurikulum terbaru dan lingkungan yang mendukung tumbuh kembang anak. Daftarkan putra-putri Anda sekarang dan jadilah bagian dari keluarga SD XYZ!
                        </p>
                    </div>
                    <div className="mt-6 flex gap-5">
                        <Button color="primary" textColor="text-white">
                            Isi Formulir Pendaftaran
                        </Button>
                        <Button color="secondary" textColor="text-blue-500">
                            Kontak kami
                        </Button>
                    </div>
                </div> */}
                <div className="absolute inset-0  bg-black/50 "></div>
                <div className="relative left-[100px]  z-10">
                    <div className="w-[782px] flex flex-col gap-16 mt-20">
                        <div className="text-white">
                            <h1 className='text-[40px] font-bold'>Daftar Sekarang & Wujudkan Impian Anak Anda!</h1>
                            <p className='text-xl'>Sekolah Dasar XYZ membuka pendaftaran peserta didik baru! Dapatkan pengalaman belajar yang menyenangkan dengan kurikulum terbaru dan lingkungan yang mendukung tumbuh kembang anak. Daftarkan putra-putri Anda sekarang dan jadilah bagian dari keluarga SD XYZ!</p>
                        </div>
                        <div className="flex gap-5">
                            <Link to='/formulir-pendaftaran'>
                                <Button color="primary" textColor="text-white" className="px-10" >
                                    Isi Formulir Pendaftaran
                                </Button>
                            </Link>
                            <Button
                                color="secondary"
                                textColor="text-blue-500"
                                onClick={() => scrollToSection("kontak & lokasi")}
                                className="px-10"
                            >
                                Kontak kami
                            </Button>

                        </div>
                    </div>

                </div>
            </div>


            <Jadwal />

            <AlurPendaftaran />

            <ContactLocation />
            {/* <RegistrationForm /> */}

            <Footer />

        </div>
    )
}
