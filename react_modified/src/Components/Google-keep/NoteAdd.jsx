import AddIcon from '@mui/icons-material/Add';


const NoteAdd = () => {
    return (
        <>
            <div className="main-add">
                <div className="add-div">
                    <input type="text" className="add-title" placeholder="Title" />
                    <textarea className="add-text" placeholder="Take a note..." />
                    <div className='div-btn'>
                        <button className='add-btn'>
                            <AddIcon className='add-btn-icon' />
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default NoteAdd;