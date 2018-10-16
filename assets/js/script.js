
$(function() {
  var count = 0;
  $("#update").click(function() {
    count++;
    $("#counter").html("nombre de clics: "+count);
  });
});
// $(function() {
//   var count = 0;
//   $("#update1").click(function() {
//     count;
//     $("#counter").html("nombre de clics: "-count);
//   });
// });
