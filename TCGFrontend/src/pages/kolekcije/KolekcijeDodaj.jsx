import {Link, useNavigate } from "react-router-dom";
import KolekcijaService from "../../services/KolekcijaService";
import { RoutesNames } from "../../constants";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function KolekcijeDodaj() {
    const navigate = useNavigate();
  
  
    async function dodajKolekciju(Kolekcija) {
      const odgovor = await KolekcijaService.dodaj(Kolekcija);
      if (odgovor.ok) {
        navigate(RoutesNames.KOLEKCIJE_PREGLED);
      } else {
        alert(odgovor.poruka.errors);
      }
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const podaci = new FormData(e.target);
  
  
      dodajKolekciju({
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
              placeholder='Naziv kolekcije'
              maxLength={255}
              required
            />
          </Form.Group>



          <Row>
            <Col>
              <Link className='btn btn-danger gumb' to={RoutesNames.KOLEKCIJE_PREGLED}>
                Odustani
              </Link>
            </Col>
            <Col>
              <Button variant='primary' className='gumb' type='submit'>
                Dodaj kolekciju
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }