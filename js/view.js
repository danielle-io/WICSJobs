function collapseAndExpandInnerContainers(itemId) {
  // Apply the active and inactive styling
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

function collapseAndExpandContainers(itemId, collapsedDrawer) {
  // Apply the active and inactive styling
  var items = ["aboutView", "sortAndContactView", "submitRatingView"];

  // Collapsed drawer Ids are slightly different, so extended name
  // needs to match the container name
  if (collapsedDrawer) {
    itemId = itemId + "View";
  }
  // If everything is closed do not close the section
  if ($("#" + itemId).hasClass("active-card-button")) {
    return;
  }

  window.scrollTo(0, 0);

  for (var i in items) {
    // Prevents code breaking if invalid items in loop
    var getIdName = items[i].split("View");
    if (items[i] !== itemId) {
      // Remove active class from drawer link - get name by splitting
      $("#" + getIdName[0]).removeClass("active-link");
      // Remove active class from expanded nav link
      $("#" + items[i]).removeClass("active-card-button");
      $("#" + items[i] + "Container").removeClass("show");
    } else {
      // Make current item active
      $("#" + itemId.split("View")[0]).addClass("active-link");
      $("#" + itemId).addClass("active-card-button");
    }
  }
  $("#" + itemId + "Container").addClass("show");
  $("#collapsingNavbar").removeClass("show");
  $("#headingFont").removeClass("hide-title");
}

// Clicking a card opens up the relevant container
$(".side-nav-item").on("click", function (event) {
  collapseAndExpandInnerContainers(this.id);
});

$(".view-switch-button").on("click", function (event) {
  changeTableView(this.id);
});

// Clicking a card opens up the relevant container
$(".card-button").on("click", function (event) {
  collapseAndExpandContainers(this.id, false);
});

// Clicking link from drawer opens up the relevant container
$(".drawer-link").on("click", function (event) {
  collapseAndExpandContainers(this.id, true);
});

// Clicking link from drawer opens up the relevant container
$(".navbar-toggler").on("click", function (event) {
  if ($("#collapsingNavbar")[0].classList.value.search("show")) {
    $("#headingFont").addClass("hide-title");
  } else {
    $("#headingFont").removeClass("hide-title");
  }
});
