import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RoutesNames } from "../../constants";
import IgraService from "../../services/IgraService";

export default function IgrePromijeni() {
    const [igra, setIgra] = useState({});
  
    const routeParams = useParams();
    const navigate = useNavigate();
  
  
    async function dohvatiIgru() {
  
      await IgraService
        .getBySifra(routeParams.sifra)
        .then((response) => {
          console.log(response);
          setIgra(response.data);
        })
        .catch((err) => alert(err.poruka));
  
    }
  
    useEffect(() => {
      dohvatiIgru();
    }, []);
  
    async function promijeniIgru(igra) {
      const odgovor = await IgraService.promijeni(routeParams.sifra, igra);
  
      if (odgovor.ok) {
        navigate(RoutesNames.IGRE_PREGLED);
      } else {
        alert(odgovor.poruka);
  
      }
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const podaci = new FormData(e.target);
      promijeniIgru({
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
              defaultValue={igra.naziv}
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
                Promijeni igru
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }