type MainButtonProps = {
    text: string;
  };
  
  const MainButton: React.FC<MainButtonProps> = ({ text }) => {
    return (
      <button
        style={{ borderRadius: "8px" }}
        className="text-sm font-medium bg-[#fb5770] text-white hover:bg-[#e44d63] px-8 rounded-lg h-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fb5770]"
      >
        {text}
      </button>
    );
  };
  
  export default MainButton;
  