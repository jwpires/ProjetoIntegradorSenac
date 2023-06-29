export const api = {

    listarBancos:async () => {
         
         let response = await fetch("http://localhost:3001/banco");
         let json = await response.json(); 
 
         return json;
    }
}