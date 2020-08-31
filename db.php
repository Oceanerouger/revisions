<?php
try{
//On se connecte à la BDD
                   $bdd = new PDO("mysql:host=localhost;dbname=joueurs;charset=utf8', 'root', 'oceane");
                   $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
               
//vjoueur);
                                
                   //On insère les données reçues
                   $bdd = $bdd->prepare("INSERT INTO joueurs(personnages, affrontement)
                       VALUES(:personnages, :affrontement)");
           
                  
                   
                   $bdd->execute(array(
                    
                    ':personnages' => $personnages,
                    ':affrontement' => $affrontement));
                   //On renvoie l'utilisateur vers la page de remerciement
                   header("Location:index.php");
                   }
               catch(PDOException $e){
                   echo 'Veuillez remplir tous les champs. Erreur : '.$e->getMessage();
               }

?>
