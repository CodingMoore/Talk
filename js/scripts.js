$(document).ready(function() {
  $("button#hello").click(function() {
    $(".user").prepend("<li>Hello!</li>");
    $(".webpage").prepend("<li>Why hello there!</li>");
  });

  $("button#goodbye").click(function() {
    $(".user").prepend("<li>Goodbye!</li>");
    $(".webpage").prepend("<li>Goodbye, dear user!</li>");
  });

  $("button#stop").click(function() {
    $(".user").prepend("<li>Stop copying me!</li>");
    $(".webpage").prepend("<li>Pardon me. I mean no offense.</li>");
  });
});