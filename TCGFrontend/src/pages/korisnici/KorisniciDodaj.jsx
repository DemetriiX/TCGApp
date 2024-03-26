import { Button, Col, Container, Form, Row} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import KorisnikService from "../../services/KorisnikService";
import { RoutesNames } from "../../constants";

export default function KorisniciDodaj(){
    const navigate = useNavigate();

    async function dodajKorisnika(korisnik){
        const odgovor = await KorisnikService.dodajKorisnika(korisnik);
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
        //console.log(podaci.get('username'));

        const korisnik = 
        {
            username: podaci.get('username'),
            ime: podaci.get('ime'),
            prezime: podaci.get('prezime'),
            email: podaci.get('email'),
            mjesto: podaci.get('mjesto'),
            drzava: podaci.get('drzava'),
          };

          //console.log(JSON.stringify(korisnik));
          dodajKorisnika(korisnik);


    }    


    return (

        <Container>
           
           <Form onSubmit={handleSubmit}>

                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text"
                        name="username"
                    />
                </Form.Group>

                <Form.Group controlId="ime">
                    <Form.Label>Ime</Form.Label>
                    <Form.Control 
                        type="text"
                        name="ime"
                    />
                </Form.Group>

                <Form.Group controlId="prezime">
                    <Form.Label>Prezime</Form.Label>
                    <Form.Control 
                        type="text"
                        name="prezime"
                    />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="text"
                        name="email"
                    />
                </Form.Group>

                <Form.Group controlId="mjesto">
                    <Form.Label>Mjesto</Form.Label>
                    <Form.Control 
                        type="text"
                        name="mjesto"
                    />
                </Form.Group>

                <Form.Group controlId="drzava">
                    <Form.Label>Država</Form.Label>
                    <Form.Control 
                        type="text"
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
                            Dodaj korisnika
                        </Button>
                    </Col>
                </Row>
                
           </Form>

        </Container>

    );

}