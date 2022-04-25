import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Form, Accordion, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {checkToken} from "../Services/DataService";




export const Dashboard = () => {

    let navigate= useNavigate();
    useEffect( () => {
        //on load useEffect is the first thing to fire.
        //Put any on load logic here
        //Will only fire once if nothing is inside the dependency array. or else if there is something in the array, when the state of that vlue changes the use effect will fire again
        if (!checkToken()) {
            navigate("/ThirdPage");
        }
    }, [])




    const [blogItems, setBlogItems] = useState([{
        Id: 1,
        Title: "Growing Tomatos",
        Publisher: "Walaa AlSalmi",
        Date: "01-12-2022",
        Text: "Devote a prime, sunny spot to growing tomatoes. Tomatoes need at least 6 to 8 hours of sun to bring out their best flavors. You will need to stake, trellis, or cage most tomato plants to keep them off the ground. Decide on a support plan before you set out your plants, then add that support directly after planting. You will need to stake, trellis, or cage most tomato plants to keep them off the ground. Decide on a support plan before you set out your plants.",
        Image:
            "https://www.almanac.com/sites/default/files/styles/landscape/public/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg?itok=m9c3T-XV",
        published: false
    },

    {
        Id: 2,
        Title: "Growing Peppers",
        Date: "01-06-2022",
        Publisher: "Tom Finland",
        Text: "Set pepper plant seedlings out after the last spring frost. They grow well in raised beds, containers, and in-ground gardens. Plant them 18 to 24 inches apart in a sunny, well-drained spot. Pepper plants need at least 6-8 hours of sunlight per day. They grow well in raised beds, containers, and in-ground gardens. Plant them 18 to 24 inches apart in a sunny, well-drained spot. Pepper plants need at least 6-8 hours of sunlight per day.",
        Image:
            "https://www.farmersalmanac.com/wp-content/uploads/2020/11/Planting-Guide-Bell-Peppers-A105431708.jpg",
        published: true
    },
    {
        Id: 3,
        Title: "Growing Eggplants",
        Publisher: "Sam Bilton",
        Date: "12-24-2021",
        Text: "Start eggplant seeds indoors up to 10 weeks before the last frost date. Plant the seeds 1/4inch deep, water after planting and cover loosely with plastic to retain moisture. Transplant the seedlings to the garden when soil temperatures reach 60 degrees. Transplant the seedlings to the garden when soil temperatures reach 60 degrees.",
        Image:
            "https://cleangreensimple.com/wp-content/uploads/2020/05/growing-eggplant.jpg",
        published: false
    },
    {
        Id: 4,
        Title: "Growing Zucchinis",
        Publisher: "Tina Freedman",
        Date: "12-15-2021",
        Text: "Zucchini needs full sun (at least 6 to 8 hours) and consistently moist soil that is high in organic matter. Some zucchini varieties are vining types that require a trellis or a lot of room to sprawl. There are also bush types suitable for container gardening and small space gardening. There are also bush types suitable for container gardening and small space gardening.",
        Image:
            "https://greenhouseemporium.com/wp-content/uploads/2020/02/How_to_Grow_Zucchini_2.jpg",
        published: true
    }]);

    //Form you 
    const [blogTitle, setBlogTitle] = useState('');
    const [BlogImage, setBlogImage] = useState('');
    const [blogDescription, setBlogDescription] = useState('');
    const [blogCategory, setBlogCategory] = useState('');
    const [blogTags, setBlogTags] = useState('');
    //End Form
    //Bools
    const [show, setShow] = useState(false);
    const [editBool, setEditBool] = useState(false);


    //Functions
    //For Modals
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true);
        if (e.target.textContent == "Add Blog Item") {
            setEditBool(false);
            setBlogTitle("");
            setBlogDescription("");
            setBlogCategory("");
            setBlogTags('');
        } else {
            setEditBool(true);
            setBlogTitle("My Awesome Title");
            setBlogDescription("My Awesome Description");
            setBlogCategory("Sports");
            setBlogTags('Tag1, Tag2, Tag3');
        }

    }
    //End Modal
    //Add and edit
    const handleSetAdd = () => setEditBool(false);
    const handleSetEdit = () => setEditBool(true);
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{editBool ? "Edit" : "Add"} Blog Item</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Title" onChange={(e) => setBlogTitle(e.target.value)} value={blogTitle} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="Description">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="text" placeholder="Description" value={blogDescription} onChange={({ target: { value } }) => setBlogDescription(value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Category">
                                        <Form.Select aria-label="Pick a Category" value={blogCategory} onChange={(e) => setBlogCategory(e.target.value)}>
                                            <option>Pick a Category</option>
                                            <option value="1">Food</option>
                                            <option value="2">Tech</option>
                                            <option value="3">Sports</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Description">
                                        <Form.Label>Enter tags seperated by a comma</Form.Label>
                                        <Form.Control type="text" placeholder="Enter a Tag seperated by a comma" value={blogTags} onChange={(e) => setBlogTags(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Description">
                                        <Form.Label>Pick an Image</Form.Label>
                                        <Form.Control type="File" accept='image/png, image/jpg' placeholder="" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>












                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    {editBool ? "Save Changes" : "Save"}
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    {editBool ? "Save Changes" : "Save"} and Publish
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <Button onClick={handleShow} >Add Blog Item</Button>
                        <Button onClick={handleShow}>Edit Blog Item</Button>
                    </Col>
                </Row>

                <Row>
                    <Col className="mt-5">
                        <Accordion defaultActiveKey={['0','1']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Published</Accordion.Header>
                                <Accordion.Body>
                                    {
                                        blogItems.map((item, i) => {
                                            return (
                                                <>
                                                    {
                                                        item.published ?
                                                        <ListGroup.Item key={i}>
                                                            <Col md={6}>
                                                                {item.Title}
                                                            </Col>
                                                            <Col md={6}>
                                                                <Button variant="danger">Delete</Button>
                                                                <Button variant="primary">Edit</Button>
                                                                <Button variant="warning">Unpublish</Button>
                                                            </Col>
                                                        </ListGroup.Item>
                                                    :
                                                    null
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Unpublished</Accordion.Header>
                                <Accordion.Body>
                                    {
                                         blogItems.map((item, i) => {
                                            return (
                                                <>
                                                    {
                                                        !item.published ?
                                                            <ListGroup.Item key={i}>
                                                                <Col md={6}>
                                                                    {item.Title}
                                                                </Col>
                                                                <Col md={6}>
                                                                    <Button variant="danger">Delete</Button>
                                                                    <Button variant="primary">Edit</Button>
                                                                    <Button variant="warning">Publish</Button>
                                                                </Col>
                                                            </ListGroup.Item>
                                                        :
                                                        null
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>

            </Container>
        </>


        //{target: {value}}

    )
}