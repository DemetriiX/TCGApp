import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RijetkostService from "../../services/RijetkostService";
import { Button, Container, Table } from "react-bootstrap";
import { RoutesNames } from "../../constants";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";

export default function Rijetkosti(){
    const [Rijetkosti,setRijetkosti] = useState();
    let navigate = useNavigate();

    async function dohvatiRijetkosti(){
        await RijetkostService.get()
        .then((res)=>{
            setRijetkosti(res.data);
        })
        .catch((e) => {
            alert(e);
        });
    }

    useEffect(()=>{
        dohvatiRijetkosti();
    },[]);


    async function obrisiRijetkost(sifra) {
        const odgovor = await RijetkostService.obrisi(sifra);

        if (odgovor.ok) {
            dohvatiRijetkosti();
        } else {
            alert(odgovor.poruka);
        }
    }

    return (

        <Container>
            <Link to={RoutesNames.RIJETKOSTI_NOVI} className="btn btn-success gumb">
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
                    {Rijetkosti && Rijetkosti.map((rijetkost,index)=>(
                        <tr key={index}>
                            <td>{rijetkost.naziv}</td>                        
                            <td className="sredina">
                                    <Button
                                        variant='primary'
                                        onClick={()=>{navigate(`/rijetkosti/${rijetkost.sifra}`)}}
                                    >
                                        <FaEdit 
                                    size={25}
                                    />
                                    </Button>
                               
                                
                                    &nbsp;&nbsp;&nbsp;
                                    <Button
                                        variant='danger'
                                        onClick={() => obrisiRijetkost(rijetkost.sifra)}
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