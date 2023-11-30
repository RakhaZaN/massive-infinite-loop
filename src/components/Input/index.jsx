const Input = (props) => {
  const { id, name, type, label, onChange, ...inputProps } = props;
  return (
    <div className="group mb-4">
      {label && (
        <label
          htmlFor={id}
          className={`block mb-2 text-sm font-medium text-gray-900`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        className="block w-full py-2 px-3 rounded-md border border-gray-300 focus:border-customBlue3 focus:ring-customBlue1 focus:ring-2 focus:ring-offset-1 focus:outline-none sm:text-sm read-only:bg-broken-white disabled:bg-broken-white"
        onChange={onChange}
        {...inputProps}
      />
    </div>
  );
};

export default Input;
