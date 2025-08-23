// components/Ui/Card.jsx
const Card = ({
    image,
    title,
    subtitle,
    description,
    imgClass,
    onDetailClick,
}) => {
    return (
        <div className="bg-white rounded-xl shadow hover:shadow-md overflow-hidden transition">
            {image && <img src={image} alt={title} className={imgClass} />}
            <div className="p-4">
                {title && (
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                        {title}
                    </h3>
                )}
                {subtitle && (
                    <p className="text-sm text-gray-600 mb-1">{subtitle}</p>
                )}
                {/* Ganti p jadi div */}
                <div className="text-sm text-gray-500">{description}</div>

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
