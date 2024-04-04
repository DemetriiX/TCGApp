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
  
          
  
          <Row>
            <Col>
              <Link className='btn btn-danger gumb' to={RoutesNames.SLICICE_PREGLED}>
                Odustani
              </Link>
            </Col>
            <Col>
              <Button variant='primary' className='gumb' type='submit'>
                Promijeni igru
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }