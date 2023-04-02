$('#getting-started').countdown("2023/04/02 23:00:00", {elapse: true})
  .on('update.countdown', function(event) {
    if (event.elapsed) {
      $(this).html('PRESALE ENDED!')
      .parent().addClass('disabled');
    $("h3.text-center").css("visibility", "hidden");
    } else {
      $(this).text(
        event.strftime('%D day %H:%M:%S')
      );
    }
  });