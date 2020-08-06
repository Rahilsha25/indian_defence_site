<?php

Session_start();
$_SESSION = array();
Session_destroy();
Header(“location: login.php”);

?>
