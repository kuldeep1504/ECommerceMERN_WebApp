const Message = ({ variant, children }) => {
  const bgColor = {
    danger: 'bg-red-100 text-red-700 border-red-200',
    success: 'bg-green-100 text-green-700 border-green-200',
    info: 'bg-blue-100 text-blue-700 border-blue-200',
  }[variant] || 'bg-gray-100 text-gray-700 border-gray-200';

  return (
    <div className={`px-4 py-3 rounded-lg border ${bgColor} text-sm font-medium`}>
      {children}
    </div>
  );
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
