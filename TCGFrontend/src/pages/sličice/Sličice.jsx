import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SlicicaService from "../../services/SlicicaService";
import { Button, Container, Table } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import { RoutesNames } from "../../constants";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Slicice(){
    const [Slicice,setSlicice] = useState();
    let navigate = useNavigate();

    async function dohvatiSlicice(){
        await SlicicaService.get()
        .then((res)=>{
            setSlicice(res.data);
        })
        .catch((e) => {
            alert(e);
        });
    }

    useEffect(()=>{
        dohvatiSlicice();
    },[]);


    async function obrisiSlicicu(sifra) {
        const odgovor = await SlicicaService.obrisi(sifra);

        if (odgovor.ok) {
            dohvatiSlicice();
        } else {
            alert(odgovor.poruka);
        }
    }

    return (

        <Container>
            <Link to={RoutesNames.SLICICE_NOVI} className="btn btn-success gumb">
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
                    {Slicice && Slicice.map((slicica,index)=>(
                        <tr key={index}>
                            <td>{slicica.naziv}</td>                        
                            <td className="sredina">
                                    <Button
                                        variant='primary'
                                        onClick={()=>{navigate(`/slicice/${slicica.sifra}`)}}
                                    >
                                        <FaEdit 
                                    size={25}
                                    />
                                    </Button>
                               
                                
                                    &nbsp;&nbsp;&nbsp;
                                    <Button
                                        variant='danger'
                                        onClick={() => obrisiSlicicu(slicica.sifra)}
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