<?php
//aqui
header("Access-Control-Allow-Origin: *");

$metodo = $_SERVER['REQUEST_METHOD'];

$respuesta = [];
switch ($metodo) {
    case 'GET':
        $respuesta = [
            'mesaje'=>'Metodo Get Correcto', 
            'data' => $_GET
        ];
        break;
    
    default:
        # code...
        break;
}
echo json_encode($respuesta);