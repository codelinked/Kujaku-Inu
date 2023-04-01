$("#getting-started")
  .countdown("2023/04/02 23:00:00", function(event) {
    $(this).text(
      event.strftime('%D day %H:%M:%S')
    );
  }).on('finish.countdown', function(event) {
    $(this).html('PRESALE ENDED!')
      .parent().addClass('disabled');
    $("h3.text-center").css("visibility", "hidden");
  });