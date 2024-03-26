import { App } from "../constants"
import { httpService } from "./httpService";
import {Buffer} from 'buffer';

// Set username and password
const username = '11164058';
const password = '60-dayfreetrial';

// Encode username and password in base64
const encoded = Buffer.from(username + ':' + password).toString('base64');

async function getKorisnici(){
    return await httpService.get('/Korisnik',{
        headers: {
            'Authorization': 'Basic ' + encoded
        }
    })
    .then((res)=>{
        if(App.DEV) console.table(res.data);

        return res;
    }).catch((e)=>{
        console.log(e);
    });
}

async function obrisiKorisnika(sifra){
    return await httpService.delete('/Korisnik/' + sifra)
    .then((res)=>{
        return {ok: true, poruka: res};
    }).catch((e)=>{
        console.log(e);
    });
}

async function dodajKorisnika(korisnik){
    const odgovor = await httpService.post('/Korisnik',korisnik)
    .then(()=>{
        return {ok: true, poruka: 'Uspješno dodano'}
    })
    .catch((e)=>{
        console.log(e.response.data.errors);
        return {ok: false, poruka: 'Greška'}
    });
    return odgovor;
}

async function promijeniKorisnika(sifra,korisnik){
    const odgovor = await httpService.put('/Korisnik/'+sifra,korisnik)
    .then(()=>{
        return {ok: true, poruka: 'Uspješno promijenjeno'}
    })
    .catch((e)=>{
        console.log(e.response.data.errors);
        return {ok: false, poruka: 'Greška'}
    });
    return odgovor;
}

async function getBySifra(sifra){
    return await httpService.get('/Korisnik/' + sifra)
    .then((res)=>{
        if(App.DEV) console.table(res.data);

        return res;
    }).catch((e)=>{
        console.log(e);
        return {poruka: e}
    });
}



export default{
    getKorisnici,
    obrisiKorisnika,
    dodajKorisnika,
    promijeniKorisnika,
    getBySifra
};
