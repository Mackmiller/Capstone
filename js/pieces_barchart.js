var margin00 = {top: 0, right: 0, bottom: 20, left: 140},
    width00 = 930 - margin00.left - margin00.right,
    height00 = 300 - margin00.top - margin00.bottom;
// append the svg object to the body of the page
var svg = d3.select("#piece1_viz")
  .append("svg")
    .attr("width", width00 + margin00.left + margin00.right)
    .attr("height", height00 + margin00.top + margin00.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin00.left + "," + margin00.top + ")");

d3.csv("https://raw.githubusercontent.com/Mackmiller/DDJ/master/data/top_pieces.csv", function(data) {

//x axis
  var x = d3.scaleLinear()
    .domain([0, 50])
    .range([ 0, width00-50]);
  svg.append("g")
    .attr("transform", "translate(0," + (height00) + ")")
    .call(d3.axisBottom(x))


  // Y axis
  var y = d3.scaleBand()
    .range([ 0, height00])
    .domain(data.map(function(d) { return d.Piece; }))
    .padding(.1);

  svg.append("g")
    .attr("class", "axisWhite")
    .call(d3.axisLeft(y).tickSize(0))


  //Bars
  svg.selectAll("myRect0")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x(0) )
    .attr("y", function(d) { return y(d.Piece); })
    .attr("width", function(d) { return x(d.Value); })
    .attr("height", y.bandwidth() )
    .attr("fill", "#A9261C")
})

svg.append("text")
                   .attr("x", 650)
                   .attr("y", 275)
                   .style("font-family", "sans-serif")
                   .style("font-size", "10px")
                   .text("Number of movies");
