import { IoMdClose } from "react-icons/io";
import { LuExternalLink } from "react-icons/lu";

export const CertificateModal = ({ openModal, setOpenModal, certificate }) => {
    return (
        <div id="cert-modal" className={`${openModal ? 'flex' : 'hidden'} fixed inset-0 z-100 items-center justify-center p-4 bg-navy/90 backdrop-blur-md`}>
            <div className={`${openModal ? 'opacity-100' : 'opacity-0'} relative max-w-4xl w-full bg-white dark:bg-darker rounded-2xl shadow-2xl border border-white/10 overflow-hidden transform scale-95 transition-all duration-300`} id="modal-content">

                {/* <!-- Modal Header --> */}
                <div className="p-4 border-b border-slate-200 dark:border-white/10 flex justify-between items-center">
                    <h3 id="modal-title" className="text-lg font-bold text-cyan">{certificate?.title}</h3>
                    <button onClick={() => setOpenModal(false)} className="p-1 hover:bg-red-500/20 text-slate-500 hover:text-red-500 rounded-lg transition-colors">
                        <IoMdClose />
                    </button>
                </div>

                {/* <!-- Image Container --> */}
                <div className="p-2 md:p-6 flex justify-center bg-slate-100 dark:bg-navy/50">
                    <img id="modal-image" src={certificate?.image} alt={certificate?.title} className="max-h-[70vh] rounded shadow-lg border border-white/5" />
                </div>

                {/* <!-- Modal Footer --> */}
                <div className="p-4 bg-slate-50 dark:bg-white/5 flex justify-end">
                    <a id="modal-download" href={certificate?.verification} target="_blank" className="px-6 py-2 bg-cyan text-navy font-bold rounded-lg hover:bg-cyan/90 transition-all flex items-center gap-2">
                        <LuExternalLink className="w-4 h-4" /> Buka Link Verifikasi
                    </a>
                </div>
            </div>
        </div>
    )
}
