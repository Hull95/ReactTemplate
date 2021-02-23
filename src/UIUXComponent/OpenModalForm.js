import { Modal, Button, Tab, Tabs } from "react-bootstrap";
import React, { useState } from "react";

const OpenModalForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [key, setKey] = useState("first");

  return (
    <div>
      <button
        className="btn btn-primary open-form"
        variant="primary"
        onClick={handleShow}>
        Form 1
      </button>

      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Naslov</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}>
            <Tab eventKey="first" title="First">
              <div className="form-row mt-3">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6  col-lx-5 mb-3">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6  col-lx-5 mb-3">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6  col-lx-5 mb-3">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6  col-lx-5 mb-3">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <label>Naziv 1</label>
                  <textarea type="text" rows="4" className="form-control" />
                </div>
              </div>
            </Tab>
            <Tab eventKey="second" title="Second">
              <div className="form-row mt-3">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                  <label>Naziv 1</label>
                  <textarea type="text" className="form-control" />
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <div className="form-row mt-3">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6  col-lx-5 mb-3">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col-12 col-md-6 col-lg-6">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col-12 col-md-6 col-lg-6">
                  <label>Naziv 1</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <label>Naziv 1</label>
                  <textarea type="text" rows="3" className="form-control" />
                </div>
              </div>
              <div className="form-row mt-3 d-flex">
                <div className="col-12 col-md-6 col-lg-6 ml-auto">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="validatedCustomFile"
                    />
                    <label className="custom-file-label">Choose file...</label>
                    <div className="invalid-feedback">
                      Example invalid custom file feedback
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OpenModalForm;
