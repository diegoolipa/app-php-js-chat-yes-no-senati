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
        nombre: "Diego",
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
    console.log(data);

  } catch (error) {
    console.log("Error al momento de hacer la peticion GET: ", error);
  }
}

let botonGetYesNo = document.querySelector("#yes-no-data");
botonGetYesNo.addEventListener("click", function () {
    getYesNoData();
});
