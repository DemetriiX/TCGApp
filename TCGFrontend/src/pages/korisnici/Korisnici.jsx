import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import KorisnikService from "../../services/KorisnikService";
import { IoIosAdd } from "react-icons/io";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RoutesNames } from "../../constants";


export default function Korisnici(){
    const [korisnici,setKorisnici] = useState();
    const navigate = useNavigate();

    async function dohvatiKorisnike(){
        await KorisnikService.getKorisnici()
        .then((res)=>{
            setKorisnici(res.data);
        })
        .catch((e)=>{
            alert(e);
        });
    }
    useEffect(()=>{
        dohvatiKorisnike();
    },[]);

    async function obrisiKorisnika(sifra){
        const odgovor = await KorisnikService.obrisiKorisnika(sifra);
        if (odgovor.ok){
            alert(odgovor.poruka.data.poruka);
            dohvatiKorisnike();
        }
    }

    return (

        <Container>
            <Link to={RoutesNames.KORISNICI_NOVI} className="btn btn-success gumb">
                <IoIosAdd
                size={25}
                /> Dodaj
            </Link>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Ime</th>
                        <th>Prezime</th>
                        <th>Email</th>
                        <th>Mjesto</th>
                        <th>Država</th>
                        <th>Akcija</th>
                    </tr>
                </thead>
                <tbody>
                    {korisnici && korisnici.map((korisnik,index)=>(
                        <tr key={index}>
                            <td className="desno">{korisnik.username}</td>
                            <td className="desno">{korisnik.ime}</td>
                            <td className="desno">{korisnik.prezime}</td>
                            <td className="desno">{korisnik.email}</td>
                            <td className="desno">{korisnik.mjesto}</td>
                            <td className="desno">{korisnik.država}</td>
                            <td className="sredina">
                                <Link to={RoutesNames.KORISNICI_PROMIJENI}>
                                    <FaEdit 
                                    size={25}
                                    />
                                </Link>
                                
                                    &nbsp;&nbsp;&nbsp;
                                <Link>
                                    <FaTrash  
                                    size={25}
                                    />
                                </Link>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>

    );

}