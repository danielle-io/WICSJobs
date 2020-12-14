function collapseAndExpandInnerContainers(itemId) {
  // Apply the active and inactive styling
  var containerId = "#" + itemId + "Containter";
  var items = document.getElementsByClassName("side-nav-item");

  // If everything is closed do not close the section
  if ($("#" + itemId).hasClass("active-link")) {
    return;
  }

  for (var item in items) {
    if (items[item].id !== itemId) {
      $("#" + items[item].id).removeClass("active-link");
      $("#" + items[item].id).removeClass("inactive-link");
      $("#" + items[item].id + "Container").removeClass("show");
    }
  }

  // Make current item active
  $("#" + itemId).removeClass("inactive-link");
  $("#" + itemId).addClass("active-link");
  $("#" + itemId + "Container").addClass("show");
}

// Clicking a card opens up the relevant container
$(".card-button").on("click", function (event) {
  collapseAndExpandContainers(this.id);
});

function changeTableView(itemId) {
  // If everything is closed do not close the section
  if ($("#" + itemId).hasClass("active")) {
    return;
  }

  if (itemId === "overallView") {
    $("#overallView").addClass("active");
    $("#individualView").removeClass("active");
    $("#overallViewContainer").addClass("show");
    $("#individualViewContainer").removeClass("show");
  } else {
    $("#overallView").removeClass("active");
    $("#individualView").addClass("active");
    $("#overallViewContainer").removeClass("show");
    $("#individualViewContainer").addClass("show");
  }
}

function collapseAndExpandContainers(itemId) {
  // Apply the active and inactive styling
  var items = document.getElementsByClassName("card-button");
  console.log(items);
  // If everything is closed do not close the section
  if ($("#" + itemId).hasClass("active-card-button")) {
    return;
  }
  for (var item in items) {
    if (items[item].id !== itemId) {
      $("#" + items[item].id).removeClass("active-card-button");
      $("#" + items[item].id + "Container").removeClass("show");
    }
  }

  // Make current item active
  $("#" + itemId).addClass("active-card-button");
  $("#" + itemId + "Container").addClass("show");
}

// Clicking a card opens up the relevant container
$(".side-nav-item").on("click", function (event) {
  console.log(this.id);
  collapseAndExpandInnerContainers(this.id);
});

$(".view-switch-button").on("click", function (event) {
  console.log(this.id);
  changeTableView(this.id);
});
