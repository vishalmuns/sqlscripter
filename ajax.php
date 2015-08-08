<?php
    if($_POST["type"] == "save") {
		$myfile = fopen("doclineSQL.txt", "w+") or die("Unable to open file!");
		$txt = $_POST["text"];
		fwrite($myfile, $txt);
		fclose($myfile);
		echo "Success saving!";
    }
    else if($_POST["type"] == "load") {
    	$file = file_get_contents('doclineSQL.txt', FILE_USE_INCLUDE_PATH) or die("Unable to open file!");
        echo $file;
    }
    else {
    	echo "Fail posting.";
    }

    //echo MergeFile("aa\r\naa bb cc hhhhhhhhhhhhhhh\r\nae bb\r\naa", "aa\r\naa d cc f hhhhhhhhhhhhhhh\r\nae bb\r\naa", "bb\r\naa ee cd f hhhhhhhhhhhhhhh gg\r\nae aa\naa");

function MergeFile($original, $edited, $cache)
{
    /*echo "<table><tr><td VALIGN='top' width='33%'>" . htmlspecialchars($original) . "</td><td VALIGN='top' width='33%'>" . 
     htmlspecialchars($edited) . " </td><td VALIGN='top' width='33%'>" . htmlspecialchars($cache) . "</td></tr></table>";
    echo "<br><br>-----------------------------------------------------------------------------";*/
    /* Run the merge */
    require_once 'classMerge.php';
    $merge = new ThreeWayMerge( $original, $edited, $cache, /*'lite'*/ 'full');
        
    $result = $merge->merge();

    if ( $result !== FALSE )
    {
        /* Check for conflicts */
        //$conflicts = ( stristr( $result, '<ips:conflict' ) ) ? 1 : 0;
        
        echo htmlspecialchars($result);

        $myfile = fopen("doclineSQL1.txt", "w+") or die("Unable to open file!");
        fwrite($myfile, $result);
        fclose($myfile);
    } 
    else
        echo "Fail to merge";
}
?>