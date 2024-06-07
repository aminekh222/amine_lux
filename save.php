<?php
    $serveur = "localhost";
    $user = "root";
    $pw = "";
    $db = "amine_lux_db";
    $con = new mysqli($serveur, $user, $pw, $db);
    if ($con->connect_error) {
        die("Connection failed: " . $con->connect_error);
    }
    $stmt = $con->prepare("INSERT INTO contacts (nom, email, messagec) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $nom, $email, $messagec);

    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $messagec = $_POST['messagec'];

    if ($stmt->execute()) {
        echo "<p style='color: green;'>Les données ont été enregistrées avec succès.</p>";
    } else {
        echo "<p style='color: red;'>Erreur lors de l'enregistrement des données: " . $stmt->error . "</p>";
    }
    $stmt->close();
    $con->close();
?>
