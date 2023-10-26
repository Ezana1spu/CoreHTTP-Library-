import {Corre} from './coreHTTP.js';
const http = new Corre(); 

function ProcessGet(err, res) {
  let output;
  if (err) {
    output = `<p>${err}</p>`;
  } else {
    const users = JSON.parse(res);
    output = "<ul style=\"list-style:none\">";

    try{
      users.forEach((user) => {
        output += `<li>User ${user.id} - ${user.body}</li>`
      })

      output += "</ul>";
    }catch(error){
      output += `<li>User ${users.id} - ${users.body}</li>`;
      output += "</ul>";
    }
  }
  document.querySelector("#response").innerHTML = output;
}

function ProcessPost(err, res) {
  let output;
  if (err) {
    output = `<p>${err}</p>`;
  } else {
    const users = JSON.parse(res);
    output = "<ul style=\"list-style:none\">";
    output += `<li>User ${users.id} - ${users.name}</li>`
    output += "</ul>";
  }
  document.querySelector("#response").innerHTML = output;
}

function ProcessPut(err, res) {
  let output;
  if (err) {
    output = `<p>${err}</p>`;
  } else {
    const users = JSON.parse(res);
    output = "<ul style=\"list-style:none\">";
    output += `<li>User ${users.id} - ${users.name}</li>`
    output += "</ul>";
  }
  document.querySelector("#response").innerHTML = output;
}

function ProcessDelete(err, res) {
  let output;
  if (err) {
    output = `<p>${err}</p>`;
  } else {
    output = "<ul style=\"list-style:none\">";
    output += `<li>User ${res}</li>`
    output += "</ul>";
  }
  document.querySelector("#response").innerHTML = output;
}

function ProcessPatch(err, res) {
  let output;
  if (err) {
    output = `<p>${err}</p>`;
  } else {
    const users = JSON.parse(res);
    output = "<ul style=\"list-style:none\">";
    output += `<li>User ${users.id} - ${users.title}</li>`
    output += "</ul>";
  }
  document.querySelector("#response").innerHTML = output;
}

//send the request to server based off of radio button and url
//calls functions above
function sendRequest(reqType, targetURL) {
  let data;
  switch (reqType) {
    case "get":
      http.get(targetURL)
      .then((resp)=>ProcessGet(null, resp))
      .catch((err)=>ProcessGet(err, ));
      break;
    case "post": // Post (add) user to the endpoint
      data = {name:"Dennis Vickers",
      username:"vickersd",
      email:"vickersd@spu.edu"};

      http.post(targetURL, data)
      .then((resp)=>ProcessPost(null, resp))
      .catch((err)=>ProcessPost(err, err));
      break;
    case "put": 
      data = {id: 1,
      name:"Professor Vickers"};

      http.put(targetURL, data)
      .then((resp)=>ProcessPut(null, resp))
      .catch((err)=>ProcessPut(err, ));
      break;
    case "delete": 
      http.delete(targetURL, data)
      .then((resp)=>ProcessDelete(null, resp))
      .catch((err)=>ProcessDelete(err, ));
      break;
      
    case "patch": 
      data = {title: 'Dennis Vickers',id: 100,};

      http.patch(targetURL, data)
      .then((resp)=>ProcessPatch(null, resp))
      .catch((err)=>ProcessPatch(err, err));
      break;
  }
}

////add lisiner event///
// Add the listener to the SEND button
document.querySelector("#SendReq").addEventListener("click", (e) => {
    //#sendreq: id in submit button
    //eventListen: do when pressed
    //query: returns first Element that matches the selector
    //click->when #SendReq is clicked send event
    //e: event
  const radioButtons = document.querySelectorAll('input[name="HTTPtype"'); 
  //which radio button was pressed saved to var.
  //name="HTTPtype": variable under radio button input
  const route = document.querySelector("#route").value;

  let reqType;

   //save request type as var
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      reqType = radioButton.value;
      break;
    }
  }
  sendRequest(reqType,route);//start request

  e.preventDefault();//stop defaul of lisining even of cleaning screen
});