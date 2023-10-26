
export class Corre{
  get(url) {
    return new Promise(async (resolve, reject)=>{ 
      const respond = await fetch(url);
      const data = await respond.json();
      if(respond.ok){
        resolve(JSON.stringify(data));
      }else{
        reject(`Get Error: ${respond.status}`);
      }
    })
  }

  /* <<< HTTP POST request >>> */
  post(url, data) {

    return new Promise(async (resolve, reject)=>{ 

      const respond = await fetch(url,{
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(data)
      });

      const dataa = await respond.json();

      if(respond.ok){
        resolve(JSON.stringify(dataa));
      }else{
        reject(`Get Error: ${respond.status}`);
      }
    })
  }

  /* <<< HTTP PUT request >>> */
  put(url, data) {
    return new Promise(async (resolve, reject)=>{ 

      const respond = await fetch(url,{
        method: "PUT",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(data)
      });

      const dataa = await respond.json();

      if(respond.ok){
        resolve(JSON.stringify(dataa));
      }else{
        reject(`Put Error: ${respond.status}`);
      }
    })
  }

  /* <<< HTTP DELETE request >>> */
  delete(url) {
    return new Promise(async (resolve, reject)=>{ 

      const respond = await fetch(url,{
        method: "DELETE",
        headers: {"content-type": "application/json"},
      });

      const dataa = await respond.json();

      if(respond.ok){
        resolve(JSON.stringify(dataa));
      }else{
        reject(`Put Error: ${respond.status}`);
      }
    }) 
  }

  /* <<< HTTP PATCH request >>> */
  patch(url, data) {
    return new Promise(async (resolve, reject)=>{ 

      const respond = await fetch(url,{
        method: "PATCH",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(data)
      });

      const dataa = await respond.json();

      if(respond.ok){
        resolve(JSON.stringify(dataa));
      }else{
        reject(`Patch Error: ${respond.status}`);
      }
    })
  }

}