<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=devise-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="sql.css">
	<title>Formulaire</title>
</head>
<body>
	<section id="entrée">
		<form method="post" action="insert.php">
			<label>Prenom</label><br>
				<input type="text" name="prenom" required=""><br><br>
			<label>Nom</label><br>
				<input type="text" name="nom" required><br><br>
			<label>Date de Naissance</label><br>
				<input type="date" name="birth" required><br><br>
				<input type="submit" name="submit"><br><br>
		</form>
	</section>
	<section id="affichage">
		<?php include "affichage.php" ?>
	</section>	
</body>
</html>