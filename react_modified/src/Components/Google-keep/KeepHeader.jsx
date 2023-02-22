import logo from './image/google-keep-icon.svg'
import SearchIcon from '@mui/icons-material/Search';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

const KeepHeader = () => {
    return (
        <>
            <div className="header-div">
                <div className='logo-div'>
                    <ViewHeadlineIcon />
                    <img src={logo} height='40px' width='60px' />
                    <h1 className='heading'>keepMM</h1>
                </div>
                <div className='Search'>
                    <button className='search-btn'>
                        <SearchIcon className='btn-icon' />
                    </button>
                    <input type="text" role="combobox" autoComplete="off" placeholder='Search'
                        className='input-search' />
                </div>
            </div>
        </>
    )
}
export default KeepHeader;