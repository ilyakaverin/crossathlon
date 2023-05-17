<?php
$apiToken = "6081187529:AAEJbX0ektKGKmHQO3PFGf_Cn3P0UFYK4Mw";
$_POST = json_decode(file_get_contents("php://input"),true);
    if(isset($_POST["data"]))
    {
        
        $data = [
            "chat_id" => "6081187529", 
            "text" => $_POST['data']
        ];
        $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data) );    
    } ;
?>
