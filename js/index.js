$(function() {
  var i=0;
  var qrimg=["img/QRcode/เกม.png","img/QRcode/เซฟ.png","img/QRcode/เต้.png"
    ,"img/QRcode/เนวัดดาว.png","img/QRcode/เบิร์ด.png","img/QRcode/เฟรม.png"
    ,"img/QRcode/เฟิน.png","img/QRcode/เฟินธนัชพร.png","img/QRcode/เฟิร์นวรนิษฐา.png" ];
$('.button').click(function() {
  //alert("จะสุ่มล่ะนะ");
  $("#bg").attr('src',"img/loading.gif");
    setTimeout(function() {
      var imgRand = Math.floor((Math.random() * (9-i)));
      $("#bg").attr('src',qrimg[imgRand]);
      console.log(qrimg[imgRand]);
      qrimg.splice(imgRand,1);
      console.log(imgRand);
      console.log(i);
      i++;
        },
        2700);
        return false;
});
});
