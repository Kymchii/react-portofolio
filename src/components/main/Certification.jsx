import { useState } from "react";
import { LuExternalLink } from "react-icons/lu";
import { CertificateModal } from "../ui/CertificateModal";
import { certificates } from "../../data/certificate";

export const Certification = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const handleOpenModal = (certificate) => {
        setSelectedCertificate(certificate);
        setOpenModal(!openModal);
    }

    return (
        <>
            <section id="sertifikasi" className="container mx-auto px-6 py-20">
                <div className="flex flex-col items-center mb-12" data-aos='fade-down'>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Sertifikasi</h2>
                    <div className="h-1 w-20 bg-cyan rounded"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* <!-- Card Sertifikasi --> */}
                    {certificates.map((certificate) =>
                        <div key={certificate.id} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-6 transition-all duration-300 neon-border group flex flex-col" data-aos='zoom-in' data-aos-delay={certificate.delay}>
                            <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center mb-6 text-cyan">
                                <certificate.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-cyan transition-colors">{certificate.title}</h3>
                            <p className="text-slate-500 font-mono text-xs mb-4">{certificate.platform} • {certificate.year}</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-1">{certificate.desc}</p>

                            {/* <!-- Tombol dengan Fungsi Preview --> */}
                            <button onClick={() => handleOpenModal(certificate)} className="inline-flex items-center text-sm font-mono text-cyan hover:underline cursor-pointer">Lihat Kredensial <LuExternalLink className="ml-2 w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {openModal && (
                <CertificateModal openModal={openModal} setOpenModal={setOpenModal} certificate={selectedCertificate} />
            )}
        </>
    )
}
