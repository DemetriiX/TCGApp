import { App } from "../constants";
import { httpService } from "./httpService";

const naziv = 'Rijetkost';

async function get(){
    return await httpService.get('/' + naziv)
    .then((res)=>{
        if(App.DEV) console.table(res.data);

        return res;
    }).catch((e)=>{
        console.log(e);
    });
}

async function obrisi(sifra) {
    const odgovor = await httpService
    .delete('/' + naziv + '/' + sifra)
    .then(() => {
        return { ok: true, poruka: 'Obrisao uspješno'};
    })
    .catch((e)=>{
        console.log(e);
        return { ok: false, poruka: e.response.data};
    });

    return odgovor;
}

async function dodaj(entitet) {
    const odgovor = await httpService
    .post('/'+ naziv, entitet)
    .then(()=>{
        console.log('Unio rijetkost');
        return { ok: true, poruka: 'Unio rijetkost'};
    })
    .catch((error) => {
        console.log(error);
        return { ok: false, poruka: error.response.data};
    });

    return odgovor;
}

async function getBySifra(sifra){
    return await httpService
    .get('/' + naziv + '/' + sifra)
    .then((res) => res)
    .catch((e) => {
        console.log(e);

        return { ok: false, poruka: e.response.data};

    });

}

async function promijeni(sifra, entitet) {
    const odgovor = await httpService
      .put('/' + naziv + '/' + sifra, entitet)
      .then(() => {
        return { ok: true, poruka: 'Promijenio' };
      })
      .catch((error) => {
        return { ok: false, poruka: error.response.data };
      });
  
    return odgovor;
  }

export default{
    get,
    obrisi,
    dodaj,
    getBySifra,
    promijeni
};