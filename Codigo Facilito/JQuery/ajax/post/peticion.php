<?php
  $nombre = $_POST['nombre'];
  $mensaje = $_POST['mensaje'];
  $email = $_POST['mail'];

  if ($nombre != "" && $mensaje != "" && $email != "")
    echo 'Correcto';
  else
    echo 'Incorrecto';
?>
