<?php

	$ttype = $_POST['C/D'];
	$cat   = $_POST['Category'];
	$subcat= $_POST['Sub-Category'];
	$merch = $_POST['Merchant'];
	$descr = $_POST['details'];
	$date  = $_POST['Date'];
	$amt   = (string)$_POST['Amount'];
	
	if (strtolower($ttype) === 'debit' && floatval($amt) > 0){
		$amt = "-" . $amt; 
	}
	
	if (strtolower($ttype) === 'credit' && floatval($amt) < 0){
		$amt = (string) ( -floatval($amt) );
	}
	$fp = fopen('../spendData.csv', 'a');
	
	$savestring = $ttype . "," . $cat . "," . $subcat . "," . $merch . "," . $descr . "," . $date . "," . $amt . "\n";
	fwrite($fp, $savestring);
	fclose($fp);
	
	echo "<h1>Your Data has been saved</h1>"



?>
