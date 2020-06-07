<?php




$userNameSend = $_POST['userNameSend'];
$userEmailSend = $_POST['userEmailSend'];
$userPhoneSend = $_POST['userPhoneSend'];



// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'romantrigidko@gmail.com';                     // SMTP username
    $mail->Password   = 'Qazwsxedc46127';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('romantrigidko@gmail.com', 'Роман');
    $mail->addAddress('romansanwow@gmail.com');     // Add a recipient
    

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';
    $mail->Body    = "Имя пользователя: ${userNameSend}, его телефон ${userPhoneSend} и так же его почта ${userEmailSend}";
   
    

    $mail->send();
    header('location:thanks.html');
} catch (Exception $e) {
    echo "Письмо не отправленно, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}