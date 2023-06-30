export const api = {

    listarBancos:async () => {
         
         let response = await fetch("http://localhost:3000/bancos");
         let json = await response.json(); 
 
         return json;
    }
}