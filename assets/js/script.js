var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

        (function() {
          var qs, js, q, s, d = document,
            gi = d.getElementById,
            ce = d.createElement,
            gt = d.getElementsByTagName,
            id = "typef_orm",
            b = "https://embed.typeform.com/";
          if (!gi.call(d, id)) {
            js = ce.call(d, "script");
            js.id = id;
            js.src = b + "embed.js";
            q = gt.call(d, "script")[0];
            q.parentNode.insertBefore(js, q)
          }
        })();

 $("#ingredientes").dblclick(function () {
   $("#ingredientes").addClass("text-danger");
 });
 $("#preparacion").dblclick(function () {
  $("#preparacion").addClass("text-danger");
});

$(".comida").click(function() {
  $(".receta").toggle();

  
});
