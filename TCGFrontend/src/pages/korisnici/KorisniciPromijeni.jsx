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


        </Container>

    );

}