$(function () {
  // Button volume
  $(".rotaryswitchPlugin").rotaryswitch({
    // Minimal value
    minimum: 0,
    // Maximum value
    maximum: 100,
    // Step size
    step: 5,
    // Snap to steps in motion
    snapInMotion: true,
    // Start point in deg
    beginDeg: 270,
    // Length in deg
    lengthDeg: 180,
    // Which value will used, if the the start and the end
    minimumOverMaximum: false,
    // Show input element
    showInput: false,
    // Show deg marks
    showMarks: true,
    // Theme class
    themeClass: "defaultTheme",
  });

  // Toggle button and play button
  $(document).ready(function () {
    $(".btn_play").click(function () {
      $(this).toggleClass("pause");
    });
    $(".btn_toggle").click(function () {
      $(this).toggleClass("on");
    });
    $(".btn_stop").click(function () {
      $(this).toggleClass("pushed");
    });
    $(".btn_stop").mouseout(function () {
      $(this).removeClass("pushed");
    });
  });
  // Button play/pause
});
