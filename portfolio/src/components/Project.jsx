import Common from "./Common";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceImage from '../Images/Project.svg'
import Cards from './Cards'
import Sdata from "./Sdata";



const Project = () => {
    return (
        <>
            <Common imgsrc={ServiceImage} text="This Is My Service" />
            <div className="container-home">
                <div className="main-div-home">
                    <Row>
                        {
                            Sdata.map((value) => {
                                return (
                                    <Col className="mt-5" key={value.id} >
                                        <Cards imgess={value.imgSrc} title={value.title}
                                            detail={value.details}
                                            link={value.GitHub}

                                        />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Project;