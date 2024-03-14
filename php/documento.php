<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $celular = addslashes($_POST['celular']);

    $para = "higordanielmorais@gmail.com";
    $assunto = "Portifólio - Contato";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n";

    $cabeca = "From: higordanielmorais@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }
    else{
        echo("Houve um erro ao enviar o e-mail");
    }
?>