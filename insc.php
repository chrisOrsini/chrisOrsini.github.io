<?php
if (isset($_POST["bout"])) {
    var_dump($_POST);
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $mail = $_POST["mail"];
    $mdp = $_POST["mdp"];

    $conect = mysqli_connect("localhost", "root", "root", "okut");

    $req = "insert into utilisateur values (null,'$nom','$prenom','$mail','$mdp',1)";
    echo $req;

    $res = mysqli_query($conect, $req);

    echo mysqli_error($conect);
}


?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscris-Toi</title>
</head>

<body>
    <h1>INscription</h1>
    <form action="" method="post">
        <p><input type="text" name="nom" required></p>
        <p><input type="text" name="prenom" required></p>
        <input type="email" name="mail" required>
        <p><input type="password" name="mdp" required></p>
        <input type="submit" value="enregistrer" name="bout">
    </form>
</body>

</html>