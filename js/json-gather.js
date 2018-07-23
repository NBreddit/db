(function(){

	function _createCard(id, asset, name, type, affi1, affi2, cost, rare, chakra, range, hp, atk){
		//Create Entries in the Table
		var model = '<tr class="clickable" data-toggle="modal" data-target="#newModal">'
                    +'      <td class="text-center">' + id + '</td>'
                    +'      <td class="text-center"><img id="icon-table" src="common/icon/img_icon_' + asset + '.png" height="60px" width="60px" /></td>'
                    +'      <td class="text-center"><a href= "view/' + id + '" data-toggle="modal" data-target="#newModal">' + name + '</a></td>'
                    +'      <td class="text-center"><img id="icon-table" src="common/type/' + type + '.png" /></div></td>'
                    +'      <td class="text-center"><img id="icon-table" src="common/affi/' + affi1 + '.png" /><img class="affi2" src="common/affi/' + affi2 + '.png"></div></td>'
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
			var affi = unit['affi'].split(',');
			var affi1 = affi[0];
			var affi2 = affi[1];
			var cost = unit['cost'];
			var rare = unit['rarity'];
			var chakra = unit['chakra'];
			var range = unit['range'];
			var hp = unit['hp'];
			var atk = unit['atk'];

			if(units.indexOf(chara[0]) == -1){
				units.push(unit[0]);
				content += _createCard(id, asset, name, type, affi1, affi2, cost, rare, chakra, range, hp, atk);
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
						$('#unit-art').attr('src', 'common/full/img_card_' + window.chara[x]['assetid'] + '.png');
						$('#unit-art-pvp').attr('src', 'common/full/img_card_' + window.chara[x]['assetid'] + '.png');

						$('#type-unit').attr('src', 'common/type/' + window.chara[x]['type'] + '.png');
						$('#name-unit').text(window.chara[x]['name'] + ', ' + window.chara[x]['subname']);

						if(typeof window.evo[x][1] != 'undefined'){
							$('#evo1').attr('src', 'common/evo/' + window.evo[x][1] + '.png');
						}
						if(typeof window.evo[x][2] != 'undefined'){
							$('#evo2').attr('src', 'common/evo/' + window.evo[x][2] + '.png');
						}
						if(typeof window.evo[x][3] != 'undefined'){
							$('#evo3').attr('src', 'common/evo/' + window.evo[x][3] + '.png');
						}
						if(typeof window.evo[x][4] != 'undefined'){
							$('#evo4').attr('src', 'common/evo/' + window.evo[x][4] + '.png');
						}
						if(typeof window.evo[x][5] != 'undefined'){
							$('#evo5').attr('src', 'common/evo/' + window.evo[x][5] + '.png');
						}
						$('#obtained').text(window.obtain[x][1]);
						$('#obtained-pvp').text(window.obtain[x][1]);

						$('#jutsuname').text(window.chara[x]['name']);
						$('#jutsuname-pvp').text(window.chara[x]['jutsu']);
						$('#jutsu').text(window.chara[x]['jutsudesc']);
						$('#jutsu-pvp').text(window.chara[x]['jutsupvp']);
						$('#jutsutype').text(window.chara[x]['chakra']);
						$('#jutsutype-pvp').text(window.chara[x]['chakra']);
						$('#jutsucost').text((window.chara[x]['hit1']));
						$('#jutsucost-pvp').text((window.chara[x]['hit2']));

						if(typeof window.chara[x]['ult'] != 'undefined'){
						$('.ult').css('display','block');

						$('#ultname').text(window.chara[x]['ult']);
						$('#ultname-pvp').text(window.chara[x]['ult']);
						$('#ult').text(window.chara[x]['ultdesc']);
						$('#ult-pvp').text(window.chara[x]['ultpvp']);
						$('#ulttype').text((window.chara[x]['chakra']*2));
						$('#ulttype-pvp').text((window.chara[x]['chakra']*2));
						$('#ultcost').text((window.chara[x]['hit2']));
						$('#ultcost-pvp').text((window.chara[x]['hit2']));
						}

						//FIELD SKILL
						var field = window.chara[x]['field'];
						var fieldvalue = window.chara[x]['fieldvalue'];

						var field1 = window.fb[0][field].replace('[x]', fieldvalue);

						$('#field').text(field1);
						$('#field-pvp').text(field1);

						//BUDDY SKILL
						var buddy = window.chara[x]['buddy'];
						var buddyvalue = window.chara[x]['buddyvalue'];

						var buddy1 = window.fb[0][buddy].replace('[x]', buddyvalue);
						$('#buddy').text(buddy1);
						$('#buddy-pvp').text(buddy1);

						//ABILITIES
						var ability = '';
						var pvpability = '';
						for(var y = 1; y <= 6; y++){
							var currentAbility = 'ability' + y;
							var abilitydesc = currentAbility + 'desc';

							//Normal abilities
							if(typeof window.chara[x][currentAbility] != 'undefined'){
								var abilityName1 = window.chara[x][currentAbility];
								var abilityName2 = window.ability[0][abilityName1];
								var abilityValue = window.chara[x][abilitydesc];
								var ability1 = abilityName2.replace('[x]', abilityValue);

								ability += '<div class="abilities">'
											+		'<div class="icon">'
											+			'<img src="common/ability/' + window.chara[x][currentAbility] + '.png" >'
											+		'</div>'
											+		'<div class="info">'
											+		'<div class="description">'
											+			'<p>' + ability1 + '</p>'
											+		'</div>'
											+	'</div>'
											+'</div>';
							}

							//PVP Abilities
							var currentpvpAbility = 'pvpability' + y;
							var pvpabilitydesc = currentpvpAbility + 'desc';

							if(typeof window.chara[x][currentpvpAbility] != 'undefined'){
								var pvpabilityName1 = window.chara[x][currentpvpAbility];
								var pvpabilityName2 = window.ability[0][pvpabilityName1];
								var pvpabilityValue = window.chara[x][pvpabilitydesc];
								var pvpability1 = pvpabilityName2.replace('[x]', pvpabilityValue);

								pvpability += '<div class="pvp-abilities">'
											+		'<div class="icon">'
											+			'<img src="common/ability/' + window.chara[x][currentpvpAbility] + '.png" >'
											+		'</div>'
											+		'<div class="info">'
											+		'<div class="description">'
											+			'<p>' + pvpability1 + '</p>'
											+		'</div>'
											+	'</div>'
											+'</div>';
							}
							//checks if special pvp sync skill exists, and prints normal one if not
							else if(typeof window.chara[x][currentAbility] != 'undefined' && typeof window.chara[x][currentpvpAbility] == 'undefined') {
								pvpability += '<div class="pvp-abilities">'
											+		'<div class="icon">'
											+			'<img src="common/ability/' + window.chara[x][currentAbility] + '.png" >'
											+		'</div>'
											+		'<div class="info">'
											+		'<div class="description">'
											+			'<p>' + ability1 + '</p>'
											+		'</div>'
											+	'</div>'
											+'</div>';
							}
						}

						document.getElementById("chara-ability").innerHTML = ability;
						document.getElementById("chara-ability-pvp").innerHTML = pvpability;

						for(var y = 1; y <= 3; y++){
							var currentSync = 'sync' + y;
							var syncDesc = currentSync + 'desc';
							var syncValue = currentSync + 'value';
							var syncTemp = window.chara[x][currentSync];
							var syncDescTemp = window.chara[x][syncDesc];

							//print sync skills
							if(typeof window.chara[x][currentSync] != 'undefined'){
								var syncx = window.sync[0][syncDescTemp];
								var syncy = syncx.replace('[x]', window.chara[x][syncValue]);

								$('#sync-title'+y).text('Sync with ' + window.sync[0][syncTemp]);
								$('#sync-desc'+y).text(syncy);
							}

							var currentpvpSync = 'pvpsync' + y;
							var pvpsyncDesc = currentpvpSync + 'desc';
							var pvpsyncValue = currentpvpSync + 'value';
							var pvpsyncTemp = window.chara[x][currentpvpSync];
							var pvpsyncDescTemp = window.chara[x][pvpsyncDesc];

							//print pvp sync skills
							if(typeof window.chara[x][currentpvpSync] != 'undefined'){
								var pvpsyncx = window.sync[0][pvpsyncDescTemp];
								var pvpsyncy = pvpsyncx.replace('[x]', window.chara[x][pvpsyncValue]);

								$('#sync-pvp-title'+y).text('Sync with ' + window.sync[0][pvpsyncTemp]);
								$('#sync-pvp-desc'+y).text(pvpsyncy);
							}
							//checks if special pvp sync skill exists, and prints normal one if not
							else if(typeof window.chara[x][currentSync] != 'undefined' && typeof window.chara[x][currentpvpSync] == 'undefined') {
								$('#sync-pvp-title'+y).text('Sync with ' + window.sync[0][syncTemp]);
								$('#sync-pvp-desc'+y).text(syncy);
							}
						}

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
										+	'<td>' + window.chara[x]['maxlv'] + '</td>'
										+	'<td id="100-hp">' + window.chara[x]['hp'] + '</td>'
										+	'<td id="100-atk">' + window.chara[x]['atk'] + '</td>'
										+	'<td id="100-spd">-</td>'
									+ '</tr>'
									+ '<tr id="lb">'
										+ '<td>150</td>'
										+ '<td id="150-hp">' + window.chara[x]['lbhp'] + '</td>'
										+ '<td id="150-atk">' + window.chara[x]['lbatk'] + '</td>'
										+ '<td id="150-spd">-</td>'
									+ '</tr>'
								+ '</tbody>'
							+ '</table>';

							var pvpstats ='<table class="table">'
									+ '<thead>'
										+ '<tr>'
											+ '<th>Level</th>'
											+ '<th>HP</th>'
											+ '<th>ATK</th>'
											+ '<th>SPD</th>'
										+ '</tr>'
									+ '</thead>'
									+ '<tbody>'
										+ '<tr id="pvp-100">'
											+ '<td>' + window.chara[x]['maxlv'] + '</td>'
											+ '<td id="pvp-hp">' + window.chara[x]['pvphp'] + '</td>'
											+ '<td id="pvp-atk">' + window.chara[x]['pvpatk'] + '</td>'
											+ '<td id="pvp-spd">'+ window.chara[x]['pvpspd']+ '</td>'
										+ '</tr>'
										+ '<tr id="pvp-lb">'
											+ '<td>150</td>'
											+ '<td id="pvp-hp">' + window.chara[x]['lbpvphp'] + '</td>'
											+ '<td id="pvp-atk">' + window.chara[x]['lbpvpatk'] + '</td>'
											+ '<td id="pvp-spd">'+ window.chara[x]['lbpvpspd']+ '</td>'
										+ '</tr>'
									+ '</tbody>'
								+ '</table>';

						document.getElementById("status").innerHTML = stats;
						document.getElementById("status-pvp").innerHTML = pvpstats;

						//Hide LB stats if not limitbreakable
						if (window.chara[x]['limitbreak'] == 0) {
							$('#lb').css("display","none");
							$('#pvp-lb').css("display","none");
						}
					}
			}
		}
	}
})();
