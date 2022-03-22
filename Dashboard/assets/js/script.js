var stars = [13, 15, 18, 20, 11, 12, 19];
var frameworks = [
	"Maandag",
	"Dinsdag",
	"Woensdag",
	"Donderdag",
	"Vrijdag",
	"Zaterdag",
	"Zondag",
];
var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
	type: "line",
	data: {
		labels: frameworks,
		datasets: [
			{
				label: "Buitentemperatuur",
				data: stars,
				borderRadius: 10,
				borderWidth: 1,
				fill: true,
				lineTension: 0.5,
				responsive: true,
			},
		],
	},
});
