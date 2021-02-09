import React, { useState } from "react";
import { Modal, Button, Form, Col, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ListDataTable = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12 mt-3 mb-3 text-right">
          <button onClick={handleShow}>Create new row</button>

          <Modal show={show} onHide={handleClose} animation={false} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Create profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  name="firstName"
                  ref={register}
                  placeholder="First name"
                />
                <input name="lastName" ref={register} placeholder="Last name" />

                <button type="submit">SAVE</button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <button variant="secondary" onClick={handleClose}>
                Close
              </button>
              <button variant="primary" type="submit" onClick={handleClose}>
                Submit
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Ime</th>
                <th scope="col">Prezime</th>
                <th scope="col">Broj</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListDataTable;
