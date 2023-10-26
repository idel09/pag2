<?php
// Conecta a la base de datos (actualiza los datos de conexión)
$host = "tu_servidor_mysql";
$usuario = "tu_usuario_mysql";
$contrasena = "tu_contrasena_mysql";
$basededatos = "tu_base_de_datos";
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