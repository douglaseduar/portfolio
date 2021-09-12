<?php 

$texto = $_POST['descricao'];

header("Location: https://api.whatsapp.com/send?phone=5542999750210&text=$texto");

?>