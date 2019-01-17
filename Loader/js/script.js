var
  images = document.images,
  images_total_count = images.length,
  images_loaded_count = 0,
  total_count = images_total_count,
  loaded_count = 0,
  line_width = 0,
  pers_display = document.getElementById('progress');
if (images_total_count > 0) {
  for (var i = 0; i < images_total_count; i++) {
    var image_clone = new Image();
    image_clone.onload = loaded;
    image_clone.onerror = loaded;
    image_clone.src = images[i].src;
  }

  function loaded() {
    loaded_count++;
    line_width = ((100 / total_count) * loaded_count) + "%";
    pers_display.style.width = line_width;
    pers_display.textContent = line_width;
    if (loaded_count >= total_count) {
      setTimeout(function () {
        var preloader = $('.loader');
        // $(preloader).css('animation','loader 2s linear');
        $(preloader).css('transform', 'scale(1,0)');
        setTimeout(() => {
          $(preloader).css('display', 'none');
        }, 1800);

      }, 1000);
    }
  }
} else {
  setTimeout(function () {
    var preloader = $('.loader');
    // $(preloader).css('animation','loader 2s linear');
    $(preloader).css('transform', 'scale(1,0)');
    setTimeout(() => {
      $(preloader).css('display', 'none');
    }, 1800);

  }, 1000);
}