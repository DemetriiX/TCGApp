import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import KolekcijaService from "../../services/KolekcijaService";
import { RoutesNames } from "../../constants";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function KolekcijePromijeni() {
    const [kolekcija, setKolekcija] = useState({});
  
    const routeParams = useParams();
    const navigate = useNavigate();
  
  
    async function dohvatiKolekciju() {
  
      await KolekcijaService
        .getBySifra(routeParams.sifra)
        .then((response) => {
          console.log(response);
          setKolekcija(response.data);
        })
        .catch((err) => alert(err.poruka));
  
    }
  
    useEffect(() => {
      dohvatiKolekciju();
    }, []);
  
    async function promijeniKolekciju(kolekcija) {
      const odgovor = await KolekcijaService.promijeni(routeParams.sifra, kolekcija);
  
      if (odgovor.ok) {
        navigate(RoutesNames.KOLEKCIJE_PREGLED);
      } else {
        alert(odgovor.poruka);
  
      }
    }
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const podaci = new FormData(e.target);
      promijeniKolekciju({
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
              defaultValue={kolekcija.naziv}
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
                Promijeni kolekciju
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }