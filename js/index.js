$(function() {
$('.button').click(function() {
  //alert("จะสุ่มล่ะนะ");
  $("#bg").attr('src',"img/loading.gif");
    setTimeout(function() {
      var qrimg=["img/QRcode/เกม.png","img/QRcode/เซฟ.png","img/QRcode/เต้.png"
        ,"img/QRcode/เนวัดดาว.png","img/QRcode/เบิร์ด.png","img/QRcode/เฟรม.png"
        ,"img/QRcode/เฟิน.png","img/QRcode/เฟินธนัชพร.png","img/QRcode/เฟิร์นวรนิษฐา.png" ];
      var imgRand = Math.floor((Math.random() * 9));
      $("#bg").attr('src',qrimg[imgRand]);
        },
        2700);
        return false;
});
});
