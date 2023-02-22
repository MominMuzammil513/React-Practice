


const Common = (props) => {
    return (
        <>
            {/* <div className="container-home"> */}
            <div className="main-div-home">
                <div className="detail-div-home">
                    <h1 className='h1-home'>Hello, I'm <strong>Momin Muzammil</strong>.</h1>
                    <h2 className='h2-home'>{props.text}</h2>
                    <button className='btn-home'>Button</button>
                </div>
                <div className="image-div-home">
                    <img src={props.imgsrc} alt="image-home" className='home-image' />
                </div>
            </div>
            {/* </div> */}
        </>
    )
}
export default Common;