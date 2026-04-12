<?php
include("db.php");
$message = "";
if (isset($_POST['submit'])) {
  $id = $_POST['id'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  $mobile = $_POST['mobile'];

  if ($id == "" || $name == "" || $email == "" || $mobile == "") {
    $message = "All fields are required.";
  } else {
    $sql = "INSERT INTO student (id, name, email, mobile) VALUES ('$id','$name','$email','$mobile')";
    if (mysqli_query($conn, $sql)) {
      $message = "Record Inserted.";
    } else {
      $message = "Error: " . mysqli_error($conn);
    }
  }
}
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Insert Student Record</title>
</head>
<body>
  <h1>Insert Student Record</h1>
  <?php if ($message) { echo '<p>'.$message.'</p>'; } ?>
  <form method="post">
    ID:<input type="text" name="id"><br>
    Name:<input type="text" name="name"><br>
    Email:<input type="text" name="email"><br>
    Mobile:<input type="text" name="mobile"><br>
    <input type="submit" name="submit" value="Insert">
  </form>
</body>
</html>
