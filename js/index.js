$(function() {

  var i = 0;
  var qrimg = [
    "img/QRcode/เกม.png",
    "img/QRcode/เซฟ.png",
    "img/QRcode/เต้.png",
    "img/QRcode/เนวัดดาว.png",
    "img/QRcode/เบิร์ด.png",
    "img/QRcode/เฟรม.png",
    "img/QRcode/เฟิน.png",
    "img/QRcode/เฟินธนัชพร.png",
    "img/QRcode/เฟิร์นวรนิษฐา.png"
  ];

  $('.button').click(function() {

    //do before delay
    $("#mainImg").attr('src', "img/321.gif");
    $("button").attr("disabled", "disabled");
    $("#rightImg").attr('src', "img/pink.jpg");
    $("#leftImg").attr('src', "img/pink.jpg");

    if (qrimg.length == 0) {
      $("#mainImg").attr('src', "img/cat2.gif");
      console.log("หมดแล้วจ้า");

      return false;
    }

    setTimeout(function() {
      //do after delay
      var imgRand = Math.floor((Math.random() * qrimg.length)); //  var imgRand = Math.floor((Math.random() * (9-i)));
      $("#mainImg").attr('src', qrimg[imgRand]);
      $("#rightImg").attr('src', "img/test2.gif");
      $("#leftImg").attr('src', "img/test1.gif");
      $("button").removeAttr("disabled");
      console.log(qrimg[imgRand]);
      console.log("index of pic = ", + imgRand);
      console.log("count i = " + i);
      console.log("array length =" + qrimg.length);
      qrimg.splice(imgRand, 1);
      i++;

    }, 2750);

    return false;
  });

});
