import GitHubIcon from '@mui/icons-material/GitHub';

const Material = () => {
    return (
        <>
            <header className="Header">
                <div className='icon-div'>

                    <GitHubIcon />
                </div>

                <div className='search-div'>
                    <input type="text" placeholder='Search here your product' className='search-input' />
                    <button className='search-btn'>Search</button>
                </div>
                <div className='login-div'>
                    <button className='Login-btn'>Login</button>
                </div>
                <div className="menu-div">
                    <ul>
                        <li>Home</li>
                        <li>Web Series</li>
                        <li>Movies</li>
                        <li>Dual Audio</li>
                        <li>Genre</li>
                        <li>By Year</li>
                        <li>By Quality</li>
                    </ul>
                </div>

            </header>
        </>
    )
}
export default Material;