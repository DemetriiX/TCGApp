import { Link, useNavigate } from "react-router-dom";
import { RoutesNames } from "../../constants";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SlicicaService from "../../services/SlicicaService";

export default function SliciceDodaj() {
    const navigate = useNavigate();
  
  
    async function dodajSlicicu(Slicica) {
      const odgovor = await SlicicaService.dodaj(Slicica);
      if (odgovor.ok) {
        navigate(RoutesNames.SLICICE_PREGLED);
      } else {
        alert(odgovor.poruka.errors);
      }
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const podaci = new FormData(e.target);
  
  
      dodajSlicicu({
        naziv: podaci.get('naziv')
      });
    }
  
    return (
      <Container className='mt-4'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='naziv'>
            <Form.Label>Naziv</Form.Label>
            <Form.Control
              type='text'
              name='naziv'
              placeholder='Naziv sličice'
              maxLength={255}
              required
            />
          </Form.Group>



          <Row>
            <Col>
              <Link className='btn btn-danger gumb' to={RoutesNames.SLICICE_PREGLED}>
                Odustani
              </Link>
            </Col>
            <Col>
              <Button variant='primary' className='gumb' type='submit'>
                Dodaj sličicu
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }