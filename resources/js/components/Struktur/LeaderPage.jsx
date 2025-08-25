import { useState, useEffect } from "react";
import { apiGet } from "../../admin/helper/api";

const LeaderPage = () => {
    const [leaders, setLeaders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaders = async () => {
            try {
                const res = await apiGet(`${appUrl}/justitia/leader/`);

                if (Array.isArray(res?.data?.data)) {
                    const mapped = res.data.data.map((item) => ({
                        id: item.id,
                        name: item.name,
                        nip: item.nip,
                        position: item.position,
                        image: `${appUrl}/uploads/leader/${item.image}`,
                        createdAt: item.created_at,
                        updatedAt: item.updated_at,
                    }));
                    setLeaders(mapped);
                }
            } catch (error) {
                console.error("Error fetching leaders:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLeaders();
    }, []);

    // 🔹 Card component khusus leader (local, bukan import dari luar)
    const Card = ({ image, name, position, nip, imgClass }) => (
        <div className="bg-white rounded-xl shadow hover:shadow-md overflow-hidden transition">
            {image && (
                <img
                    src={image}
                    alt={name}
                    className={imgClass}
                    onError={(e) => {
                        e.target.style.display = "none";
                    }}
                />
            )}
            <div className="p-4">
                {name && (
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                        {name}
                    </h3>
                )}
                {position && (
                    <p className="text-sm text-gray-600 mb-1">{position}</p>
                )}
                {nip && <p className="text-sm text-gray-500">NIP: {nip}</p>}
            </div>
        </div>
    );

    return (
        <section className="py-3 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        <span className="text-primary">Pimpinan</span>
                    </h1>
                </div>
                {loading ? (
                    <p className="text-center text-gray-500">
                        Memuat data pimpinan...
                    </p>
                ) : leaders.length === 0 ? (
                    <p className="text-center text-gray-500">
                        Tidak ada data pimpinan.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {leaders.map((leader) => (
                            <Card
                                key={leader.id}
                                image={leader.image}
                                name={leader.name}
                                position={leader.position}
                                nip={leader.nip}
                                imgClass="w-full h-60 object-contain bg-gray-100"
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default LeaderPage;
