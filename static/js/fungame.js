document.addEventListener("DOMContentLoaded", function() {
  $(function() {
    $("#qrcode").qrcode({
      text: window.location.href,
      render: "canvas",
      width: 300,
      height: 300
    });
  });
  var pictures = [
    "公主",
    "規",
    "暴龍",
    "油畫",
    "空氣",
    "俠盜",
    "時鐘",
    "牙線",
    "橘子",
    "推",
    "貨櫃",
    "溪",
    "面紙",
    "雨傘",
    "衣櫥",
    "鼠",
    "丟",
    "死",
    "法條",
    "手錶",
    "鉛筆",
    "書",
    "丘",
    "珠寶",
    "滑雪",
    "紐西蘭",
    "埃及",
    "富",
    "吉他",
    "豎笛",
    "大河",
    "腦下腺",
    "換",
    "木星",
    "火",
    "首都",
    "柬埔寨",
    "鼓",
    "血",
    "船",
    "汽油",
    "心臟",
    "鋸",
    "拍",
    "波斯",
    "歌劇院",
    "號角",
    "紅毛丹",
    "噴射",
    "銀",
    "水缸",
    "棒",
    "牙科",
    "戰士",
    "海盜",
    "蜜餞",
    "公園",
    "漫畫",
    "大樓",
    "火柴",
    "北京",
    "堅果",
    "院",
    "槍",
    "度",
    "副",
    "日",
    "礦",
    "網",
    "椅",
    "騎",
    "查",
    "頭",
    "雀鳥",
    "魚",
    "尼斯湖",
    "外來者",
    "大使館",
    "體育館",
    "巧克力",
    "台灣",
    "瓶",
    "刷",
    "熊",
    "法庭",
    "人馬",
    "甲板",
    "薄荷",
    "捷運",
    "象牙",
    "射擊",
    "走私者",
    "度",
    "賊",
    "頂",
    "結",
    "老鼠",
    "警察",
    "首長",
    "手掌",
    "刀",
    "鬼",
    "領袖",
    "實驗室",
    "器官",
    "直升機",
    "拖鞋",
    "襪子",
    "內衣",
    "精靈",
    "魔法",
    "希臘",
    "森林",
    "沙漠",
    "女巫",
    "荒野",
    "公主",
    "輪盤",
    "機槍",
    "衛星",
    "猩",
    "檸檬",
    "企鵝",
    "觸角",
    "潛水",
    "美國",
    "滑",
    "滴",
    "波",
    "炬",
    "雪",
    "冰",
    "鈴",
    "雅",
    "沙",
    "英雄",
    "大富翁",
    "獨角獸",
    "日誌",
    "賭場",
    "電池",
    "體重",
    "埃及",
    "空氣",
    "檔案",
    "瓷",
    "磁碟",
    "長笛",
    "吉他",
    "探員",
    "草圖",
    "澳洲",
    "十字",
    "稻草",
    "德國",
    "奶",
    "塑膠",
    "毒",
    "戲院",
    "亞馬遜",
    "土星",
    "音",
    "騎士",
    "床",
    "柱",
    "搖",
    "獅",
    "師",
    "濕",
    "洗衣機",
    "唱",
    "肥皂",
    "脂肪",
    "花萼",
    "軟顎",
    "神經",
    "天堂",
    "芭樂",
    "倉庫",
    "貨櫃",
    "鋼",
    "項鍊",
    "髮簪",
    "攪",
    "亮",
    "鄉",
    "診",
    "刮",
    "光碟",
    "聲",
    "吃",
    "蛋白質",
    "描",
    "廟",
    "古老",
    "聖殿",
    "教堂",
    "吻",
    "棚",
    "桌子",
    "晃",
    "飛機",
    "頭蝨",
    "蝙蝠",
    "夜",
    "硫酸",
    "蝕",
    "雨傘",
    "套",
    "狼人",
    "偵探",
    "龍捲風",
    "平原",
    "火山",
    "沉",
    "鑽石",
    "地層",
    "符咒",
    "橄欖",
    "地中海",
    "競技場",
    "公投",
    "民主",
    "法律",
    "花生",
    "地瓜",
    "板凳",
    "羽球",
    "孔雀",
    "暴龍",
    "劣",
    "蝸牛",
    "藻",
    "鹽",
    "膠",
    "礁",
    "澆",
    "椒",
    "壓",
    "窒息",
    "浪",
    "漲潮",
    "麥克風",
    "樹酯",
    "映",
    "硬",
    "手機",
    "報告",
    "阿根廷",
    "丹麥",
    "乳牛",
    "草",
    "養分",
    "蛋白",
    "土",
    "礦",
    "九份",
    "豚",
    "龜",
    "象",
    "塔",
    "枯",
    "窟",
    "骨",
    "谷",
    "泰國",
    "馬鈴薯",
    "汗",
    "尿",
    "臭",
    "耳",
    "迷宮",
    "淋巴",
    "平衡",
    "獨木橋",
    "輪胎",
    "泛舟",
    "峽谷",
    "公路",
    "駕照",
    "鐵",
    "金",
    "護照",
    "火箭",
    "銀河",
    "宇宙",
    "蠟燭",
    "胸花",
    "地震",
    "板塊",
    "枕頭",
    "棉花",
    "絲",
    "碳酸",
    "石膏",
    "瓷",
    "熔",
    "沸騰",
    "蒸氣",
    "牛排",
    "叉",
    "冰淇淋",
    "酪",
    "駱駝",
    "仙人掌",
    "挪威",
    "勇者",
    "投手",
    "槍手",
    "棍",
    "俄羅斯",
    "螺絲",
    "鎖",
    "鑰",
    "酵素",
    "鼻",
    "黏膜",
    "纖維",
    "鬍",
    "瞳孔",
    "顯微鏡",
    "電子",
    "魂",
    "死",
    "店",
    "墊",
    "電",
    "吸",
    "熟",
    "殼",
    "螢光",
    "抹",
    "擦拭",
    "行政"
  ];
  var blue_kid_number = 8;
  var red_kid_number = 7;
  for (j = 0; j < 5; j++) {
    var tr = document.createElement("tr");
    tr.className = "row";

    for (i = 0; i < 5; i++) {
      var td = document.createElement("td");
      td.setAttribute("id", j * 5 + i + 1);
      td.setAttribute("style", "position:relative;");

      var div = document.createElement("div");
      div.setAttribute("class", "text");

      var t = document.createTextNode(pictures[w[i + j * 5]]);
      div.appendChild(t);

      var a = document.createElement("a");
      a.setAttribute("id", "a" + j + "_" + i);

      var img = document.createElement("img");
      img.setAttribute("id", "img" + j + "_" + i);
      img.src = "static/img/board0.png";

      a.appendChild(img);
      a.appendChild(div);
      td.appendChild(a);
      tr.appendChild(td);
    }

    document.getElementById("table").appendChild(tr);
  }

  var all_a = [
    "a0_0",
    "a0_1",
    "a0_2",
    "a0_3",
    "a0_4",
    "a1_0",
    "a1_1",
    "a1_2",
    "a1_3",
    "a1_4",
    "a2_0",
    "a2_1",
    "a2_2",
    "a2_3",
    "a2_4",
    "a3_0",
    "a3_1",
    "a3_2",
    "a3_3",
    "a3_4",
    "a4_0",
    "a4_1",
    "a4_2",
    "a4_3",
    "a4_4"
  ];

  console.log(c);

  for (i = 0; i < 9; i++) {
    var a = all_a[c[i]];
    document.getElementById(a).setAttribute("class", "blue");
  }

  for (i = 0; i < 8; i++) {
    var a = all_a[c[i + 9]];
    document.getElementById(a).setAttribute("class", "red");
  }

  for (i = 0; i < 7; i++) {
    var a = all_a[c[i + 17]];
    document.getElementById(a).setAttribute("class", "none");
  }

  var a = all_a[c[24]];
  document.getElementById(a).setAttribute("class", "boom");

  $(".blue").on("click", function() {
    $(this)
      .children("img")
      .attr("src", "static/img/blue_flower.png");
    $(this)
      .children("img")
      .attr("style", "z-index: 1");
    $(this).attr("style", "cursor: default;");
    $(this).off("click");
    $("#blue_kid_number").html(blue_kid_number--);

    if (blue_kid_number === -1) {
      $("#alert_win").html("恭喜藍隊獲勝!!!");
      $("a").unbind("click");
    } else if ($("#blue_or_red").html() === "藍隊回合!") {
      $("#alert").html("恭喜找到藍色小花!!!");
    } else {
      $("#alert").html("QQ~找成藍小花ㄌ...");
      $("#blue_or_red").html("藍隊回合!");
    }
    setTimeout(stop, 1400);
    function stop() {
      $("#alert").html("");
    }
  });

  $(".red").on("click", function() {
    $(this)
      .children("img")
      .attr("src", "static/img/red_flower.png");
    $(this)
      .children("img")
      .attr("style", "z-index: 1");
    $(this).attr("style", "cursor: default;");
    $(this).off("click");
    $("#red_kid_number").html(red_kid_number--);

    if (red_kid_number === -1) {
      $("#alert_win").html("恭喜紅隊獲勝!!!");
      $("a").unbind("click");
    } else if ($("#blue_or_red").html() === "紅隊回合!") {
      $("#alert").html("恭喜找到紅色小花!!!");
    } else {
      $("#alert").html("QQ~找成紅小花ㄌ...");
      $("#blue_or_red").html("紅隊回合!");
    }
    setTimeout(stop, 1400);
    function stop() {
      $("#alert").html("");
    }
  });

  $(".none").on("click", function() {
    $(this)
      .children("img")
      .attr("src", "static/img/shit.png");
    $(this)
      .children("img")
      .attr("style", "z-index: 1");
    $(this).attr("style", "cursor: default;");
    $(this).off("click");
    $("#alert").html("找到屎啦哈哈哈~~~");
    if ($("#blue_or_red").html() === "藍隊回合!") {
      $("#blue_or_red").html("紅隊回合!");
    } else {
      $("#blue_or_red").html("藍隊回合!");
    }
    setTimeout(stop, 1400);
    function stop() {
      $("#alert").html("");
    }
  });

  $(".boom").on("click", function() {
    $(this)
      .children("img")
      .attr("src", "static/img/boom_n.png");
    $(this)
      .children("img")
      .attr("style", "z-index: 1");
    $(this).off("click");
    document.body.background = "static/img/boom.jpg";
    document.body.setAttribute("style", "z-index:4");

    if ($("#blue_or_red").html() === "紅隊回合!") {
      $("#alert_lose").html("紅隊落敗...");
    } else {
      $("#alert_lose").html("藍隊落敗...");
    }
    $("a").unbind("click");
  });

  $("#change_red").on("click", function() {
    $("#blue_or_red").html("紅隊回合!");
  });

  $("#change_blue").on("click", function() {
    $("#blue_or_red").html("藍隊回合!");
  });

  var array = [];

  for (var i = 1; i < 26; i++) {
    var a = $("#" + i)
      .children("a")
      .attr("class");
    array.push(a);
  }

  for (j = 0; j < 5; j++) {
    var tr = document.createElement("tr");
    tr.className = "row";

    for (i = 0; i < 5; i++) {
      var td = document.createElement("td");
      td.setAttribute("class", "answer_td");
      var div = document.createElement("div");
      div.setAttribute("id", "answer_div");

      if (array[j * 5 + i] === "blue") {
        div.setAttribute("style", "background: rgb(0, 119, 255);");
        td.appendChild(div);
      } else if (array[j * 5 + i] === "red") {
        div.setAttribute("style", "background: rgb(250, 28, 20);");
        td.appendChild(div);
      } else if (array[j * 5 + i] === "none") {
        div.setAttribute("style", "background: lightyellow;;");
        td.appendChild(div);
      } else if (array[j * 5 + i] === "boom") {
        div.setAttribute("style", "background: rgb(83, 83, 83);");
        td.appendChild(div);
      }

      tr.appendChild(td);
    }

    document.getElementById("table2").appendChild(tr);
  }

  document.querySelector("#answer_button").onclick = function() {
    $("#question").show();
    $("#yes_button").show();
    $("#no_button").show();
    $("#answer_button").attr("disabled", true);
  };

  document.querySelector("#qrcode_button").onclick = function() {
    $("#qrcode").slideToggle("slow");
  };

  $("#yes_button").on("click", function() {
    $("#yes_button").hide();
    $("#no_button").hide();
    $("#question").hide();
    $("#answer_button").hide();
    $(".table2_div").slideToggle("slow");
    $("#ok_button").slideToggle("slow");
  });

  $("#no_button").on("click", function() {
    $("#yes_button").hide();
    $("#no_button").hide();
    $("#question").hide();
    $("#answer_button").attr("disabled", false);
  });

  $("#ok_button").on("click", function() {
    $("#ok_button").slideToggle("slow");
    $(".table2_div").slideToggle("slow");
  });

  if ($(window).width() < $(window).height()) {
    $(".table_div")
      .removeClass("col-sm-7")
      .addClass("container-fluid");
    $(".rm_row").removeClass("row");
    $(".order-last")
      .removeClass("col-sm-3")
      .addClass("container-fluid");
    $(".add_row").addClass("row");
    $(".left").addClass("col-6");
    $(".right").addClass("col-6");
    $(".rm_when_sm").css("display", "none");
  }
  if ($(window).width() > $(window).height() && $(window).width() < 1367) {
    $(".rm_when_sm").css("display", "none");
    $(".table_div")
      .removeClass("col-sm-7")
      .addClass("col-sm-10");
    $(".order-last")
      .removeClass("col-sm-3")
      .addClass("col-sm-2");
  }

  $(window).on("resize", function() {
    if ($(window).width() < $(window).height()) {
      $(".table_div")
        .removeClass("col-sm-7")
        .addClass("container-fluid");
      $(".rm_row").removeClass("row");
      $(".order-last")
        .removeClass("col-sm-3")
        .addClass("container-fluid");
      $(".add_row").addClass("row");
      $(".left").addClass("col-6");
      $(".right").addClass("col-6");
      $(".rm_when_sm").css("display", "none");
      if ($(".table_div").hasClass("col-sm-10") === true) {
        $(".table_div").removeClass("col-sm-10");
        $(".order-last").removeClass("col-sm-2");
      }
    }

    if ($(window).width() > $(window).height() && $(window).width() < 1367) {
      $(".rm_when_sm").css("display", "none");
      $(".table_div")
        .removeClass("col-sm-7")
        .addClass("col-sm-10");
      $(".order-last")
        .removeClass("col-sm-3")
        .addClass("col-sm-2");
      if ($(".table_div").hasClass("container-fluid") === true) {
        $(".table_div").removeClass("container-fluid");
        $(".rm_row").addClass("row");
        $(".order-last").removeClass("container-fluid");

        $(".add_row").removeClass("row");
        $(".left").removeClass("col-6");
        $(".right").removeClass("col-6");
      }
    }
  });
});
