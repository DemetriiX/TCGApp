import { Link, useNavigate } from "react-router-dom";
import IgraService from "../../services/IgraService";
import { RoutesNames } from "../../constants";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function IgreDodaj() {
    const navigate = useNavigate();
  
  
    async function dodajIgru(Igra) {
      const odgovor = await IgraService.dodaj(Igra);
      if (odgovor.ok) {
        navigate(RoutesNames.IGRE_PREGLED);
      } else {
        alert(odgovor.poruka.errors);
      }
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const podaci = new FormData(e.target);
  
  
      dodajIgru({
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
              placeholder='Naziv igre'
              maxLength={255}
              required
            />
          </Form.Group>



          <Row>
            <Col>
              <Link className='btn btn-danger gumb' to={RoutesNames.IGRE_PREGLED}>
                Odustani
              </Link>
            </Col>
            <Col>
              <Button variant='primary' className='gumb' type='submit'>
                Dodaj igru
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }