type OutlineButtonProps = {
    text: string;
};

const OutlineButton: React.FC<OutlineButtonProps> = ({ text }) => {
    return (
        <button
            style={{ borderRadius: "8px" }}
            className="text-sm font-medium border border-[#fb5770] bg-white text-[#fb5770] hover:bg-[#fb5770] hover:text-white px-8 rounded-lg h-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fb5770]"
        >
            {text}
        </button>
    );
};

export default OutlineButton;
