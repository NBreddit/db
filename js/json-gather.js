(function(){

	function _createCard(id, asset, name, type, affi, cost, rare, chakra, range, hp, atk){
		//Create Entries in the Table
		var model = '<tr class="clickable" data-toggle="modal" data-target="#newModal">'
                    +'      <td class="text-center">' + id + '</td>'
                    +'      <td class="text-center"><img id="icon-table" src="common/icon/img_icon_' + asset + '.png" height="60px" width="60px" /></td>'
                    +'      <td class="text-center"><a href= "view/' + id + '" data-toggle="modal" data-target="#newModal">' + name + '</a></td>'
                    +'      <td class="text-center"><img id="icon-table" src="common/type/' + type + '.png" /></div></td>'
                    +'      <td class="text-center"><img id="icon-table" src="common/affi/' + affi + '.png" /></div></td>'
                    +'      <td class="text-center">' + cost + '</td>'
                    +'      <td class="text-center"><img id="icon-table" src="common/rarity/' + rare + '.png" /></div></td>'
                    +'      <td class="text-center">' + chakra + '</td>'
                    +'      <td class="text-center">' + range + '</td>'
                    +'      <td class="text-center">' + hp + '</td>'
                    +'      <td class="text-center">' + atk + '</td>'
                    +'</tr>';
		return model;

	}

	$(document).ready(function(){

		// --------------------------------------------- CARDS

		var content = '';
		var units = [];

		for(var i in window.chara){
			var unit = window.chara[i];

			var id = unit['id'];
			var asset = unit['assetid'];
			var name = unit['name'] + ", " + unit['subname'];
			var type = unit['type'];
			var affi = unit['affi'];
			var cost = unit['cost'];
			var rare = unit['rarity'];
			var chakra = unit['chakra'];
			var range = unit['range'];
			var hp = unit['hp'];
			var atk = unit['atk'];

			if(units.indexOf(chara[0]) == -1){
				units.push(unit[0]);
				content += _createCard(id, asset, name, type, affi, cost, rare, chakra, range, hp, atk);
			}
		}

		console.log(i, window.chara[i]);

		$('.cards').html(content);

		$('.clickable').click(function(e){
			 e = $(this).find('a[href*="view"]');
		    if(e != null){
				var id = parseInt(e.attr('href').split('view/').pop());
				var thumb = $(this).find('img').attr('src');
				var unit = [];
				var cid = 0;
				for(i in window.chara){
					i = window.chara[i];
					if(i["id"]==id) {
						unit[i[i.length-1]] = i;
					}
					cid = id;
				}
				var cards = {
					"pve":{
					  	unit:chara[0]
    				},
					"pvp":{
				 		unit:chara[0]
					}
				}
				console.log(cards);
				_buildCardModal(id, thumb, cards, cid);
		   }
		});
	});

		function _buildCardModal(id, thumb, cards, cid){
			for(i in cards){
				for(var x in window.chara){
					if(cid == window.chara[x]['id']){
						$('#icon-unit').attr('src', 'common/icon/img_icon_' + window.chara[x]['assetid'] + '.png');
						$('#card-art-star').attr('src', 'common/full/img_card_' + window.chara[x]['assetid'] + '.png');
						$('#card-art-pvp-star').attr('src', 'common/full/img_card_' + window.chara[x]['assetid'] + '.png');

						$('#type-unit').attr('src', 'common/type/' + window.chara[x]['type'] + '.png');
						$('#name-unit').text(window.chara[x]['name'] + ', ' + window.chara[x]['subname']);

						if(window.chara[x]['evo1'] != ''){
							$('#evo1').attr('src', 'common/evo/' + window.chara[x]['evo1'] + '.png');
							$('#evo1-pvp').attr('src', 'common/evo/' + window.chara[x]['evo1'] + '.png');

						}
						if(window.chara[x]['evo2'] != ''){
							$('#evo2').attr('src', 'common/evo/' + window.chara[x]['evo2'] + '.png');
							$('#evo2-pvp').attr('src', 'common/evo/' + window.chara[x]['evo2'] + '.png');
						}
						if(window.chara[x]['evo3'] != ''){
							$('#evo3').attr('src', 'common/evo/' + window.chara[x]['evo3'] + '.png');
							$('#evo3-pvp').attr('src', 'common/evo/' + window.chara[x]['evo3'] + '.png');
						}
						if(window.chara[x]['evo4'] != ''){
							$('#evo4').attr('src', 'common/evo/' + window.chara[x]['evo4'] + '.png');
							$('#evo4-pvp').attr('src', 'common/evo/' + window.chara[x]['evo4'] + '.png');
						}
						if(window.chara[x]['evo5'] != ''){
							$('#evo5').attr('src', 'common/evo/' + window.chara[x]['evo5'] + '.png');
							$('#evo5-pvp').attr('src', 'common/evo/' + window.chara[x]['evo5'] + '.png');
						}
						$('#obtained').text(window.chara[x]['obtained']);
						$('#obtained-pvp').text(window.chara[x]['obtained']);

						$('#skill1name').text(window.chara[x]['name']);
						$('#skill1name-pvp').text(window.chara[x]['skill1']);
						$('#skill1').text(window.chara[x]['skill1desc']);
						$('#skill1-pvp').text(window.chara[x]['skill1pvp']);
						$('#skill1type').text(window.chara[x]['chakra']);
						$('#skill1type-pvp').text(window.chara[x]['chakra']);
						$('#skill1cost').text((window.chara[x]['hit1']));
						$('#skill1cost-pvp').text((window.chara[x]['hit2']));

						$('#skill2name').text(window.chara[x]['skill2']);
						$('#skill2name-pvp').text(window.chara[x]['skill2']);
						$('#skill2').text(window.chara[x]['skill2desc']);
						$('#skill2-pvp').text(window.chara[x]['skill2pvp']);
						$('#skill2type').text((window.chara[x]['chakra']*2));
						$('#skill2type-pvp').text((window.chara[x]['chakra']*2));
						$('#skill2cost').text((window.chara[x]['hit2']));
						$('#skill2cost-pvp').text((window.chara[x]['hit2']));

						$('#ability1').text(window.chara[x]['field']);
						$('#ability2').text(window.chara[x]['buddy']);
						$('#ability1-pvp').text(window.chara[x]['field']);
						$('#ability2-pvp').text(window.chara[x]['buddy']);
						var ability = '';
						for(var y = 1; y <= 6; y++){
							var currentAbility = 'ability' + y;
							var abilitydesc = checkAbility(window.chara[x], y);
							if(window.chara[x][currentAbility] != ''){
								ability += '<div class="base-gear">'
											+		'<div class="icon">'
											+			'<img src="common/ability/' + window.chara[x][currentAbility] + '.png" >'
											+		'</div>'
											+		'<div class="info">'
											+		'<div class="description">'
											+			'<p>' + abilitydesc + '</p>'
											+		'</div>'
											+	'</div>'
											+'</div>';
							}

						}

						document.getElementById("chara-ability").innerHTML = ability;
						document.getElementById("chara-ability-pvp").innerHTML = ability;

						var sync = '';
						for(var y = 1; y <= 3; y++){
							var currentSync = 'sync' + y;
							var syncDesc = ''+ currentSync + 'desc';
							if(window.chara[x][currentSync] != ''){
								sync += '<div class="base-gear">'
											+		'<div class="info">'
											+			'<div class="header">'
											+				'<div class="title">'
											+					'<h3>' + window.chara[x][currentSync] + '</h3>'
											+				'</div>'
											+			'</div>'
											+		'<div class="description">'
											+			'<p>' + window.chara[x][syncDesc] + '</p>'
											+		'</div>'
											+	'</div>'
											+'</div>';
							}

						}

						document.getElementById("sync").innerHTML = sync;
						document.getElementById("sync-pvp").innerHTML = sync;

						var stats ='<table class="table">'
								+ '<thead>'
									+ '<tr>'
										+ '<th>Level</th>'
										+ '<th>HP</th>'
										+ '<th>ATK</th>'
										+ '<th>SPD</th>'
									+ '</tr>'
								+ '</thead>'
								+ '<tbody>'
									+ '<tr>'
										+	'<td>100</td>'
										+	'<td id="100-hp">' + window.chara[x]['hp'] + '</td>'
										+	'<td id="100-atk">' + window.chara[x]['atk'] + '</td>'
										+	'<td id="100-spd">-</td>'
									+ '</tr>'
									+ '<tr>'
										+ '<td>150</td>'
										+ '<td id="150-hp">' + window.chara[x]['lbhp'] + '</td>'
										+ '<td id="150-atk">' + window.chara[x]['lbatk'] + '</td>'
										+ '<td id="150-spd">-</td>'
									+ '</tr>'
									+ '<tr>'
										+ '<td>PvP</td>'
										+ '<td id="pvp-hp">' + window.chara[x]['pvphp'] + '</td>'
										+ '<td id="pvp-atk">' + window.chara[x]['pvpatk'] + '</td>'
										+ '<td id="pvp-spd">'+ window.chara[x]['pvpspd']+ '</td>'
									+ '</tr>'
								+ '</tbody>'
							+ '</table>';

						document.getElementById("status").innerHTML = stats;
						document.getElementById("status-pvp").innerHTML = stats;
					}
			}
		}

	}

	function checkAbility(char, number){
		name = "ability" + number;
		desc = name + 'desc';
		for(var i in window.ability){
			if(window.ability[i][0] == char[name]){
				if(window.ability[i][1] == char[desc]){
					return window.ability[i][2];
				}
			}
		}
	}
})();
