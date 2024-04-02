import { Link, useNavigate } from "react-router-dom";
import { RoutesNames } from "../../constants";
import RijetkostService from "../../services/RijetkostService";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function RijetkostiDodaj() {
    const navigate = useNavigate();
  
  
    async function dodajRijetkost(Rijetkost) {
      const odgovor = await RijetkostService.dodaj(Rijetkost);
      if (odgovor.ok) {
        navigate(RoutesNames.RIJETKOSTI_PREGLED);
      } else {
        alert(odgovor.poruka.errors);
      }
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const podaci = new FormData(e.target);
  
  
      dodajRijetkost({
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
              placeholder='Naziv rijetkosti'
              maxLength={255}
              required
            />
          </Form.Group>



          <Row>
            <Col>
              <Link className='btn btn-danger gumb' to={RoutesNames.RIJETKOSTI_PREGLED}>
                Odustani
              </Link>
            </Col>
            <Col>
              <Button variant='primary' className='gumb' type='submit'>
                Dodaj Rijetkost
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }