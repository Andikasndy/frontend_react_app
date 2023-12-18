const Footer=({SeeValue})=>{
    return(
        <div>
            <h1>{!SeeValue ? "See U Oll" : SeeValue}</h1>
        </div>
    );
}
export default Footer;