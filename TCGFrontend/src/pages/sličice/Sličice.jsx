import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SlicicaService from "../../services/SlicicaService";
import { Button, Container, Table } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import { RoutesNames } from "../../constants";
import { FaEdit, FaTrash } from "react-icons/fa";
import { GrValidate } from "react-icons/gr";

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
    
    function posebnoizdanje(slicica){
        if (slicica.posebnoizdanje==null) return 'grey';
        if(slicica.posebnoizdanje) return 'green';
        return 'red';
    }

    function posebnoizdanjeTitle(slicica){
        if (slicica.posebnoizdanje==null) return 'Nije definirano';
        if(slicica.posebnoizdanje) return 'Posebno izdanje';
        return 'Nije posebno izdanje';
    }

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
                        <th>Kolekcija</th>
                        <th>Broj sličice</th>
                        <th>Rijetkost</th>                                                                                                 
                        <th>Posebno izdanje</th>
                        <th>Akcije</th>
                    </tr>
                </thead>
                <tbody>
                    {Slicice && Slicice.map((slicica,index)=>(
                        <tr key={index}>
                            <td className="sredina">{slicica.naziv}</td>      
                            <td className="sredina">{slicica.kolekcijaNaziv}</td>
                            <td className="sredina">{slicica.brojslicice}</td>
                            <td className="sredina">{slicica.rijetkostNaziv}</td>
                            <td className="sredina"> <GrValidate 
                            size={30} 
                            color={posebnoizdanje(slicica)}
                            title={posebnoizdanjeTitle(slicica)}
                            />
                            </td>                                                    

                                             
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