const apiUrl = "http://localhost/app-php-js-chat-yes-no-senati/api.php";
const apiUrlYesNo = "https://yesno.wtf/api";

async function getData() {
  console.log("ingreso a get data");
  try {
    const respuesta = await fetch(
      `${apiUrl}?id=123&nombre=Diego&apellido=Lipa`,
      {
        method: "GET",
      }
    );
    const data = await respuesta.json();
    console.log("data");
    console.log(data);
  } catch (error) {
    console.log("Error al momento de hacer la peticion GET: ", error);
  }
}

let botonGet = document.querySelector(".getdata");
botonGet.addEventListener("click", function () {
  getData();
});

async function postData() {
  try {
    const respuesta = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: "Diego Frank",
        apellido: "Lipa",
        lenguaje_favorito: "JavaScript",
        color: "Plomo",
      }),
    });
    const data_retorno = await respuesta.json();
    console.log(data_retorno);
  } catch (error) {
    console.log("Error al momento de hace la peticion POST: ", error);
  }
}

let botonPost = document.querySelector("#post-data");
botonPost.addEventListener("click", function () {
  postData();
});

async function getYesNoData() {
  try {
    const respuesta = await fetch(apiUrlYesNo,
      {
        method: "GET",
      }
    );
    const data = await respuesta.json();
    console.log('Aqui llega la información');
    console.log(data);
    agregarMensaje(data.answer,false,data.image);


  } catch (error) {
    console.log("Error al momento de hacer la peticion GET: ", error);
  }
}

let botonGetYesNo = document.querySelector("#yes-no-data");
botonGetYesNo.addEventListener("click", function () {
    getYesNoData();
});


// Funcionalidad del chat yes no
let chatMessages = document.getElementById('chatMessages'); 
let chatForm = document.getElementById('chatForm');
let messageInput = document.getElementById('messageInput');

function agregarMensaje(mensaje, soyYo = true, imagen = null){
  const mensajeDiv = document.createElement('div');
  mensajeDiv.classList.add('message');
  mensajeDiv.classList.add(soyYo? 'user-message':'api-message');
  mensajeDiv.textContent = mensaje;

  if(imagen){
    const img = document.createElement('img');
    img.src = imagen;
    mensajeDiv.appendChild(img);
  }

  setTimeout(() => {
    chatMessages.scrollTop = chatMessages.scrollHeight
  }, 500);

  chatMessages.appendChild(mensajeDiv);
}

chatForm.addEventListener('submit',function(e){
  e.preventDefault();

  const miMensaje = messageInput.value;
  agregarMensaje(miMensaje,true);
  
  getYesNoData();
});

