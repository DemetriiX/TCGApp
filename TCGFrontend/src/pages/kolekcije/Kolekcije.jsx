import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import KolekcijaService from "../../services/KolekcijaService";
import { Button, Container, Table } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import { RoutesNames } from "../../constants";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Kolekcije(){
    const [Kolekcije,setKolekcije] = useState();
    let navigate = useNavigate();

    async function dohvatiKolekcije(){
        await KolekcijaService.get()
        .then((res)=>{
            setKolekcije(res.data);
        })
        .catch((e) => {
            alert(e);
        });
    }

    useEffect(()=>{
        dohvatiKolekcije();
    },[]);


    async function obrisiKolekciju(sifra) {
        const odgovor = await KolekcijaService.obrisi(sifra);

        if (odgovor.ok) {
            dohvatiKolekcije();
        } else {
            alert(odgovor.poruka);
        }
    }

    return (

        <Container>
            <Link to={RoutesNames.KOLEKCIJE_NOVI} className="btn btn-success gumb">
                <IoIosAdd
                size={25}
                /> Dodaj
            </Link>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Naziv</th>                                                                                        
                        <th>Akcija</th>
                    </tr>
                </thead>
                <tbody>
                    {Kolekcije && Kolekcije.map((kolekcija,index)=>(
                        <tr key={index}>
                            <td>{kolekcija.naziv}</td>                        
                            <td className="sredina">
                                    <Button
                                        variant='primary'
                                        onClick={()=>{navigate(`/kolekcije/${kolekcija.sifra}`)}}
                                    >
                                        <FaEdit 
                                    size={25}
                                    />
                                    </Button>
                               
                                
                                    &nbsp;&nbsp;&nbsp;
                                    <Button
                                        variant='danger'
                                        onClick={() => obrisiKolekciju(kolekcija.sifra)}
                                    >
                                        <FaTrash
                                        size={25}/>
                                    </Button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>

    );

}