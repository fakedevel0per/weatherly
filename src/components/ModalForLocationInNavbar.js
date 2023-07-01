import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalForLocationInNavbar = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = (e) => {
        e.preventDefault();
        setShow(true);
    }
    const handleGetGeoLocation = () => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(setPosition);
            } else {
              alert("Geolocation is not supported by this browser.");
            }   
    }
    const setPosition = (position) => {
        props.setGps({latitude: position.coords.latitude, longitude: position.coords.longitude});
        props.setIsGPSon(true);
        handleClose();
    }
  
    return (
      <>
        <button className="btn btn-sm btn-outline-warning text-nowrap me-3" style={{"width": 'auto'}} onClick={handleShow}><LocationOnIcon color="warning" fontSize="small" />Use GPS</button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Use Current Location</Modal.Title>
          </Modal.Header>
          <Modal.Body>Allow GPS permission to get precise weather data!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleGetGeoLocation}>
              Give Permission
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalForLocationInNavbar;
