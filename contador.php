<?php
// Conecta a la base de datos (actualiza los datos de conexión)
$host = "localhost";
$usuario = "root";
$contrasena = "Iith0kjkxwx*";
$basededatos = "usuarioskdi";
$conexion = new mysqli($host, $usuario, $contrasena, $basededatos);

// Verifica la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Obtiene la dirección IP del visitante
$ip = $_SERVER['REMOTE_ADDR'];

// Registra la visita en la base de datos
$sql = "INSERT INTO contador_visitas (fecha, ip) VALUES (NOW(), '$ip')";
$conexion->query($sql);

// Cierra la conexión a la base de datos
$conexion->close();
?>