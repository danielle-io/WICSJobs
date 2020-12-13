function addEventHandler() {}

$(document).ready(function () {
  var stateColors = {};
  for (var i in stateJobs) {
    var totalSum = Object.values(stateJobs[i]).reduce((a, b) => a + b, 0);
    var opacity = totalSum / 10;
    if (stateJobs[i] >= 10) {
      opacity = 1.0;
    }
    stateColors[i] = {};
    stateColors[i]["fill"] = "#ff0c7b";
    stateColors[i]["opacity"] = opacity;
  }

  $("#map").usmap({
    stateSpecificStyles: stateColors,

    mouseoverState: {},

    click: function (event, data) {
      var stateConversion = new StateAbbreviationConversions(data.name);
      var textString =
        "<div class='state-name'>" + stateConversion.stateFull + "</div>";

      if (data.name in stateJobs) {
        for (i in stateJobs[data.name]) {
          textString += "<br>" + i + "\t" + stateJobs[data.name][i];
        }
      }

      document.getElementById("stateInfo").innerHTML = textString;
    },
  });

  $("#over-md").click(function (event) {
    $("#map").usmap("trigger", "MD", "mouseover", event);
  });
});
