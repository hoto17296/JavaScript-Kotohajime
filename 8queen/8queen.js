$(function(){

  function init(){
    $("#chessboard").empty();
    for (var i=0; i<8; i++){
      var tr = $("<tr/>");
      for (var j=0; j<8; j++){
        var td = $("<td/>");
        td.addClass('able');
        td.data({ x: i, y: j });
        tr.append(td);
      }
      $("#chessboard").append(tr);
    }
  }

  $(document).on("click", ".able", function(){

    // マスをクリックした時の処理

  });

  $(".reset").click(init);

  init();
})
