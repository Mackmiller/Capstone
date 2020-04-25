var margin5 = { top: 20, left: 140, bottom: 30, right: 50 },
    width5 = 950 - margin5.left - margin5.right,
    height5 = 830 - margin5.top - margin5.bottom;

var x = function(d) { return d.rating; },
    y = function(d) { return d.genre; },
    area = function(d) { return d.budget; };

var xScale = d3v3.scale.linear()
      .domain([1930, 2019])
      .range([0, width5]),
    yScale = d3v3.scale.ordinal()
      .domain(["La donna e mobile", "Toccata and Fugue", "Nocturne No. 2", "Ride of the Valkyries", "Pomp and Circumstance", "Messiah: Hallelujah", "William Tell: Overture", "Wedding March", "Bridal Chorus", "The Blue Danube"])
      .rangeBands([height5, 0]),
   // areaScale = d3v3.scale.linear().range([0, 125]),
    colorScale = d3v3.scale.quantize()
     .domain([1930, 2020])
     .range(["#a9261c"]);

var xValue = function(d) { return xScale(x(d)); },
    yValue = function(d) { return yScale(y(d)) + yScale.rangeBand()/2; },
    rValue = function(d) {
      var A = 60;
      return Math.sqrt(A / Math.PI);
    },
    colorValue = function(d) { return colorScale(x(d)); };

var xAxis = d3v3.svg.axis().scale(xScale).orient("bottom").tickFormat(d3v3.format('d')),
    yAxis = d3v3.svg.axis().scale(yScale).orient("left");

    var tip = d3v3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
        return "<span style='color:white'>" + d.title + "</span>";
      })

var bubbleChart = d3v3.forceChart()
 .size([width5, height5])
 .x(xValue)
 .y(yValue)
 .r(rValue)
 .xGravity(3)    // make the x-position more accurate
 .yGravity(1/3); // ...and the y-position more flexible

 var svg4 = d3v3.select("#beechart_viz")
.append("svg")
   .attr("width", width5 + margin5.left + margin5.right)
   .attr("height", height5 + margin5.top + margin5.bottom)
 .append("g")
   .attr("transform", "translate(" + margin5.left + "," + margin5.top + ")");

svg4.call(tip);

d3v3.json("data/movies.json", function(error, movies) {
  if (error) throw error;

  //areaScale.domain([0,d3v3.max(movies, area)]);

  // Draw axes
  svg4.append("g")
     .attr("class", "x axis")
     .attr("transform", "translate(0," + -27 + ")") //x axis location, -27 for top
     .call(xAxis)




  svg4.append("g")
     .attr("class", "y axis")
     .call(yAxis)
   .selectAll(".tick line")
     .attr("x2", width5)
     .attr("stroke-dasharray", "1, 2")
     .style("stroke", "grey");

     // Draw tooltip
 /*    var tooltip3 = d3v3.select("#beechart_viz")
        .append("div")
          .style("opacity", 0)
          .style("position", "absolute")
          .attr("class", "tooltip3")
          .style("background-color", "black")
          .style("border-radius", "5px")
          .style("padding", "10px")
          .style("color", "white")



          var showTooltip3 = function(d) {
       tooltip3
         .transition()
         .duration(200)
       tooltip3
         .style("opacity", 1)
         .html(d.title)
         .style("left", (d3v3.mouse(this)[0]+5) + "px")
         .style("top", (d3v3.mouse(this)[1]+5) + "px")

     }
     var moveTooltip3 = function(d) {
       tooltip3
         .style("left", (d3v3.mouse(this)[0]+5) + "px")
         .style("top", (d3v3.mouse(this)[1]+5) + "px")
     }
     var hideTooltip3 = function(d) {
       tooltip3
         .transition()
         .duration(200)
         .style("opacity", 0)
     }
*/


  // Draw bubbles
  svg4.append("g").call(bubbleChart, movies)
     .attr("class", "bubbles")
   .selectAll(".node").append("circle")
     .attr("r", function(d) { return d.r0; })
     .attr("fill", colorValue)
     .on('mouseover', tip.show)
   .on('mouseout', tip.hide)
   /*  .on("mouseover", showTooltip3 )
   .on("mousemove", moveTooltip3 )
   .on("mouseleave", hideTooltip3 )*/

});

function legend(selection) {
  var legendData = [
    { budget: 200000000, text: "$200 million", dy: 0 },
    { budget: 100000000, text: "$100 million", dy: 20 },
    { budget: 50000000, text: "$50 million", dy: 40 },
    { budget: 10000000, text: "$10 million", dy: 60 }
  ];



  legend.selectAll(".item").data(legendData)
   .enter().append("g")
     .attr("transform", function(d) { return "translate(0," + d.dy + ")"; })
     .each(function(d) {
       d3v3.select(this).append("circle")
         .attr("r", rValue(d))
         .style("fill", "none")
         .style("stroke", "slategrey");
       d3v3.select(this).append("text")
         .attr("dx", 10)
         .attr("dy", 4)
         .text(d.text);
     });
}
