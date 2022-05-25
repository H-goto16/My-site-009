particlesJS("particles-js", {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1121.6780303333778,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "image",
      stroke: {
        width: 0,
      },
      image: {
        src: "images/flower.png",
        width: 120,
        height: 120,
      },
    },
    opacity: {
      value: 0.06409588744762158,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8.011985930952697,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 4,
      direction: "bottom-left",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 281.9177489524316,
        rotateY: 127.670995809726,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: false,
});

$(function () {
  $("#wrapper").on("inview", function (event, isInView) {
    if (isInView) {
      $(".title").delay(1000).addClass("inview");
    }
  });
});
$(function () {
  $(".production-title").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("inview");
    }
  });
});
$(function () {
  $(".beautiful-ocean").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("inview");
    }
  });
});
$(function () {
  $(".Délicieuxse-Viande").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("inview");
    }
  });
});
$(function () {
  $(".BTO-Customizer").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("inview");
    }
  });
});
$(function () {
  $(".code").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("inview");
    }
  });
});
$(function () {
  $(".pr-image").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("inview");
    }
  });
});
$(function () {
  $(".goal-title").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("inview");
    }
  });
});
$(function () {
  $(".bar").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("inview");
    }
  });
});
