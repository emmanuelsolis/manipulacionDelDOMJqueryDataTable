

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "sample3.xml",
    dataType: "xml",
    success: function (xml) {
      $(xml)
        .find("person")
        .each(function () {
          let name = $(this).find("name").text();
          let age = $(this).find("age").text();
          let email = $(this).find("email").text();
          let personRow = `<tr><td>${name}</td><td>${age}</td><td>${email}</td></tr>`;
          $("#personTable tbody").append(personRow);
        });
      $(xml)
        .find("book")
        .each(function () {
          let title = $(this).find("title").text();
          let author = $(this).find("author").text();
          let year = $(this).find("year").text();
          let bookRow = `<tr><td>${title}</td><td>${author}</td><td>${year}</td></tr>`;
          $("#bookTable tbody").append(bookRow);
        });
    },
});
});
$(document).ready(function() {
    $('#personTable').DataTable({
      lengthMenu:[3,6,9,12]
    });
    $('#bookTable').DataTable();
});
