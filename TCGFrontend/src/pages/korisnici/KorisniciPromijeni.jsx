import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form} from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import KorisnikService from "../../services/KorisnikService";
import { RoutesNames } from "../../constants";



export default function KorisniciPromijeni(){

    const navigate = useNavigate();
    const routeParams = useParams();

    const [korisnik, setKorisnik] = useState({});

    async function dohvatiKorisnika() {
        await KorisnikService.getBySifra(routeParams.sifra)
            .then((res) => {
                setKorisnik(res.data)
            })
            .catch((e) => {
                alert(e.poruka);
            });
    }

    useEffect(() => {
        //console.log("useEffect")
        dohvatiKorisnika();
    }, []);

    async function promijeniKorisnika(korisnik) {
        const odgovor = await KorisnikService.promijeniKorisnika(routeParams.sifra, korisnik);
        if (odgovor.ok) {
            navigate(RoutesNames.KORISNICI_PREGLED);
        } else {
            console.log(odgovor);
            alert(odgovor.poruka);
        }
    }

 
     
    async function dohvatiKorisnika(){
        await KorisnikService.getBySifra(routeParams.sifra)
        .then((res)=>{
            setKorisnik(res.data)
        })
        .catch((e)=>{
            alert(e.poruka);
        });
    }

    useEffect(()=>{
        //console.log("useEffect")
        dohvatiKorisnika();
    },[]);

    async function promijeniKorisnika(korisnik){
        const odgovor = await KorisnikService.promijeniKorisnika(routeParams.sifra,korisnik);
        if(odgovor.ok){
          navigate(RoutesNames.KORISNICI_PREGLED);
        }else{
          console.log(odgovor);
          alert(odgovor.poruka);
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        const podaci = new FormData(e.target);

        const korisnik = 

        {
            username: podaci.get('username'),
            ime: podaci.get('ime'),
            prezime: podaci.get('prezime'),
            email: podaci.get('email'),
            mjesto: podaci.get('mjesto'),
            drzava: podaci.get('drzava')

        };

        //console.log(JSON.stringify(korisnik));
        promijeniKorisnika(korisnik);
          
    }

    return (

    <Container className='mt-4'>
      <Form onSubmit={handleSubmit}>

        <Form.Group className='mb-3' controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            name='username'
            defaultValue={korisnik.username}
            maxLength={255}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='ime'>
            <Form.Label>Ime</Form.Label>
            <Form.Control
                type='text'
                name='ime'
                defaultValue={korisnik.ime}
                maxLength={255}
                required
            />
        </Form.Group>

        <Form.Group className='mb-3' controlId='prezime'>
            <Form.Label>Prezime</Form.Label>
            <Form.Control
                type='text'
                name='prezime'
                defaultValue={korisnik.prezime}
                maxLength={255}
                required
            />
        </Form.Group>

        <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
                type='text'
                name='email'
                defaultValue={korisnik.email}
                maxLength={255}
                required
            />
        </Form.Group>

        <Form.Group className='mb-3' controlId='mjesto'>
            <Form.Label>Mjesto</Form.Label>
            <Form.Control
                type='text'
                name='mjesto'
                defaultValue={korisnik.mjesto}
                maxLength={255}
                required
            />
        </Form.Group>

        <Form.Group className='mb-3' controlId='drzava'>
            <Form.Label>Država</Form.Label>
            <Form.Control
                type='text'
                name='drzava'
                defaultValue={korisnik.drzava}
                maxLength={255}
                required
            />
        </Form.Group>

        

        <Row>
          <Col>
            <Link className='btn btn-danger gumb' to={RoutesNames.KORISNICI_PREGLED}>
              Odustani
            </Link>
          </Col>
          <Col>
            <Button variant='primary' className='gumb' type='submit'>
              Promijeni korisnika
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>

    );

}