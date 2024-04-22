import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RoutesNames } from "../../constants";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SlicicaService from "../../services/SlicicaService";
import KolekcijaService from "../../services/KolekcijaService";
import RijetkostService from "../../services/RijetkostService";

export default function SlicicePromijeni() {
    const [slicica, setSlicica] = useState({});
  
    const routeParams = useParams();
    const navigate = useNavigate();

    const [kolekcije, setKolekcije] = useState([]);
    const [kolekcijaSifra, setKolekcijaSifra] = useState(0);

    const [rijetkosti, setRijetkosti] = useState([]);
    const [rijetkostiSifra, setRijetkostiSifra] = useState(0);

    async function dohvatiKolekcije(){
      await KolekcijaService.get().
      then((odgovor)=>{
        setKolekcije(odgovor.data);
        setKolekcijaSifra(odgovor.data[0].sifra);
      });
    }

    async function dohvatiRijetkosti(){
      await RijetkostService.get().
      then((o)=>{
        setRijetkosti(o.data);
        setRijetkostiSifra(o.data[0].sifra);
      });
    }
    

    async function dohvatiSlicicu() {
  
      await SlicicaService
        .getBySifra(routeParams.sifra)
        .then((response) => {
          console.log(response);
          setSlicica(response.data);
        })
        .catch((err) => alert(err.poruka));
  
    }

    async function ucitaj(){
      await dohvatiKolekcije();
      await dohvatiRijetkosti();
      await dohvatiSlicicu();
    }
  
    useEffect(() => {
      ucitaj();
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
        naziv: podaci.get('naziv'),
        kolekcijaSifra: parseInt(kolekcijaSifra),
        rijetkostSifra: parseInt(rijetkostiSifra),
        brojslicice: podaci.get('brojslicice'),
        posebnoizdanje: podaci.get('posebnoizdanje')=='on' ? true: false
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
            <Form.Select
              value={kolekcijaSifra}
              onChange={(e) => {
                setKolekcijaSifra(e.target.value);
              }}
            >
              {kolekcije &&
                kolekcije.map((kolekcija, index) => (
                  <option key={index} value={kolekcija.sifra}>
                    {kolekcija.naziv}
                  </option>
                ))}
            </Form.Select>
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