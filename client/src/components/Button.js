const Button = ({type = "primary", size="md", text = "Sbumit", handleClick}) => (
    <button 
    onClick={handleClick} 
    className={`btn btn-${type} btn-${size}`}>
        {text}
    </button>
);

export default Button;