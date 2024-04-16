import { Link, useNavigate } from "react-router-dom";
import { RoutesNames } from "../../constants";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SlicicaService from "../../services/SlicicaService";
import { useEffect, useState } from "react";
import KolekcijaService from "../../services/KolekcijaService";
import RijetkostService from "../../services/RijetkostService";

export default function SliciceDodaj() {
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
    
    async function ucitaj(){
      await dohvatiKolekcije();
      await dohvatiRijetkosti();
    }

    useEffect(()=>{
      ucitaj();
    },[]);

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
              placeholder='Naziv sličice'
              maxLength={255}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='kolekcija'>
            <Form.Label>Kolekcija</Form.Label>
            <Form.Select multiple={true}
            onChange={(e)=>{setKolekcijaSifra(e.target.value)}}
            >
            {kolekcije && kolekcije.map((k,index)=>(
              <option key={index} value={k.sifra}>
                {k.naziv}
              </option>
            ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className='mb-3' controlId='brojslicice'>
            <Form.Label>Broj sličice</Form.Label>
            <Form.Control
              type='text'
              name='brojslicice'
              placeholder='Broj sličice'
              maxLength={255}
              required
            />
          </Form.Group>

        <Form.Group className='mb-3' controlId='rijetkost'>
          <Form.Label>Rijetkost</Form.Label>
          <Form.Select
          onChange={(e)=>{setRijetkostiSifra(e.target.value)}}
          >
          {rijetkosti && rijetkosti.map((r,index)=>(
            <option key={index} value={r.sifra}>
              {r.naziv}
            </option>
          ))}
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="posebnoizdanje">
          <Form.Check 
            label="Posebno izdanje"
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
                Dodaj sličicu
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }