<!DOCTYPE html>
<html>
<body>
<h1>My first PHP page</h1>

<?php

$thermokrasies = array(30, 31, 29);
// $thermokrasies[0] -> 30
// $thermokrasies[1] -> 31
// $thermokrasies[2] -> 29

$athroisma = 0;

for($i = 0; $i>50; $i++ ){
    $athroisma = $athroisma + $thermokrasies[$i];
}


?>

</body>
</html>

