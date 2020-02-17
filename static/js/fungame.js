document.addEventListener("DOMContentLoaded", function() {
  $(function() {
    $("#qrcode").qrcode({
      text: window.location.href,
      render: "canvas",
      width: 300,
      height: 300
    });
  });
  var blue_kid_number = 8;
  var red_kid_number = 7;
  for (j = 0; j < 5; j++) {
    var tr = document.createElement("tr");
    tr.className = "row";

    for (i = 0; i < 5; i++) {
      var td = document.createElement("td");
      td.setAttribute("id", j * 5 + i + 1);
      td.setAttribute("style", "position:relative;");

      var t = document.createTextNode(pictures[w[i + j * 5]]);

      var a = document.createElement("a");
      a.setAttribute("id", "a" + j + "_" + i);

      var img = document.createElement("img");
      img.setAttribute("id", "img" + j + "_" + i);
      img.src = "static/img/board0.png";

      a.appendChild(img);

      if (pictures[w[i + j * 5]].length > 3) {
        var long_div = document.createElement("div");
        long_div.setAttribute("class", "long_text");
        long_div.appendChild(t);
        a.appendChild(long_div);
      } else {
        var div = document.createElement("div");
        div.setAttribute("class", "text");
        div.appendChild(t);
        a.appendChild(div);
      }

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

  $(".blue").on("dblclick", function() {
    $(this)
      .children("img")
      .attr("src", "static/img/blue_flower.png");
    $(this)
      .children("img")
      .attr("style", "z-index: 1");
    $(this)
      .children("div")
      .hide();
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

  $(".red").on("dblclick", function() {
    $(this)
      .children("img")
      .attr("src", "static/img/red_flower.png");
    $(this)
      .children("img")
      .attr("style", "z-index: 1");
    $(this)
      .children("div")
      .hide();
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

  $(".none").on("dblclick", function() {
    $(this)
      .children("img")
      .attr("src", "static/img/shit.png");
    $(this)
      .children("img")
      .attr("style", "z-index: 1");
    $(this)
      .children("div")
      .hide();
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

  $(".boom").on("dblclick", function() {
    $(this)
      .children("img")
      .attr("src", "static/img/boom_n.png");
    $(this)
      .children("img")
      .attr("style", "z-index: 1");
    $(this)
      .children("div")
      .hide();
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
