$("#getting-started")
  .countdown("2023/04/02 23:00:00", function(event) {
    $(this).text(
      event.strftime('%D day %H:%M:%S')
    );
  });