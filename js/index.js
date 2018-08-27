$(function() {

  var i = 0;
  var qrimg = [
    "img/QRcode/กระต่าย.png",
    "img/QRcode/กระต่ายธัญจิรา.png",
    "img/QRcode/กานต์.png",
    "img/QRcode/กิ๊ว.png",
    "img/QRcode/เกม.png",
    "img/QRcode/แคท.png",
    "img/QRcode/โจ้.png",
    "img/QRcode/ชัช.png",
    "img/QRcode/ช้าง.png",
    "img/QRcode/เซฟ.png",
    "img/QRcode/ดิว.png",
    "img/QRcode/โดม.png",
    "img/QRcode/ตว.png",
    "img/QRcode/ตั๋ง.png",
    "img/QRcode/ตาม.png",
    "img/QRcode/ตี๋.png",
    "img/QRcode/เต้.png",
    "img/QRcode/แตงโม.png",
    "img/QRcode/แทน.png",
    "img/QRcode/ธร.png",
    "img/QRcode/นน.png",
    "img/QRcode/น้ำฝน.png",
    "img/QRcode/เนวัดดาว.png",
    "img/QRcode/บอล2.png",
    "img/QRcode/บอลเซค1.png",
    "img/QRcode/บอส.png",
    "img/QRcode/บิ๊ค.png",
    "img/QRcode/เบิร์ด.png",
    "img/QRcode/แบมแบม.png",
    "img/QRcode/ใบเตย.png",
    "img/QRcode/ปราง.png",
    "img/QRcode/ป๋อม.png",
    "img/QRcode/ปังปอน.png",
    "img/QRcode/ปิง.png",
    "img/QRcode/แปลง.png",
    "img/QRcode/พิคเพ้น.png",
    "img/QRcode/พี.png",
    "img/QRcode/พี่การ์ด.png",
    "img/QRcode/พี่ขวัญ.png",
    "img/QRcode/แพร.png",
    "img/QRcode/แพรว.png",
    "img/QRcode/โพร.png",
    "img/QRcode/ฟร้อง.png",
    "img/QRcode/ฟ้า.png",
    "img/QRcode/เฟรม.png",
    "img/QRcode/เฟิน.png",
    "img/QRcode/เฟินธนัชพร.png",
    "img/QRcode/เฟิร์นวรนิษฐา.png",
    "img/QRcode/เฟิร์ส.png",
    "img/QRcode/แฟ้ม.png",
    "img/QRcode/ภูเขา.png",
    "img/QRcode/มาร์ค.png",
    "img/QRcode/มาร์ช.png",
    "img/QRcode/มิ้นท์.png",
    "img/QRcode/มินนี่.png",
    "img/QRcode/แม๊ก.png",
    "img/QRcode/แม๊กสูง.png",
    "img/QRcode/หยม.png",
    "img/QRcode/ออกัส.png",
    "img/QRcode/อั้ม.png",
    "img/QRcode/อ่ำ.png",
    "img/QRcode/อิ๊คคิว.png",
    "img/QRcode/อิ้งค์.png",
    "img/QRcode/อุ๋มอิ๋ม.png",
    "img/QRcode/อุ๊ย.png",
    "img/QRcode/เอ็ม.png",
    "img/QRcode/เอสโซ่.png",
    "img/QRcode/โอ๊ตตตตตต.png",
    "img/QRcode/โอม.png",
    "img/QRcode/ไอซ์.png",
    "img/QRcode/ไอซ์ช.png"
  ];

  $('.button').click(function() {

    //do before delay
    $("#mainImg").attr('src', "img/count.gif");
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
      console.log("จำนวนคนที่เหลือ :" + (qrimg.length-1));
      console.log("--------------------------");

      qrimg.splice(imgRand, 1);
      i++;

    }, 2650);

    return false;
  });

});
