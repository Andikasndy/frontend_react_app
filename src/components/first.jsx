import { useNavigate } from "react-router-dom"
const First =()=>{
    const navigate = useNavigate()
    return (
        <>
        <p>ini adalah page home</p>
        <button onClick={()=> navigate('/About')}>cek halaman about</button>
        </>
        
    )
}
export default First