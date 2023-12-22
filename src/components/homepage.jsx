import { Link } from 'react-router-dom'


const HomePage = () => {

    return (
        <>
            <Link
                to="/login"
                className=""
            >
                Login
            </Link>

            <Link
                to="/ide"
                className=""
            >
                IDE
            </Link>

        </>

    )
}

export default HomePage
