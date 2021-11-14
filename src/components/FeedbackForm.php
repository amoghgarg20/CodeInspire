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

    $EmailAddress=$_POST['EmailAddress'];
    $Contact_Number=$_POST['Contact_Number'];
    $Experience=$_POST['Experience'];
    $Suggestion=$_POST['Suggestion'];
    $Donate=$_POST['Donate'];
    $sql="INSERT INTO `codeinspire`.`feedbackform` (`EmailAddress`, `Contact_Number`, `Experience`, `Suggestion`, `Donate`) VALUES ('$EmailAddress', '$Contact_Number', '$Experience', '$Suggestion', '$Donate');";

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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="Feedback-CSS.css">
</head>
<body>
    <h1><b>Feedback Form</b></h1>
    <form>
        <div class="form">
        <div class="form-group">
            

            <?php
        if($insert == true){
        echo "<p class='submitMsg'>Thanks for submitting your form. We are happy to see you joining us for the US trip</p>";
        }
    ?>
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">Contact Number</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Number">
          </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Rate your experience of the website(out of 5)</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Any Suggestions?</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div>Would you like to donate?</div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">Yes</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2">No</label>
          </div>
        <div>If you are willing to donate we will reach out to you very soon</div>
        <div class="buttons">
            <input type="submit" value="Submit">  <input type="reset" value="Reset"> 
        </div>
      </form>
</body>
</html>