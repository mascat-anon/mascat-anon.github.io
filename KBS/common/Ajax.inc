//=======================================================================================
//
//  AJAX
//
//=======================================================================================
var xmlhttp;        // XMLHttpオブジェクト
var ajaxRecvData;   // 受信データ

var HTTP_GET = "GET";
var HTTP_POST = "POST";
var HTTP_RECV = 1;

//-----------------------------------------------------------
//     getXMLHttp : XMLHttpオブジェクト取得
//           引数 : 無し
//         戻り値 : XMLHttpオブジェクト
//-----------------------------------------------------------
function getXMLHttp()
{
    // ブラウザによって処理を変える
    if( window.XMLHttpRequest ){
        xmlhttp = new XMLHttpRequest();
    } else if( window.ActiveXObject ){
        try {
            xmlhttp = new ActiveXObject( "Msxml2.XMLHTTP" );
        } catch( e ){
            xmlhttp = new ActiveXObject( "Microsoft.XMLHTTP" );
        }
    }
    return xmlhttp;
}

//-----------------------------------------------------------
//   createQueryParam : クエリパラメータ作成
//               引数 : 名前,パラメータ(可変長引数)
//             戻り値 : 成功･･クエリパラメータ
//             戻り値 : 失敗･･false
//-----------------------------------------------------------
function createQueryParam()
{
    var param = new Object();
    var key;
    var array = new Array();

    if( arguments.length % 2 != 0 ){    // 引数が2の倍数でなければエラー
        alert( "エラー：クエリパラメータは[名前：値]のセットで指定して下さい" );
        return false;
    }

    // クエリパラメータを作成
    for( i=0; i<arguments.length; i+=2 ){
        param[arguments[i]] = arguments[i+1];
    }

    for( key in param ){
        array.push( key + "=" + encodeURIComponent(param[key]) );
    }
    array = array.join( "&" );  // クエリパラメータを&で結合する

    return array;
}

//-----------------------------------------------------------
//  ajaxNetConnect : データ送受信
//            引数 : URL,送信データ,通信種別(GET,POST)
//            引数 : 送受信フラグ,コールバック関数名
//          戻り値 : 無し
//-----------------------------------------------------------
function ajaxNetConnect( url, sendData, sendKind, sendFlg, funcName )
{
    if( xmlhttp == null ){
        getXMLHttp();   // XMLHttpオブジェクト取得
        if( xmlhttp == null ){
            alert( "エラー：XMLHttpオブジェクトがありません" );
            return;
        }
    }

    // 通信種別によって処理を変更
    if( sendKind == HTTP_GET ){ // GET通信
        if( sendData != null )  url += "?"+sendData+"";     // URLの後ろにリクエストパラメータを付与
    }

    xmlhttp.open( sendKind, url, true );    // オープン
    if( sendKind == HTTP_POST ){    // POST通信
        xmlhttp.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );    // ヘッダーセット
        xmlhttp.send( sendData );
    }

    if( sendFlg == HTTP_RECV ){ // 受信の時のみ処理
        ajaxRecvData = null;    // 受信データ初期化
    }

    xmlhttp.onreadystatechange=function()
    {
        if( xmlhttp.readyState == 4  ){ // 準備完了
            if( xmlhttp.status == 200 ){    // 成功

                if( sendFlg == HTTP_RECV ){ // 受信の時のみ処理
                    ajaxRecvData = xmlhttp.responseText;    // 受信データを保存
                }

            } else {    // 失敗

                if( sendFlg == HTTP_RECV ){ // 受信の時のみ処理
                    ajaxRecvData = "error";
                }
            }

            if( funcName != null ){ // コールバック関数名がある場合のみ処理
                eval( funcName + '()' );    // コールバック関数実行
            }
        }
    };
    // GET通信の場合はここで送信
    if( sendKind == HTTP_GET )  xmlhttp.send( null );
}

//-----------------------------------------------------------
// ajaxSendFormData : フォームデータ用Ajax通信
//             引数 : URL,送信データ,コールバック関数名
//           戻り値 : 無し
//-----------------------------------------------------------
function ajaxSendFormData( url, sendData, funcName )
{
    if( xmlhttp == null ){
        getXMLHttp();   // XMLHttpオブジェクト取得
        if( xmlhttp == null ){
            alert( "エラー：XMLHttpオブジェクトがありません" );
            return;
        }
    }
    ajaxRecvData = null;    // 受信データ初期化

    xmlhttp.open( 'POST', url );
    xmlhttp.send( sendData );

    xmlhttp.onreadystatechange=function()
    {
        if( xmlhttp.readyState == 4  ){ // 準備完了
            if( xmlhttp.status == 200 ){    // 成功
                ajaxRecvData = xmlhttp.responseText;    // 受信データを保存

            } else {    // 失敗
                ajaxRecvData = "error";
            }

            if( funcName != null ){ // コールバック関数名がある場合のみ処理
                eval( funcName + '()' );    // コールバック関数実行
            }
        }
    };
}