<?php
$insert=false;
is(isset($_POST['name']){
    $server="localhost";
    $username="root";
    $password="";

    $connection=mysqli_connect($server,$username,$password);
    if(!$connection){
        die("Connection failed :( ".mysqli_connect_error());
    }
    // echo"Successful connection";

    $username=$_POST['username'];
    $pass=$_POST['pass'];
    $sql="INSERT INTO `codeinspire`.`loginform` (`username`, `pass`) VALUES ('$username', '$pass');";

    // echo $sql;

    if($connection->query($sql)==true){
        // echo"successful";
        // $submit=true;
        $insert = true;
    }
    else{
        // echo"$sql <br> $connection->error";
        // echo"Failed";
    }

    $connection->close();
    
}
?>

<!-- Login Page -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="Login-Style.css">
    <title>Login</title>
</head>
<body>
    <h1></h1>
    <?php
        if($insert == true){
        echo "<p class='submitMsg'>Thanks for submitting your form. We are happy to see you joining us for the US trip</p>";
        }
    ?>
    <div class="signup">
        <h2>LOGIN</h2>
        
        <form action="Login_PHP.php" method="post">
            <div class="row mb-3">
              <label for="inputEmail3"  class="col-sm-2 col-form-label">Username</label>
              <div class="col-sm-10">
                <input type="text" name="Username" class="form-control" id="inputEmail3">
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword3"  class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="password" name="Password" class="form-control" id="inputPassword3">
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>    
    </div>
</body>
</html>