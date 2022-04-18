<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Edit User php</title>
    </head>
    <body>
    <section>
        Welcome, anonymous user.
        <?php
        $username= $_GET["reg_un"];
        $currPass = $_GET["reg_pass"];
        $newPass = $_GET["reg_pass2"];
        if (($username == "JavaScript") && ($currPass == "King") && ($newPass =="King") )
            echo "<h2> Good day king " . $username ."</h2>";
        else
            echo "<h2> Excuse me, who are you?!</h2>";
            ?>
    </section>
</body>
</html>