(function () {
  var list = document.getElementById("toc-list");
  if (!list) return;
  var headings = document.querySelectorAll("article h2");
  headings.forEach(function (h, i) {
    if (!h.id) {
      var slug = h.textContent
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      h.id = slug || "section-" + (i + 1);
    }
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = "#" + h.id;
    a.textContent = h.textContent.replace(/^\s*\d+\.\s*/, "");
    li.appendChild(a);
    list.appendChild(li);
  });
  var details = document.querySelector(".toc details");
  if (details && window.matchMedia("(min-width: 62rem)").matches) {
    details.open = true;
  }
})();
