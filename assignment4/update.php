<?php
include("db.php");
$message = "";
if (isset($_POST['update'])) {
  $id = $_POST['id'];
  $name = $_POST['name'];

  if ($id == "" || $name == "") {
    $message = "ID and Name are required.";
  } else {
    $sql = "UPDATE student SET name='$name' WHERE id='$id'";
    if (mysqli_query($conn, $sql)) {
      $message = "Record Updated.";
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
  <title>Update Student Record</title>
</head>
<body>
  <h1>Update Student Record</h1>
  <?php if ($message) { echo '<p>'.$message.'</p>'; } ?>
  <form method="post">
    Enter ID: <input type="text" name="id"><br>
    Enter New Name: <input type="text" name="name"><br>
    <input type="submit" name="update" value="Update">
  </form>
</body>
</html>
