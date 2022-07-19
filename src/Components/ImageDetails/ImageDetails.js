import React, { useEffect } from 'react'

import './ImageDetails.css'

import { useDispatch, useSelector } from 'react-redux'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import empty from '../../Images/star-empty-small-icon.svg';
import half from '../../Images/star-half-small-icon.svg';
import fill from '../../Images/star-fill-small-icon.svg';

import { useNavigate } from "react-router-dom";

function aggregateStar(starNumber) {
    let stars = []
    let floor = Math.floor(starNumber)
    let ceil = Math.ceil(starNumber)
    for (let i = 0; i < floor; i++) {
        stars.push('fill')
    }

    if (floor != ceil) {
        stars.push('half')
    }
    for (let i = ceil; i < 5; i++) {
        stars.push('empty')
    }
    return stars
}

function starType(star) {
    switch (star) {
        case 'fill': return fill
        case 'empty': return empty
        case 'half': return half
    }
}


function ImageDetails() {
    let navigate = useNavigate();
   
    const selected = useSelector((state) => state.imageList.selected)
    const images = useSelector((state) => state.imageList.images)
    const userTest = {
        image: undefined,
        title: "",
        averageRating: '',
        stars: 5,
        comments: []
      }
    const image = selected == 0 ?  userTest: images.find(img => img.id == selected)

    useEffect(() => {
        if (selected == 0) {
            navigate("/")
        }
    },[])

    return (
        <React.Fragment>
            <div id="imageDetails">
                
                <Container>
                    <Row>
                        <Col className="button">
                            <div>
                                <Button variant="light"  onClick={function () { navigate('/') } }>Go back</Button>
                            </div>
                        </Col>
                    </Row>    
                    <Row>
                        <Col className="imageSelected">
                            <div>
                                <div className='container'>
                                    <div className="image"> </div>
                                    <div className="title">{image.title} </div>
                                    <div className="averageRating">Average rating {image.averageRating} </div>
                                    <div>
                                        {
                                            aggregateStar(image.stars).map((star) => {
                                                return (<img src={starType(star)} />)
                                            })
                                        }
                                    </div>
                                    
                                </div>
                            </div>                                                  
                        </Col>
                    </Row>
                    <Row>
                        <Col className="button">
                            <div>
                                <Button variant="dark">+Write Reviews</Button>
                            </div>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col className="button">
                            <div>
                                <Button variant="light">+See Reviews</Button>
                            </div>
                        </Col>
                    </Row>    
                    <Row>
                        <Col className="comments">
                            { 
                                image.comments.map((comment) => {
                                    return (
                                        <div>                                
                                            <div className='container'>
                                                <div className="title">{comment.username} </div>
                                                <div className="averageRating">Average rating {comment.comment} </div>
                                                <div>
                                                    {
                                                        aggregateStar(comment.stars).map((star) => {
                                                            return (<img src={starType(star)} />)
                                                        })
                                                    }
                                                </div>                                                
                                            </div>
                                        </div>       
                                    )
                                })
                            }
                                                                       
                        </Col>
                    </Row>  
                </Container>
            </div>
        </React.Fragment>
    )
}

export default ImageDetails;