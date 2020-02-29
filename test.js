$("button").click(function() {
  const check = $("#fade")[0].classList.toggle("active");
  if (check) {
    $("#fade").slideDown("slow", function() {
      this.style.color = "red";
    });
  } else {
    $("#fade").slideUp("slow");
  }
});
