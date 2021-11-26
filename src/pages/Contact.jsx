import { useParams } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

function Contact(){
    let params = useParams()
    console.log(params)
    return(
        <>
        <h1>Ini halaman contact</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iusto ex enim, facere necessitatibus quae hic provident sunt accusamus! Minus aliquam corporis sapiente quis tenetur adipisci delectus mollitia sunt voluptate?</p>
        <Outlet/>
        </>
    )    
}

export default Contact