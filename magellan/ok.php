<?php
require_once('libmail.php');

if (!empty($_POST)) {
    if (isset($_POST['phone']))
        $phone = $_POST['phone'];

    $m = new Mail('utf-8');  // можно сразу указать кодировку, можно ничего не указывать ($m= new Mail;)
    $m->From("Magellanbarber.ru;1@alar.tk"); // от кого Можно использовать имя, отделяется точкой с запятой
    $m->To("magellan.barbershop@gmail.com");   // кому, в этом поле так же разрешено указывать имя

    $m->Subject("Заявка");
    $m->Body("Телефон: " . $phone);
    $m->Priority(4); // установка приоритета
    //$m->smtp_on("smtp.asd.com", "login", "passw", 25, 10); // используя эу команду отправка пойдет через smtp
    $m->Send(); // отправка
}

?> 