$(document).ready( function () {
			var table = $('#myTable').DataTable({
				stateSave: false,
				responsive: true,

				columns: [
		            { title: "ID" },
		            { title: "Icon" },
		            { title: "Name" },
		            { title: "Type" },
		            { title: "Affil." },
		            { title: "Cost" },
		            { title: "Rarity" },
		            { title: "Chakra" },
		            { title: "Range" },
		            { title: "HP" },
		            { title: "ATK" },

		         ],
			});



		});
