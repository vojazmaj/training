$.getJSON( "json/colors.json", function( data ) {
  var container = $('.container');
  $.each(data, function (index, color) {

    var rowHtml = '<div class="row"> <div class="col color-column" style="background-color: '+color+'">'+index+'</div> </div>';

    container.html(container.html()+rowHtml);
  })

});