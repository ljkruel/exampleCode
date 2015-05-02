// This js file was created to try out the new MS VS Code application

function drawBubbleChart(container, data){
	
	var chart = d3.select(container).append("svg").attr("width",600).attr("height",600);
	
	var data = [
		{ name: "one", value: 200 },
		{ name: "two", value: 100 },
		{ name: "three", value: 300 },
		{ name: "four", value: 250 },
		{ name: "five", value: 50 }
	];
	
	var root = {
		name: "Everything",
		data: data
	};
	
	var myBubbleLayout = d3.layout.pack()
									.children(function(d) {return d.data;})
									.value(function(d) { return d.value;})
									.size([600,600]);
	
	chart.selectAll(".bubble")
			.data(myBubbleLayout(root))
				.enter()
					.append("circle")
						.attr("class", "bubble")
						.attr("cx", function(d) {return d.x;})
						.attr("cy", function(d) {return d.y;})
						.attr("r", function(d) { return d.r;});
}