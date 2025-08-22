import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Ui/Card";
import FormInput from "../components/Ui/FormInput";
import FormTextarea from "../components/Ui/FormTextArea";
import Button from "../components/Ui/Button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import FadeIn from "../components/Ui/FadeIn";

const Contact = () => {
    const [formData, setFormData] = useState({
        nama: "",
        nohp: "",
        email: "",
        deskripsi: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data terkirim:", formData);
        alert("Pesan berhasil dikirim!");
        setFormData({
            nama: "",
            nohp: "",
            email: "",
            deskripsi: "",
        });
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-grow">
                {/* Hero Section */}
                <div className="py-8">
                    <FadeIn delay={0.3}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h1 className="text-4xl font-bold mb-4">
                                Hubungi{" "}
                                <span className="text-primary">Kami</span>
                            </h1>
                            <p className="text-lg max-w-3xl mx-auto">
                                Kami selalu siap membantu Anda. Hubungi kami
                                melalui form atau informasi kontak di bawah ini.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <FadeIn delay={0.4}>
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                        Informasi Kontak
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <div className="bg-primary/10 p-3 rounded-full mr-4">
                                                <MapPin className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800">
                                                    Alamat Kampus
                                                </h3>
                                                <p className="text-gray-600">
                                                    Jl. DR. Suharso No.36A,
                                                    Besusu Barat, Kec. Palu
                                                    Timur, Kota Palu, Sulawesi
                                                    Tengah 94118
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-primary/10 p-3 rounded-full mr-4">
                                                <Mail className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800">
                                                    Email
                                                </h3>
                                                <p className="text-gray-600">
                                                    info@akperjustitia.ac.id{" "}
                                                    <br />
                                                    humas@akperjustitia.ac.id
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-primary/10 p-3 rounded-full mr-4">
                                                <Phone className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800">
                                                    Telepon
                                                </h3>
                                                <p className="text-gray-600">
                                                    +62 411 1234567 <br />
                                                    +62 852 1234 5678 (WhatsApp)
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-primary/10 p-3 rounded-full mr-4">
                                                <Clock className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800">
                                                    Jam Operasional
                                                </h3>
                                                <p className="text-gray-600">
                                                    Senin - Jumat: 08.00 - 16.00
                                                    WITA <br />
                                                    Sabtu: 08.00 - 14.00 WITA
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                        Lokasi Kampus
                                    </h2>
                                    <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3895945236122!2d119.8800876!3d-0.8399525999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8bebe215feab27%3A0x53e1bda6a21c6f72!2sAKPER%20Justitia!5e0!3m2!1sid!2sid!4v1755855045126!5m2!1sid!2sid"
                                            width="100%"
                                            height="300"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="rounded-xl"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Contact Form */}
                        <div>
                            <FadeIn delay={0.4}>
                                <Card
                                    className="shadow-lg border-0"
                                    image={null}
                                    title="Kirim Pesan"
                                    subtitle="Isi form berikut untuk menghubungi kami"
                                    description={
                                        <form
                                            onSubmit={handleSubmit}
                                            className="space-y-6 mt-4"
                                        >
                                            <FormInput
                                                label="Nama Lengkap"
                                                name="nama"
                                                value={formData.nama}
                                                onChange={handleChange}
                                                placeholder="Masukkan nama Anda"
                                                required
                                            />
                                            <FormInput
                                                label="Nomor HP"
                                                name="nohp"
                                                value={formData.nohp}
                                                onChange={handleChange}
                                                placeholder="08xxxxxxxxxx"
                                                required
                                            />
                                            <FormInput
                                                type="email"
                                                label="Email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="contoh@email.com"
                                                required
                                            />
                                            <FormTextarea
                                                label="Deskripsi / Pertanyaan"
                                                name="deskripsi"
                                                value={formData.deskripsi}
                                                onChange={handleChange}
                                                placeholder="Tulis pertanyaan atau pesan Anda..."
                                                rows={5}
                                                required
                                            />
                                            <Button
                                                type="submit"
                                                size="lg"
                                                variant="default"
                                                className="w-full"
                                            >
                                                Kirim Pesan
                                            </Button>
                                        </form>
                                    }
                                />
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
