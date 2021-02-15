// Variables for the chart
let margin = null,
    width = null,
    height = null;
let svg = null;
let x = null,
    y = null;
let barColor = null;

// STEP 1: Prepare svg before building the chart 
setupCanvasSize();
appendSvg("body");

// STEP 2: Select dataset and its meta data the first time (first one selected is "Oscars Box Office").
let selectedDataset = oscarsBoxOffice;
let metaData = getMetaData();

// STEP 3: Render chart with selected dataset
renderChart(metaData);

// STEP 4: Change dataset. When doing this, firstly existing chart is removed and steps 2 and 3 repeated. 
d3.selectAll("select").on("change", newDataset);

/**
 * @method getMetaData
 * @description Obtains metadata from the selected dataset to use it in different functions to represent its values
 */
function getMetaData() {
  if (selectedDataset === oscarsBoxOffice) {
    return boxOfficeMetaData;
  }
  return rankingProgrammingLanguagesMetaData;
}

/**
 * @method renderChart
 * @param {Object} selectedDatasetMetaData 
 * @description Performs the steps to display the chart: setup x-y scales, axis and labels, append chart title, bars (including animation and tooltips) and legend
 */
function renderChart(selectedDatasetMetaData) {
  setupXScale(selectedDatasetMetaData.xScaleField);
  setupYScale(selectedDatasetMetaData.yScaleField);
  appendXAxis();
  appendXLabel(selectedDatasetMetaData.xLabelText);
  appendYAxis(selectedDatasetMetaData.yAxisTickFormat);
  appendYLabel(selectedDatasetMetaData.yLabelText);
  appendChartTitle(selectedDatasetMetaData.chartTitleText);
  appendChartBars(selectedDatasetMetaData.xScaleField, selectedDatasetMetaData.yScaleField, selectedDatasetMetaData.legendFieldName);
  appendLegend(selectedDatasetMetaData.legendFieldName);
}

/**
 * @method newDataset
 * @description Takes <select> element (class name "selectDataset") from document (index.html) for changing selectedDataset variable in order to consider one dataset or another for the chart. Then it clears existing chart and render a new one.
 */
function newDataset() {
  let chartSelect = document.getElementById("selectDataset");
  let selectedDatasetName = chartSelect.options[chartSelect.selectedIndex].value;
  if (selectedDatasetName === "oscarsBoxOffice") {
    selectedDataset = oscarsBoxOffice;
  } else {
    selectedDataset = rankingProgrammingLanguages;
  }
  clearChart();
  metaData = getMetaData();
  renderChart(metaData);
}

/**
 * @method clearChart
 * @description Removes all the element of the existing chart.
 */
function clearChart() {
  svg.select(".x.axis").remove();
  svg.select(".x.label").remove();
  svg.select(".y.axis").remove();
  svg.select(".y.label").remove();
  svg.select(".chartTitle").remove();
  svg.select(".legend").remove();
  svg.selectAll(".bar.bar").data([]).exit().remove();
}

/**
 * @method setupCanvasSize
 * @description Sets the value of the variables margin, width and height for the positioning of svg
 */
function setupCanvasSize() {
  margin = {top: 50, left: 80, bottom: 60, right: 200};
  width = 960 - margin.left - margin.right;
  height = 400 - margin.top - margin.bottom;
}

/**
 * @method appendSvg
 * @description Adds a svg element to a dom element considering width and height variables for positioning
 * @param {String} domElement The dom element to which svg will be added
 */
function appendSvg(domElement) {
  svg = d3.select(domElement).append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform",`translate(${margin.left}, ${margin.top})`);
}

/**
 * @method setupXScale
 * @description Sets x-axis scale mapping ordinal data (domain) to pixels in the screen (rangeRound), and gap for visualization of bars later.
*/
function setupXScale(xScaleField) {
  x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(0.1)
        .domain(selectedDataset.map(function(d) {
          return d[xScaleField];
        }));
}

/**
 * @method setupYScale
 * @description Sets y-axis scale, mapping linear data (domain) to pixels in the screen (range). To display the data vertically we map canvas range (height..0) = (graph bottom..graph top) to data = domain (0...maxData)
 */
function setupYScale(yScaleField) {
    var yMaxDataset = d3.max(selectedDataset, function(d) {
      return d[yScaleField];
    });
    
    y = d3.scaleLinear()
      .range([height, 0])
      .domain([0, yMaxDataset]);
}

/**
 * @method appendXAxis
 * @description Add x-axis at the bottom position of svg, translating it from 0 position (top-left corner) to "height" distance.
 */
function appendXAxis() {
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform",`translate(0, ${height})`)
    .call(d3.axisBottom(x));
}

/**
 * @method appendXLabel
 * @description Adds x-axis label to the svg placed at the bottom side.
 */
function appendXLabel(xLabelText) {
  svg.append("text")
    .attr("class", "x label")
    .attr("x", width)
    .attr("y", height + 40)
    .attr("text-anchor", "end")
    .text(xLabelText);
}

/**
 * @method appendYAxis
 * @description Add y-axis at the left position of svg.
 */
function appendYAxis(yAxisTickFormat) {
  svg.append("g")
    .attr("class", "y axis")
    .call(d3.axisLeft(y)
    .tickFormat(d3.format(yAxisTickFormat)));
}

/**
 * @method appendYLabel
 * @description Adds y-axis label to the svg.
 */
function appendYLabel(yLabelText) {
  svg.append("text")
    .attr("class", "y label")
    .attr("x", 0)
    .attr("y", -50)
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .text(yLabelText);
}

/**
 * @method appendChartTitle
 * @description Add title to the chart.
 */
function appendChartTitle(chartTitleText) {
  svg.append("text")
      .attr("class", "chartTitle")
      .attr("x", (width / 2))             
      .attr("y", 0 - (margin.top / 2))
      .attr("text-anchor", "middle")  
      .style("font-size", "25px") 
      .style("text-decoration", "bold")  
      .text(chartTitleText);
}

/**
 * @method getHtmlForToolTip
 * @param {Object} d
 * @description Obtains html content for tooltips to be visualized with the mouse on the bars, for the given dataset.
 */
function getHtmlForToolTip(d) {
  var toolTipContent = metaData.tooltip.reduce(function(totalString, metaDataItem, index) {
    var myToolTipString = totalString + metaDataItem.fieldText + "<b>" + d[metaDataItem.fieldValue] + "</b>";
    if (index !== metaData.tooltip.length - 1) {
      myToolTipString = myToolTipString + "<br>";
    }
    return myToolTipString;
  }, "")
  return toolTipContent;
}

/**
 * @method appendChartBars
 * @description Add bars to the graph, including tooltips, animation and colors.
 */
function appendChartBars(xAxisField, yAxisField, legendField) {
  var bars = svg.selectAll(".bar")
              .data(selectedDataset)
              .enter()
              .append('rect')
              .attr("class", "bar")
  
  var div = d3.select("body")
              .append("div")
              .attr("class", "toolTip")
      
  barColor = d3.scaleOrdinal(d3.schemeCategory10);

  bars
    .attr('x', function(d) {
      return x(d[xAxisField]);
    })

    .attr('width', function() {
      return x.bandwidth();
    })

    .attr('y', y(0))

    .on("mousemove", function(d){
      div.style("left", d3.event.pageX+10+"px");
      div.style("top", d3.event.pageY-25+"px");
      div.style("display", "inline-block");
      div.html(getHtmlForToolTip(d));
    })

    .on("mouseout", function(d){
      div.style("display", "none");
    })

    .transition()
    .duration(1000)

    .attr('height', function(d) {
      return height - y(d[yAxisField]);
    })

    .attr('y', function(d) {
      return y(d[yAxisField]);
    })

    .attr('fill', function(d) {
      return barColor(d[legendField]);
    });
}

/**
 * @method appendLegend
 * @description Add legend to the chart.
 */
function appendLegend(legendFieldName) {
  svg.append('g')
      .attr('class', 'legend')
      .selectAll('text')
      .data(selectedDataset)
      .enter()
      .append('text')
      
      .text(function(d) {
        return '• ' + d[legendFieldName]; 
      })
      
      .attr('fill', function(d) { 
        return barColor(d[legendFieldName]); 
      })

      .attr('x', width + 10)

      .attr('y', function(d, i) {
        return 20 + (20 * i); 
      });
  }
