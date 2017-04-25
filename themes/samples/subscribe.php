<?php
$allData = $_POST['allData'];
parse_str($allData, $unCon);

$to = 'expjoomworker@gmail.com';
$subject = $unCon['subject'];

$message = '<strong>Name : </strong>'.$unCon['con_name'].'<br/><br/>';
$message = '<strong>Email : </strong>'.$unCon['con_email'].'<br/><br/>';
$message .= $unCon['message'].'<br/>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <'.$unCon['email'].'>' . "\r\n";

mail($to,$subject,$message,$headers);
echo 1;