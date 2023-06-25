import { Link, useNavigate } from "react-router-dom"

const HomeScreen = () =>{
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/about")

    }
    return (
        <div>
            <h1> HomeScreen </h1>
            <button onClick={handleClick}>Click Me</button>
            <Link to="/About">
                <button >Link to About</button>
            </Link>
        </div>
    )
}

export default HomeScreen