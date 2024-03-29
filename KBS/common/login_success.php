<!DOCTYPE html>
<html lang="ja">
<head>
  <title>ファイル確認</title>
 
  <?php
session_start();

if(!isset($_SESSION["user_name"])) {
	$no_login_url = "../index.php";
	header("Location: {$no_login_url}");
	exit;
}
?>

        <script type="text/javascript" src="Ajax.inc"></script>
        <script type="text/javascript">
            window.onload = function(){
                getFileList();
            }

            // ドラッグ要素がドロップ要素に重なっている間の処理
            function f_dragover(event){
                // dragoverイベントをキャンセルして、ドロップ先の要素がドロップを受け付けるようにする
                event.preventDefault();
            }

            // ドロップ時の処理
            function f_drop(event){
                var file = event.dataTransfer.files[0];
                //console.log( file.name );

                // ファイル送信用AJAX
                var formData  = new FormData();
                formData.append( "flg", "2" );
                formData.append( "file", file );

                ajaxSendFormData( "./server.php", formData, "file_save_complete" );

                // エラー回避のため、ドロップ処理の最後にdropイベントをキャンセルしておく
                event.preventDefault();
            }

            // ファイル保存完了
            function file_save_complete(){
                console.log( 'file_save_complete' );
                // ファイル一覧取得通信開始
                getFileList();
            }

            // ファイル一覧取得
            function getFileList(){
                sendData = createQueryParam( "flg", 3 );
                ajaxNetConnect( "./server.php", sendData, "POST", 1, "file_list_complete" );
            }

            // ファイル一覧取得完了
            function file_list_complete(){
                //ajaxRecvData
                var obj = document.getElementById( 'file_list' );
                var str = "";
                if( ajaxRecvData != "file_not_found" ){
                    var fileNames = ajaxRecvData.split( "," );
                    str += "<table border='1'>";
                    str += "<tr>";
                    str += "<td width='500px'>ファイル名</td>";
                    str += "<td colspan='2'>操作</td>";
                    str += "</tr>";
                    for( var i=0; i<fileNames.length; i++ ){
                        // ファイル名からフォルダ名を除く
                        var buff = fileNames[i].split( "/" );
                        var fileName = buff[2];
                        str += "<tr>";
                        str += "<td>"+fileName+"</td>";
                        str += "<td><a href='"+fileNames[i]+"' download>本体保存</a></td>";
                        str += "<td align='center'><a href='#' onClick='fileDeleteStart(\""+fileNames[i]+"\");'>消去実行</a></td>";
                        str += "</tr>";
                    }

                    str += "</table>";
                    obj.innerHTML = str;

                } else {
                    str = "ファイルがありません";
                    obj.innerHTML = str;

                }
                //console.log( 'file_save_complete' );
            }

            // ファイル削除
            function fileDeleteStart( fileName ){
                var buff = fileName.split( "/" );
                var buffFileName = buff[2];
                // ファイル削除確認ダイアログ表示
                var value = window.confirm( "「"+buffFileName+"」を削除します、よろしいですか？" );
                if( value ){
                    sendData = createQueryParam( "flg", 4, "file_name", fileName );
                    ajaxNetConnect( "./server.php", sendData, "POST", 1, "file_delete_complete" );
                }
            }

            // ファイル削除完了
            function file_delete_complete(){
                if( ajaxRecvData == "file_delete_success" ){
                    alert( "ファイル削除成功" );
                    // ファイル一覧取得通信開始
                    getFileList();
                } else {
                    alert( "削除ファイルが見つかりませんでした" );
                }
            }
        </script>
</head>
<body>


    [ファイル一覧]<br>
    <div id='file_list' name='file_list'>

    </div><br>

    [ファイルアップロード]<br>
    <div id='file_upload' name='file_upload' style='width:300px; height:100px; border:1px dotted #333333;' ondragover="f_dragover(event);" ondrop="f_drop(event);">
        <p>ここにドラッグ</p>
    </div>

</body>

</html>