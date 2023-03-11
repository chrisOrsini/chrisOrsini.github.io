<ul>
		<?php
				$base = new mysqli("localhost", "root", "root", "bts 5");
					if ($base->connect_error){
						exit("error de connection à la base");
					}
					$sql = "SELECT * FROM eleves";
					$tableau = $base->query($sql);

						foreach ($tableau as $ligne){
							echo "prenom : {$ligne['prenom']} | ";
							echo "nom : {$ligne['nom']} | ";
							echo "date de naissance : {$ligne['birthday']}<br>";
							echo "<form method='post' action='del.php'>";
							echo "<input type='hidden' name='id' value='{$ligne['id']}'>";
							echo "<input type='submit' name='suppr' value='❌'>";
							echo "</form>";
							echo "<form method='post' action='updateform.php'>";
							echo "<input type='hidden' name='id' value='{$ligne['id']}'>";
							echo "<input type='submit' name='update' value='👍'>";
							echo "</form>";
/*une autre possibilité d'affichace
foreach($tableau as $ligne){
	echo "<li>";
	echo $ligne['prenom']."".$ligne['nom'].",née le".$ligne['birthday'];
	echo</li>
}*/
						}
						$base->close();
		?>
	</ul>