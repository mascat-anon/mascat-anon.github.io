<!DOCTYPE html>
<html lang="ja">
<head>
  <title>メンテナンスログイン</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <meta http-equiv="Content-Script-Type" content="text/javascript">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<style>
html, body {

  height: 100%;
  background: #F1F1F1;
  font-weight: 400;
}
h2 {
    margin: 0 1rem;
    padding: 0.5rem 0;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
}

.card-div {
  height: 100%;
  min-height:300px ;
  display: flex;
  justify-content: center;
  align-items:center;
  
}
.card {
  background-color: #fff;
  max-width: 300px;
  padding: 16px;
  border-radius: 8px;
  border-spacing: 2px;
    border-color: gray;
    -webkit-user-drag: none;
  -moz-user-select: none;
  margin: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  vertical-align: bottom;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
  box-shadow: 0 0 5px #cecece;
}
.p{
  text-align    : right;
}
.button {
  display       : inline-block;
  border-radius : 5%;
  text-align    : center;
  cursor        : pointer;
  padding       : 12px 12px;
  background    : #333333;
  color         : #ffffff;
  line-height   : 1em;
  border: none;
  outline: none;
}
.button:hover {
  box-shadow    : none;        /* カーソル時の影消去 */
  color         : #333333;     /* 背景色     */
  background    : #ffffff;     /* 文字色     */
}
.right-text {
  text-align: right;
}
</style>
<body>
<?php
if(isset($error_message)) {
  echo $error_message;
}
session_start();

$error_message = "";

if(isset($_POST["login"])) {

	if($_POST["user_name"] == "kbs" && $_POST["password"] == "kbs") {
		$_SESSION["user_name"] = $_POST["user_name"];
		$login_success_url = "./login_success.php";
		header("Location: {$login_success_url}");
		exit;
	}
$error_message = "※ID、もしくはパスワードが間違っています。もう一度入力して下さい。";
}
?>


<div class="card-div">
  <div class="card">
              <h2>メンテナンスログイン</h2> 

    <p><?php print "${error_message}";?></p>
<form action="index.php" method="POST">
	<p class="p">ログインID：<input type="text" name="user_name"></p>
	<p class="p">パスワード：<input type="password" name="password"></p>
	

    <div class="right-text">
     <input class="button" type="submit" name="login" value="ログイン">
    </div>
</form>
  </div>
</div>
</body>
</html>
