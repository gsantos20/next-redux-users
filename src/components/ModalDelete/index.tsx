import { Col, Container, Form, Row, Modal, Button } from 'react-bootstrap';

export const ModalDelete = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
            ATENÇÃO
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container fluid>
            <Row>
              <Col sm={12}>
                <h6>Tem certeza que quer desativar este registro?</h6>
                <div className="alert alert-secondary mt-3 centered">
                  <h5 className="fs-6 text-center text-danger mb-0">{props.message}</h5>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Cancelar
          </Button>
          <Button variant="success" onClick={props.onSave}>
            Desativar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
