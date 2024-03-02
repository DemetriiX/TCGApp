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



export default{
    getKorisnici
};