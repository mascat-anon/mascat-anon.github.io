<?php
$response = "responce_no_data";
$folderName = "./csv";

$flg = $_REQUEST['flg'];

switch( $flg ){


case 2:     // ファイル保存
    if( isset($_FILES['file']) ){
        $file = $_FILES['file'];
        $fileName = $file['name'];          // ファイル名

        $copyFolder = "".$folderName."/".$fileName."";   // コピーフォルダ名

        move_uploaded_file( $_FILES['file']['tmp_name'], $copyFolder );
    }
    break;

case 3:     // ファイル一覧取得

    $result = glob( "".$folderName."/*" );

    if( !empty($result) ){  // ファイルが存在する
        $response = "";
        for( $i=0; $i<count($result); $i++ ){
            if( $i > 0 )    $response .= ",";
            $response .= $result[$i];
        }

    } else {
        $response = "file_not_found";

    }
    break;

case 4:     // ファイル削除
    $deleteFileName = $_REQUEST['file_name'];

    if( file_exists($deleteFileName) ){
        unlink( $deleteFileName );
        $response = "file_delete_success";

    } else {
        $response = "file_not_found";
    }
    break;
}
echo $response;