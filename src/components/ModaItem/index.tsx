import { useFormik, ErrorMessage, Formik  } from 'formik';
import * as Yup from "yup";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Container, Form, Row } from 'react-bootstrap';
import FormTextField from 'components/FormField';

const ModalItem = (props) => {

  const schema = Yup.object({
    id: Yup.number(),
    username: Yup.string()
      .required("Username é obrigatorio!"),
    email: Yup.string()
      .required("E-mail é obrigatorio!"),
    firstName: Yup.string()
      .required("Nome é obrigatorio!"),
    lastName: Yup.string()
      .required("Sobrenome é obrigatorio!"),
  })
  const initialValues = {
    id: props.data.id,
    username: props.data.username,
    email: props.data.email,
    firstName: props.data.firstName,
    lastName: props.data.lastName,
  }

  const handleSave = async (values, { setFieldTouched, validateForm }) => {
    const errors = await validateForm(values)
    const arrErrors = Object.keys(errors)

    if(arrErrors && arrErrors.length > 0) {
      arrErrors.forEach(key => {
        setFieldTouched(key, true, true)
      });
      return
    }

    props.onSave(values);

  };

  const initialIsValid = schema.isValidSync(initialValues)

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}
      size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
          {props.data?.id ? (
              <>
                <i className="fa fa-edit text-primary"></i>&nbsp;&nbsp;Editar
              </>
            ) : (
              <>
                <i className="fa fa-plus text-primary"></i>&nbsp;&nbsp;Criar
              </>
            )}{' '}
            Usuario
          </Modal.Title>
        </Modal.Header>
        <Formik
          enableReinitialize
          onSubmit={() => {}}
          initialValues={initialValues}
          validationSchema={schema}
        >
          {({
            values,
            setFieldTouched,
            validateForm
          }) => (
            <Form>
              <Modal.Body>
                <Container fluid>
                  <Row className="mb-3">
                    <FormTextField
                      as={Col}
                      md="6"
                      controlId="username"
                      label="Username"
                      type="text"
                      name="username"
                    />
                    <FormTextField
                      as={Col}
                      md="6"
                      controlId="email"
                      label="E-mail"
                      type="text"
                      name="email"
                    />
                  </Row>

                  <Row>
                    <FormTextField
                      as={Col}
                      md="6"
                      controlId="firstName"
                      label="Nome"
                      type="text"
                      name="firstName"
                    />
                    <FormTextField
                      as={Col}
                      md="6"
                      controlId="lastName"
                      label="Sobrenome"
                      type="text"
                      name="lastName"
                    />
                  </Row>
                </Container>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="danger" onClick={props.onHide}>
                  Voltar
                </Button>
                <Button variant="success" onClick={() => handleSave(values, { setFieldTouched, validateForm })}>
                  Salvar
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default ModalItem;
