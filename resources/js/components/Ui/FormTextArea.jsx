// components/Ui/FormTextarea.jsx
const FormTextarea = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    required,
}) => {
    return (
        <div className="mb-4">
            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                {label}
            </label>
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows="4"
                required={required}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
        </div>
    );
};

export default FormTextarea;
