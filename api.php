<?php
//aqui
header("Access-Control-Allow-Origin: *");

$metodo = $_SERVER['REQUEST_METHOD'];

$respuesta = [];
switch ($metodo) {
    case 'GET':
        $respuesta = [
            'mensaje' => 'Metodo Get Correcto',
            'data' => $_GET
        ];
        break;
    case 'POST':
        $data_entrate = json_decode(file_get_contents("php://input"),true);
        $respuesta = [
            'mensaje' => 'Metodo Post de retorno',
            'data' => $data_entrate,
        ];
        break;

    default:
        # code...
        break;
}
echo json_encode($respuesta);
