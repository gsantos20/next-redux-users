import { Container, Navbar } from "react-bootstrap";

export const Header = () => {

  return (
    <header className='header'>
      <Navbar expand="lg" className="bg-body-tertiary p-3">
        <Container className="d-flex justify-content-between">
            <Navbar.Brand href="#home">
              <i className="fas fa-bars"></i>
            </Navbar.Brand>

            <div className="col-5 col-md-2">
              <a href="https://irsptech.com.br" target="_blank">
                <img src="logo-icon.svg" className="img-fluid w-75" />
              </a>
            </div>
        </Container>
      </Navbar>
    </header>
  );
}
