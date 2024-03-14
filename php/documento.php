<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $celular = addslashes($_POST['celular']);
    $textarea = addslashes($_POST['textarea']);

    $para = "higordanielmorais@gmail.com";
    $assunto = "Portifólio - Contato";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n";

    $cabeca = "From: higordanielmorais@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    $texto = $textarea;

    if(mail($para,$assunto,$corpo,$cabeca,$textarea)){
        echo("E-mail enviado com sucesso!");
    }
    else{
        echo("Houve um erro ao enviar o e-mail");
    }
?>