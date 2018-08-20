$(function() {

  $('.button').click(function() {
    var qrimg = ["img/QRcode/เกม.png", "img/QRcode/เซฟ.png", "img/QRcode/เต้.png", "img/QRcode/เนวัดดาว.png"];
    var imgRand = Math.floor((Math.random() * 4));
    $("#bg").attr('src', qrimg[imgRand]);
    return false;
  });
});
