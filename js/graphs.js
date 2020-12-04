function addEventHandler() {
  // Show or hide graphs + change button text on click
  // $(".btn").click(function () {
  //   if ($("#aggregate").text() === "Show ___") {
  //     setGraph({
  //       field: "distance",
  //       aggregate: "mean",
  //       type: "quantitative",
  //     });
  //     $("#aggregate").text("Show all activities");
  //   } else {
  //     $("#aggregate").text("Show means");
  //     setGraph({ field: "distance", type: "quantitative" });
  //   }
  // });
}

// function setGraph(graphValues) {
//   // One graph changes dynamically based on the first load of the page and the click of the graph options
//   distance_vis_spec = {
//     $schema: "https://vega.github.io/schema/vega-lite/v4.0.0-beta.8.json",
//     description:
//       "A graph of the top three activities in relation to the distance of each completion.",
//     data: {
//       values: topThreeGraph,
//     },
//     mark: "point",
//     width: 400,
//     height: 300,
//     encoding: {
//       y: graphValues,
//       x: {
//         type: "nominal",
//         field: "day",
//         // sort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//       },
//       color: { field: "activityType", type: "nominal" },
//       shape: { field: "activityType", type: "nominal" },
//     },
//   };
//   vegaEmbed("#distanceVis", distance_vis_spec, { actions: false });
// }

// Set dynamic graph for first load
// setGraph({ field: "distance", type: "quantitative" });

function storeActivityAndDistance(data_array) {}

function setText(activitiesAndDistance) {}

//Wait for the DOM to load
$(document).ready(function () {
  console.log(stateJobs);
  // $("#jobVisAgg").hide();
  // loadData().then(parseData);
  // addEventHandler();

  var stateColors = {};
  for (var i in stateJobs) {
    var totalSum = Object.values(stateJobs[i]).reduce((a, b) => a + b, 0);
    var opacity = totalSum / 10;
    if (stateJobs[i] >= 10) {
      opacity = 1.0;
    }
    console.log(opacity);
    stateColors[i] = {};
    stateColors[i]["fill"] = "#ff0c7b";
    stateColors[i]["opacity"] = opacity;
  }

  $("#map").usmap({
    stateSpecificStyles: stateColors,

    mouseoverState: {},

    click: function (event, data) {
      var textString = data.name;
      if (data.name in stateJobs) {
        for (i in stateJobs[data.name]) {
          textString += "<br>" + i + '\t' + stateJobs[data.name][i];
        }
      }

      document.getElementById("stateInfo").innerHTML = textString;

      document.inner
    },
  });

  $("#over-md").click(function (event) {
    $("#map").usmap("trigger", "MD", "mouseover", event);
  });
});
