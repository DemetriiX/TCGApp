import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RijetkostService from "../../services/RijetkostService";
import { RoutesNames } from "../../constants";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function RijetkostiPromijeni() {
  const [rijetkost, setRijetkost] = useState({});

  const routeParams = useParams();
  const navigate = useNavigate();


  async function dohvatiRijetkost() {

    await RijetkostService
      .getBySifra(routeParams.sifra)
      .then((response) => {
        console.log(response);
        setRijetkost(response.data);
      })
      .catch((err) => alert(err.poruka));

  }

  useEffect(() => {
    dohvatiRijetkost();
  }, []);

  async function promijeniRijetkost(rijetkost) {
    const odgovor = await RijetkostService.promijeni(routeParams.sifra, rijetkost);

    if (odgovor.ok) {
      navigate(RoutesNames.RIJETKOSTI_PREGLED);
    } else {
      alert(odgovor.poruka);

    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const podaci = new FormData(e.target);
    promijeniRijetkost({
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
            defaultValue={rijetkost.naziv}
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
              Promijeni rijetkost
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}