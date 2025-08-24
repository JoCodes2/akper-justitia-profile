// components/Ui/Card.jsx
const Card = ({
    image,
    name,
    date_upload,
    created_by,
    imgClass = "w-full h-48 object-cover",
    onDetailClick,
}) => {
    const imageUrl = image ? `${import.meta.env.VITE_APP_URL || 'http://localhost:8000'}/uploads/galeri/${image}` : null;

    // Format tanggal jika ada
    const formatDate = (dateString) => {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className="bg-white rounded-xl shadow hover:shadow-md overflow-hidden transition">
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={name || 'Galeri Image'}
                    className={imgClass}
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
            )}
            <div className="p-4">
                {name && (
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                        {name}
                    </h3>
                )}
                {date_upload && (
                    <p className="text-sm text-gray-600 mb-1">
                        {formatDate(date_upload)}
                    </p>
                )}
                {created_by && (
                    <div className="text-sm text-gray-500">
                        Diupload oleh: {created_by}
                    </div>
                )}

                {onDetailClick && (
                    <button
                        onClick={onDetailClick}
                        className="mt-4 inline-block text-sm text-primary hover:underline"
                    >
                        Lihat Selengkapnya →
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;
