import { useLocation, useParams, useNavigate } from "react-router";


const User = () => {
    const { fname, lname } = useParams()
    const location = useLocation()
    console.log(location);
    const navigate = useNavigate()
    console.log(navigate);
    return (
        <>
            <h1>Hello i am {fname} {lname}</h1>
            <p>My current location is {location.pathname}</p>
            {
                location.pathname === `/user/momin/muzammil` ? <button onClick={() => navigate('/')}>go back</button> : null
                /* location.pathname === `/user/momin/muzammil` ? <button onClick={() => navigate.goBack()}>go back</button> : null */

                /* location.pathname === `/user/momin/muzammil` ? <button onClick={() => navigate(-1)}>go back</button> : null */

                /**This above the go back button its same working but useful in new react router v is navigate(-1) */

            }
        </>
    )
}
export default User;