<?php
$submitmsg=false;
$insert=false;
if(isset($_POST[$name])){
    $server="localhost";
    $username="root";
    $password="";

    $connection=mysqli_connect($server,$username,$password);
    if(!$connection){
        die("Connection failed :( ".mysqli_connect_error());
    }
    // echo"Successful connection";


//post variables
    $name=$_POST['Name'];
    $username=$_POST['Username'];
    $password=$_POST['Password'];
    $cpassword=$_POST['C_Password'];


    $sql="INSERT INTO `codeinspire`.`registration` (`Name`, `Username`, `Password`, `C_Password`) VALUES ('$name', '$username', '$password', '$cpassword');"
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
<!-- Sign-Up Page -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="Login-Style.css">
    <title>Sign-Up</title>
</head>
<body>
    <h1></h1>
    <div class="signup">
        <h2>SIGN-UP</h2>
        <?php
        if($insert == true){
        echo "<p class='submitMsg'>Thanks for submitting your form. We are happy to see you joining us for the US trip</p>";
        }
    ?>
        <form action="#Registration" method="post">
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
                <input type="text" name="name" id="name" class="form-control" required>
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Username</label>
              <div class="col-sm-10">
                <input type="text" name="username" id="username" class="form-control"  required>
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="password" name="password" id="password" class="form-control"  required>
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
              <div class="col-sm-10">
                <input type="password" name="cpassword" id="cpassword" class="form-control"  required>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign-Up</button>
        </form>    
    </div>
    <div class="redirect">
        Already have an account?
        <a href="Login.html"> Login</a>
    </div>

    <script src="index.js"></script>
</body>
</html>
