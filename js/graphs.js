var topThreeGraph = [];

function addEventHandler() {
  // Show or hide graphs + change button text on click
  
  $(".btn").click(function () {
    if ($("#aggregate").text() === "Show ___") {
      setGraph({ field: "distance", aggregate: "mean", type: "quantitative" });
      $("#aggregate").text("Show all activities");
    } else {
      $("#aggregate").text("Show means");
      setGraph({ field: "distance", type: "quantitative" });
    }
  });
}

function setGraph(graphValues) {
  // One graph changes dynamically based on the first load of the page and the click of the graph options
  distance_vis_spec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.0.0-beta.8.json",
    description:
      "A graph of the top three activities in relation to the distance of each completion.",
    data: {
      values: topThreeGraph,
    },
    mark: "point",
    width: 400,
    height: 300,
    encoding: {
      y: graphValues,
      x: {
        type: "nominal",
        field: "day",
        // sort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      color: { field: "activityType", type: "nominal" },
      shape: { field: "activityType", type: "nominal" },
    },
  };
  vegaEmbed("#distanceVis", distance_vis_spec, { actions: false });
}

function parseData(raw_data) {
  if (raw_data === undefined) {
    return;
  }

  // data_array = raw_data.map(function (job) {
  //   return new Job(jobData);
  // });

  activity_vis_spec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.0.0-beta.8.json",
    description: "A graph of the number of Jobs containing each type of job.",
    data: {
      values: data_array,
    },
    mark: "bar",
    encoding: {
      y: { aggregate: "count", field: "activityType", type: "quantitative" },
      x: { field: "jobType", type: "ordinal" },
      color: { field: "jobType", type: "nominal", sort: "true" },
    },
  };
  vegaEmbed("#jobVis", activity_vis_spec, { actions: false });

  // Set dynamic graph for first load
  setGraph({ field: "distance", type: "quantitative" });
}

function storeActivityAndDistance(data_array) {}

function setText(activitiesAndDistance) {}

//Wait for the DOM to load
$(document).ready(function () {
  $("#jobVisAgg").hide();
  loadData().then(parseData);
  addEventHandler();
});
