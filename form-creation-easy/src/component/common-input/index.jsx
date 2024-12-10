export default function CommonInput({ label, id, value, placeholder, name, type, onChange }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input name={name}
                id={id}
                placeholder={placeholder || 'Enter value here'}
                type={type || 'text'}
                value={value}
                onChange={onChange} />
        </div>
    );
}