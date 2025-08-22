import { useState } from "react";
import Modal from "../Ui/Modal";
import Card from "../Ui/Card";
import Slide1 from "../../assets/carousel/slide1.jpeg";

const leaders = [
    {
        name: "Dr. H. Muchtar Aziz, M.Pd",
        nip: "19751212 200003 1 001",
        position: "Ketua Yayasan",
        ttl: "Palu, 12 Desember 1975",
        address: "Jl. Merdeka No. 123, Palu",
        email: "muchtar.aziz@example.com",
        phone: "081234567890",
        image: Slide1,
        bio: "Beliau adalah tokoh pendidikan yang telah mengabdikan hidupnya untuk pengembangan dunia pendidikan di Sulawesi Tengah, serta menjadi pelopor pendirian yayasan ini.",
    },
    {
        name: "Dr. H. Muchtar Aziz, M.Pd",
        nip: "19751212 200003 1 001",
        position: "Ketua Yayasan",
        ttl: "Palu, 12 Desember 1975",
        address: "Jl. Merdeka No. 123, Palu",
        email: "muchtar.aziz@example.com",
        phone: "081234567890",
        image: Slide1,
        bio: "Beliau adalah tokoh pendidikan yang telah mengabdikan hidupnya untuk pengembangan dunia pendidikan di Sulawesi Tengah, serta menjadi pelopor pendirian yayasan ini.",
    },
    {
        name: "Dr. H. Muchtar Aziz, M.Pd",
        nip: "19751212 200003 1 001",
        position: "Ketua Yayasan",
        ttl: "Palu, 12 Desember 1975",
        address: "Jl. Merdeka No. 123, Palu",
        email: "muchtar.aziz@example.com",
        phone: "081234567890",
        image: Slide1,
        bio: "Beliau adalah tokoh pendidikan yang telah mengabdikan hidupnya untuk pengembangan dunia pendidikan di Sulawesi Tengah, serta menjadi pelopor pendirian yayasan ini.",
    },
    // Tambahkan data lainnya di sini jika perlu
];

const LeaderPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLeader, setSelectedLeader] = useState(null);

    const openModal = (leader) => {
        setSelectedLeader(leader);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedLeader(null);
    };

    return (
        <section className="py-3 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Judul Halaman */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        <span className="text-primary">Pimpinan</span>
                    </h1>
                </div>

                {/* Grid Card Pimpinan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {leaders.map((leader, index) => (
                        <Card
                            key={index}
                            image={leader.image}
                            title={leader.name}
                            subtitle={leader.position}
                            description={`NIP: ${leader.nip}`}
                            imgClass="h-52 object-cover"
                            onDetailClick={() => openModal(leader)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal Biodata */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title="Biodata Pimpinan"
            >
                {selectedLeader && (
                    <div className="space-y-6">
                        {/* Gambar + Tabel Biodata */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Gambar */}
                            <div className="flex justify-center md:justify-start">
                                <img
                                    src={selectedLeader.image}
                                    alt={selectedLeader.name}
                                    className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-xl shadow-md"
                                />
                            </div>

                            {/* Tabel Biodata */}
                            <div className="md:col-span-2 overflow-x-auto">
                                <table className="table-auto w-full text-sm sm:text-base text-left">
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="font-semibold py-2 pr-4">
                                                Nama
                                            </td>
                                            <td className="py-2">
                                                {selectedLeader.name}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold py-2 pr-4">
                                                NIP
                                            </td>
                                            <td className="py-2">
                                                {selectedLeader.nip}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold py-2 pr-4">
                                                Jabatan
                                            </td>
                                            <td className="py-2">
                                                {selectedLeader.position}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold py-2 pr-4">
                                                Tempat, Tgl Lahir
                                            </td>
                                            <td className="py-2">
                                                {selectedLeader.ttl}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold py-2 pr-4">
                                                Alamat
                                            </td>
                                            <td className="py-2">
                                                {selectedLeader.address}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold py-2 pr-4">
                                                Email
                                            </td>
                                            <td className="py-2">
                                                {selectedLeader.email}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold py-2 pr-4">
                                                No. Telepon
                                            </td>
                                            <td className="py-2">
                                                {selectedLeader.phone}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Biografi */}
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">
                                Biografi
                            </h3>
                            <p className="text-justify text-sm sm:text-base text-gray-700 leading-relaxed">
                                {selectedLeader.bio}
                            </p>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default LeaderPage;
