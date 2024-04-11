import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RoutesNames } from "../../constants";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SlicicaService from "../../services/SlicicaService";

export default function SlicicePromijeni() {
    const [slicica, setSlicica] = useState({});
  
    const routeParams = useParams();
    const navigate = useNavigate();
  
  
    async function dohvatiSlicicu() {
  
      await SlicicaService
        .getBySifra(routeParams.sifra)
        .then((response) => {
          console.log(response);
          setSlicica(response.data);
        })
        .catch((err) => alert(err.poruka));
  
    }
  
    useEffect(() => {
      dohvatiSlicicu();
    }, []);
  
    async function promijeniSlicicu(slicica) {
      const odgovor = await SlicicaService.promijeni(routeParams.sifra, slicica);
  
      if (odgovor.ok) {
        navigate(RoutesNames.SLICICE_PREGLED);
      } else {
        alert(odgovor.poruka);
  
      }
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const podaci = new FormData(e.target);
      promijeniSlicicu({
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
              defaultValue={slicica.naziv}
              maxLength={255}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='kolekcija'>
            <Form.Label>Kolekcija</Form.Label>
            <Form.Control
              type='text'
              name='kolekcija'
              defaultValue={slicica.kolekcija}
              maxLength={255}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='brojslicice'>
            <Form.Label>Broj sličice</Form.Label>
            <Form.Control
              type='text'
              name='brojslicice'
              defaultValue={slicica.brojslicice}
              maxLength={255}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='rijetkost'>
            <Form.Label>Rijetkost</Form.Label>
            <Form.Control
              type='text'
              name='rijetkost'
              defaultValue={slicica.rijetkost}
              maxLength={255}
              required
            />
          </Form.Group>

          <Form.Group controlId="posebnoizdanje">
            <Form.Check 
              label="Posebno izdanje"
              defaultChecked={slicica.posebnoizdanje}
              name="posebnoizdanje"
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
                Promijeni sličicu
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }