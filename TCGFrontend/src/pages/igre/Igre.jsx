import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RoutesNames } from "../../constants";
import { IoIosAdd } from "react-icons/io";
import { FaEdit, FaTrash } from "react-icons/fa";
import IgraService from "../../services/IgraService";

export default function Igre(){
    const [Igre,setIgre] = useState();
    let navigate = useNavigate();

    async function dohvatiIgre(){
        await IgraService.get()
        .then((res)=>{
            setIgre(res.data);
        })
        .catch((e) => {
            alert(e);
        });
    }

    useEffect(()=>{
        dohvatiIgre();
    },[]);


    async function obrisiIgru(sifra) {
        const odgovor = await IgraService.obrisi(sifra);

        if (odgovor.ok) {
            dohvatiIgre();
        } else {
            alert(odgovor.poruka);
        }
    }

    return (

        <Container>
            <Link to={RoutesNames.IGRE_NOVI} className="btn btn-success gumb">
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
                    {Igre && Igre.map((igra,index)=>(
                        <tr key={index}>
                            <td>{igra.naziv}</td>                        
                            <td className="sredina">
                                    <Button
                                        variant='primary'
                                        onClick={()=>{navigate(`/igre/${igra.sifra}`)}}
                                    >
                                        <FaEdit 
                                    size={25}
                                    />
                                    </Button>
                               
                                
                                    &nbsp;&nbsp;&nbsp;
                                    <Button
                                        variant='danger'
                                        onClick={() => obrisiIgru(igra.sifra)}
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