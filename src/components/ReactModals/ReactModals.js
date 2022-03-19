import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ReactModals = (props) => {
    const { title, image, price, description, category } = props.product
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="info" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <div className="d-flex flex-column align-items-center">
                    <img src={image} className="w-50" alt="" />
                    <h2>{title.slice(0, 20)}</h2>
                    <h3>Category {category}</h3>
                    <h3>Price {price}</h3>
                </div>
                <Modal.Body>{description}</Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ReactModals;