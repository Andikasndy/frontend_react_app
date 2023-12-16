const Button =(props)=>{
    return(
        <button onClick={() => props.clicked()}>click me </button>
    );
};
export default Button;