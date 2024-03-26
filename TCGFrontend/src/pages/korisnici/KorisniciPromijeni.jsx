import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form} from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import KorisnikService from "../../services/KorisnikService";
import { RoutesNames } from "../../constants";


export default function KorisniciPromijeni(){

    const navigate = useNavigate();
    const routeParams = useParams();
    const [korisnik,setKorisnik] = useState({});
     
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
        const odgovor = await KorisnikServicesS.promijeniKorisnika(routeParams.sifra,korisnik);
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

        <Container>
           
           <Form onSubmit={handleSubmit}>

                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text"
                        defaultValue={korisnik.username}
                        name="username"
                    />
                </Form.Group>

                <Form.Group controlId="ime">
                    <Form.Label>Ime</Form.Label>
                    <Form.Control 
                        type="text"
                        defaultValue={korisnik.ime}
                        name="ime"
                    />
                </Form.Group>

                <Form.Group controlId="prezime">
                    <Form.Label>Prezime</Form.Label>
                    <Form.Control 
                        type="text"
                        defaultValue={korisnik.prezime}
                        name="prezime"
                    />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="text"
                        defaultValue={korisnik.email}
                        name="email"
                    />
                </Form.Group>

                <Form.Group controlId="mjesto">
                    <Form.Label>Mjesto</Form.Label>
                    <Form.Control 
                        type="text"
                        defaultValue={korisnik.mjesto}
                        name="mjesto"
                    />
                </Form.Group>

                <Form.Group controlId="drzava">
                    <Form.Label>Država</Form.Label>
                    <Form.Control 
                        type="text"
                        defaultValue={korisnik.drzava}
                        name="drzava"
                    />
                </Form.Group>

                

                <Row className="akcije">
                    <Col>
                        <Link 
                        className="btn btn-danger"
                        to={RoutesNames.KORISNICI_PREGLED}>Odustani</Link>
                    </Col>
                    <Col>
                        <Button
                            variant="primary"
                            type="submit"
                        >
                            Promijeni korisnika
                        </Button>
                    </Col>
                </Row>
                
           </Form>

        </Container>

    );

}