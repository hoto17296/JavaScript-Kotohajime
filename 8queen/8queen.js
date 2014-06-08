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
    $(this).removeClass('able').addClass('queen');
    var queenX = $(this).data("x");
    var queenY = $(this).data("y");
    
    $(".able").each(function(){
      var x = $(this).data("x");
      var y = $(this).data("y");
      var diffX = Math.abs(x - queenX);
      var diffY = Math.abs(y - queenY);
      if ( x == queenX || y == queenY || diffX == diffY ){
        $(this).removeClass('able').addClass('disable');
      }
    });

  });

  $(".reset").click(init);

  init();
})
