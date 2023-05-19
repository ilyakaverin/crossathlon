<?php
$apiToken = "5893870035:AAHKToNY3CPGf5k6_bNm2_h6IwEY0YT2FEw";
$_POST = json_decode(file_get_contents("php://input"),true);
    if(isset($_POST["data"]))
    {
        
        $data = [
            "chat_id" => "489389468", 
            "text" => $_POST['data']
        ];
        $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data) );    
    } ;
?>
