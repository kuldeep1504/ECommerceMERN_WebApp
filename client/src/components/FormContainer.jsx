const FormContainer = ({ children }) => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
