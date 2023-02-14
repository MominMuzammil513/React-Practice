
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const NoteList = () => {
    return (
        <>
            <div className="list-div">
                <div className="note-div">
                    <h3>Title</h3>
                    <p>30 Days Of React is a step by step guide to learn React.js. It is structured based on dayss  </p>

                </div>
                <button>
                    <DeleteOutlineIcon />
                </button>
            </div>
        </>
    )
}
export default NoteList;