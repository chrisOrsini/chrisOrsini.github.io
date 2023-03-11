<?php
		$base = new mysqli("localhost", "root", "root", "bts 5");

		if($base->connect_error){
			exit("erreur de connexion");
	         }
	         
	if(isset($_POST['submit'])){
		extract($_POST);
			$sql = "INSERT INTO eleves (prenom, nom, birthday) VALUES ('$prenom', '$nom', '$birth')";
        $base->query($sql);
    }
$base->close();

	header("location: Myskiel.php");
?>