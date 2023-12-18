const Button =(props)=>{
    return(
        <div>
        <button onClick={() => props.clicked()}>click me </button>
        <button onClick={()=> props.cangeSeeUoll()}>ubah tulisan See U Oll 2</button>
        </div>
    );
};
export default Button;