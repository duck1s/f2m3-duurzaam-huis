var stroomValues = [8599, 8626, 8637, 8644, 8654, 8679, 8689];
var dates = [
	"04-03-2022",
	"09-03-2022",
	"10-03-2022",
	"12-03-2022",
	"14-03-2022",
	"16-03-2022",
	"17-03-2022",
];
var stroomChart = document.getElementById("stroomChart");

var stroomChart = new Chart(stroomChart, {
	type: "line",
	data: {
		labels: dates,
		datasets: [
			{
				label: "Stroommeter",
				data: stroomValues,
				borderRadius: 10,
				borderWidth: 1,
				fill: true,
				responsive: true,
				backgroundColor: "#ffc96b",
				borderColor: "#c79c52"
			},
		],
	},
});

var waterValues = [1204.614, 1205.320, 1205.703, 1206.714, 1207.551, 1208.153, 1208.387];
var dates = [
	"04-03-2022",
	"09-03-2022",
	"10-03-2022",
	"12-03-2022",
	"14-03-2022",
	"16-03-2022",
	"17-03-2022",
];
var waterChart = document.getElementById("waterChart");

var waterChart = new Chart(waterChart, {
	type: "line",
	data: {
		labels: dates,
		datasets: [
			{
				label: "Watermeter",
				data: waterValues,
				borderRadius: 10,
				borderWidth: 1,
				fill: true,
				responsive: true,
				backgroundColor: "#acc6d3",
				borderColor: "#758e9b"
			},
		],
	},
});

var warmteValues = [273.062, 274.442, 274.751, 275.325, 275.694, 276.134, 276.313];
var dates = [
	"04-03-2022",
	"09-03-2022",
	"10-03-2022",
	"12-03-2022",
	"14-03-2022",
	"16-03-2022",
	"17-03-2022",
];
var warmteChart = document.getElementById("warmteChart");

var warmteChart = new Chart(warmteChart, {
	type: "line",
	data: {
		labels: dates,
		datasets: [
			{
				label: "Warmtemeter",
				data: warmteValues,
				borderRadius: 10,
				borderWidth: 1,
				fill: true,
				responsive: true,
				backgroundColor: "#fc926e",
				borderColor: "#c56d50"
			},
		],
	},
});