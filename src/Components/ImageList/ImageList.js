import React from 'react'

import './ImageList.css'

import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useDispatch, useSelector } from 'react-redux'

import { select } from '../../DataSource/State/imageListSlice'

import empty from '../../Images/star-empty-small-icon.svg';
import half from '../../Images/star-half-small-icon.svg';
import fill from '../../Images/star-fill-small-icon.svg';


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

// This could be move to its own piece later
function ImageList() {
    const dispatch = useDispatch()
    const images = useSelector((state) => state.imageList.images)
    const activeUser = useSelector((state) => state.authentication.activeUser)
    let rows = []
    let cols = []
    if (activeUser == undefined) {
        const userTest = {
            image: undefined,
            title: "",
            averageRating: '',
            stars: 5
          }
        for (let i = 0; i < 6; i++) {
            if (i > 0 && i % 2 == 0) {
                rows.push(cols)
                cols = []
            }
            cols.push(userTest)
        }
        rows.push(cols)
    } else {
        for (let i = 0; i < images.length; i++) {
            if (i > 0 && i % 2 == 0) {
                rows.push(cols)
                cols = []
            }
            cols.push(images[i])
        }
        rows.push(cols)
    }
    return (
        <React.Fragment>
            <div id="imageList">
                <Container>
                    {
                        rows.map((row) => {
                            return (
                            <Row>
                                {
                                    row.map((col) => {
                                        return (
                                        <Col as={NavLink} to={ col.id == undefined ? '/': '/details'} onClick={function () { dispatch(select(col.id)) } }>
                                            <div>
                                                <div className='container'>
                                                    <div className="image"> </div>
                                                    <div className="title">{col.title} </div>
                                                    <div className="averageRating">Average rating {col.averageRating} </div>
                                                    <div>
                                                        {
                                                            aggregateStar(col.stars).map((star) => {
                                                                return (<img src={starType(star)} />)
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        )
                                    })
                                }
                            </Row>
                            )
                        })
                    }
                </Container>
            </div>
        </React.Fragment>
    )
}
export default ImageList;