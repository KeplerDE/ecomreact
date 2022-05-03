import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
 
function ProductScreen({ match }) {
    const product_id = useParams();
    const product = products.find((p) => p._id === product_id.id)
    return (
        <div>
            <Link to='/home' className='btn btn-light my-3'>Go Back</Link> 
            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
            </Row>
            <Col md={5}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Price: £{product.price}
                    </ListGroup.Item>
                </ListGroup>    

                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </Col>       

            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>$ {product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup> 
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>                                
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.countInStock == 0}>
                                Add to Cart
                            </Button>

                        </ListGroup.Item>
                    </ListGroup>       
                </Card>
            </Col>            
        </div>
    )
}

export default ProductScreen