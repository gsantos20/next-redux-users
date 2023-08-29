import { Container, Navbar } from "react-bootstrap";

export const Footer = () => {

  return (
    <footer className='footer'>
      <Navbar expand="lg" className="navbar fixed-bottom bg-dark p-3">
        <Container className="d-flex justify-content-center">
          <div className="col-5 col-md-2">
            <a href="https://irsptech.com.br" target="_blank">
              <img src="logo-footer-icon.svg" className="img-fluid w-75" />
            </a>
          </div>
        </Container>
      </Navbar>
    </footer>
  );
}
