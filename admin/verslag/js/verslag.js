(function(){
  Number.prototype.format = function (n, x) {
  	var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  	return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
  };
  function formatCur (number, dec) {
  	dec = 2;
  	return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', minimumFractionDigits: dec != undefined ? dec : 2, maximumFractionDigits: dec != undefined ? dec : 2 }).format(number)
  }
  const gb = {
  	'ACTIVA': {
  		'Immateriele vaste activa': {
  			'Goodwill': { volgnr: 1111 },
  			'Overige immateriele vaste activa': { volgnr: 1112 },
  		},
  		'Materiele vaste activa': {
  			'Gebouwen en tereinen': { volgnr: 1121 },
  			'Machines en installaties': { volgnr: 1122 },
  			'Overige materiele vaste activa': { volgnr: 1123 },
  		},
  		'Financiele vaste activa': {
  			'Deelnemingen': { volgnr: 1131 },
  			'Langlopende vorderingen op groepsmaatschappijen': { volgnr: 1132 },
  			'Langlopende vorderingen op groepsmaatschappijen': { volgnr: 1133 },
  			'Langlopende vorderingen op particiapnten en maatschappijen waarin wordt deelgenomen': { volgnr: 1134 },
  			'Overige financiele vaste activa': { volgnr: 1135 },
  		},
  		'Voorraden': {
  			'Voorraden': { volgnr: 1141 },
  			'Onderhanden werk': { volgnr: 1142 },
  		},
  		'Vorderingen': {
  			'Vorderingen op handelsdebiteuren': { volgnr: 1151 },
  			'Vordering omzetbelasting': { volgnr: 1152 },
  			'Kortlopende vorderingen op groepsmaatschapijen': { volgnr: 1153 },
  			'Kortlopende vorderingen op participanten en maatschappijen waarin wordt deelgenomen': { volgnr: 1154 },
  			'Overige vorderingen': { volgnr: 1155 },
  		},
  		'Effecten': {
  			'Effecten': { volgnr: 1161 },
  		},
  		'Liquide middelen': {
  			'Bank': { volgnr: 1171 },
  			'Kas': { volgnr: 1172 },
  			'Bank Sparen': { volgnr: 1173 },
  			'Kruispost': { volgnr: 1174 },
  		},
  	},
  	'PASSIVA': {
  		'Ondernemingsvermogen': {
  			'Gestort en opgevraagd kapitaal': { volgnr: 1211 },
  			'Informeel kapitaal': { volgnr: 1222 },
  			'Agio': { volgnr: 1223 },
  			'Winstreserves': { volgnr: 1224 },
  			'Egalisatiereserve': { volgnr: 1225 },
  			'Herinvesteringsreserve': { volgnr: 1226 },
  			'Belaste compartimeteringsreserve': { volgnr: 1227 },
  			'Overige fiscale reserves': { volgnr: 1228 },
  		},
  		'Voorzieningen': {
  			'Garantie voorzienigen': { volgnr: 1231 },
  			'Stamrecht, lijfrente en pensioenvoorziening': { volgnr: 1232 },
  			'Overige voorziening': { volgnr: 1233 },
  		},
  		'Langlopende schulden': {
  			'Converteerbare leningen': { volgnr: 1241 },
  			'Obligaties': { volgnr: 1242 },
  			'Langlopende schulden aan groepsmaatschapijen': { volgnr: 1243 },
  			'Langlopende schulden aan particiapnten en maatschappijen waarin wordt deelgenomen': { volgnr: 1244 },
  			'Schulden aan kredietinstellingen': { volgnr: 1245 },
  			'Overige langlopende schulden': { volgnr: 1246 },
  		},
  		'Kortlopende schulden': {
  			'Schulden aan leveranciers en handelskredieten': { volgnr: 1251 },
  			'Schuld omzetbelasting': { volgnr: 1252 },
  			'Schuld loonheffing': { volgnr: 1255 },
  			'Kortlopende schulden aan groepsmaatschappijen': { volgnr: 1253 },
  			'Kortlopende schulden aan participanten en maatschappijen waarin wordt deelgenomen': { volgnr: 1254 },
  			'Overige kortlopende schulden': { volgnr: 1256 },
  		},
  	},
  	'Winst en Verlies': {
  		'Resultaat na belastingen': {
  			'Resultaat uit gewone bedrijfsuitvoering': {
  				'Baten en Lasten': {
  					'Baten': {
  						'Opbrengsten': {
  							'Nettoomzet': { volgnr: 2111 },
  							'Wijziging in voorraden en onderhanden werk': { volgnr: 2112 },
  							'Geactiveerde productie voor het eigen bedrijf': { volgnr: 2122 },
  							'Overige opbrengsten': { volgnr: 2123 },
  						}
  					},
  					'Lasten': {
  						'Inkoopkosten, uitbesteed werk e.d': {
  							'Inkoopprijs van de verkopen en kosten van grond en hulpstoffen': { volgnr: 2211 },
  							'Kosten van uitbesteed werk en andere externe kosten': { volgnr: 2212 },
  						},
  						'Personeelskosten': {
  							'Lonen en salarissen': { volgnr: 2221 },
  							'Sociale lasten': { volgnr: 2222 },
  							'Pensioenlasten': { volgnr: 2223 },
  							'Overige personeelskosten': { volgnr: 2224 },
  							'Ontvangen uitkeringen en subsidies': { volgnr: 2225 },
  						},
  						'Afschrijvingen': {
  							'Goodwill': { volgnr: 2231 },
  							'Overige immateriele vaste activa': { volgnr: 2232 },
  							'Gebouwen en terreinen': { volgnr: 2233 },
  							'Machines en installaties': { volgnr: 2234 },
  							'Overige materiele vaste activa': { volgnr: 2235 },
  						},
  						'Waarde veranderingen': {
  							'Overige waardeveranderingen van immateriele en materiele vaste activa': { volgnr: 2241 },
  							'Bijzondere waardevermindering van vlottende activa': { volgnr: 2242 },
  						},
  						'Overige bedrijfskosten': {
  							'Auto en transportkosten': { volgnr: 2251 },
  							'Huisvestingskosten': { volgnr: 2252 },
  							'Onderhoudskosten van overige materiele vaste activa': { volgnr: 2253 },
  							'Verkoopkosten': { volgnr: 2254 },
  							'Andere kosten': { volgnr: 2255 },
  						},
  					},
  				},
  				'Financiele baten en lasten': {
  					'Opbrengsten van vorderingen op groepsmaatschapijen': { volgnr: 2261 },
  					'Opbrengsten van vorderingen op participanten en maatschappijen waarin wordt deelgenomen': { volgnr: 2262 },
  					'Opbrengsten van banktegoeden': { volgnr: 2263 },
  					'Opbrengsten van overige vorderingen': { volgnr: 2264 },
  					'Ontvangend dividend (niet van deelnemingen)': { volgnr: 2265 },
  					'Kwijtscheldingswinst': { volgnr: 2266 },
  					'Waardeverandering van vorderingen': { volgnr: 2267 },
  					'Waardeverandering van effecten': { volgnr: 2268 },
  					'Kosten van schulden aan groepsmaatschapijen': { volgnr: 2269 },
  					'Kosten van schulden aan participanten en maatschapijen waarin wordt deelgenomen': { volgnr: 2270 },
  					'Kosten van schulden, rentelasten en soortgelijke kosten': { volgnr: 2271 },
  				},
  			},
  			'Resultaat uit deelnemingen': {
  				'Resultaat uit deelnemingen': { volgnr: 2281 },
  			},
  			'Buitengewone resultaten': {
  				'Buitengewone baten': {
  					'Voordelen door ontvoeging dochtermaatschappij of beeindiging fiscale eenheid': { volgnr: 2282 },
  					'Boekwinst op activa': { volgnr: 2283 },
  					'Overige buitengewone baten': { volgnr: 2284 },
  				},
  				'Buitengewone lasten': {
  					'Afboekingen herinvesteringreserves op gekochte activa': { volgnr: 2291 },
  					'Uitkeringen aan algemeen nut beoogde instellingen (ANBI)': { volgnr: 2292 },
  					'Overige buitengewone lasten': { volgnr: 2293 },
  				}
  			},
  			'Venootschapsbelasting': { volgnr: 3001 },
  		},
  	},
  };
  const comp = { 'MJVK Beheer BV': {}, 'Alicon Projects BV': {}, 'Alicon Systems BV': {}, 'Eenheid': {} };
  const ids = [];
  const els = [];
  function writepost (gb, naam, level, f) {
    gb[naam].tot = {};
    var vnr = gb[naam].volgnr;
    var title = naam + ((vnr) ? ' (' + vnr + ') ' : ' ');
    var elTr = $('tr').parent(elTbl).class('h' + level).append(
      $('td').class('oms').text(title)
    );
    var elBkToe = $('tr').parent(elToe).class('h2').append(
      $('td').text(title).colspan(6),
    );
    for (var name in comp) {
      gb[naam].tot[name] = {
        eind: 0,
        begin: (data[vnr] && data[vnr][name] && data[vnr][name].begin) ? data[vnr][name].begin : 0,
        elEind: $('td').parent(elTr).class('bedrag'),
        elBegin: $('td').parent(elTr).class('bedrag begin'),
      };
    }
    if (!vnr) {
      for (var n in gb[naam]) if (n != 'tot') {
        writepost(gb[naam], n, level + 1, f);
        for (var name in comp) {
          gb[naam].tot[name].begin += gb[naam][n].tot[name].begin;
          gb[naam].tot[name].eind += gb[naam][n].tot[name].eind;
        }
      }
    }

    var hide = true;
    for (var name in comp) {
      var lhref = '';
      if (data[vnr] && data[vnr][name]) {
        if (data[vnr][name].regels) {
          lhref = title + name;
          $('tr').parent(elToe).class('h3').append(
            $('td').html('<a name="' + lhref + '"></a>' + lhref).colspan(6),
          );
          var boekOms = '';
          var b = 0;
          if (!data[vnr][name].regels.length) href = null;
          for (var i = 0, row; row = data[vnr][name].regels[i]; i++) {
            if (row.keyID) (ids[row.keyID] = ids[row.keyID] || []).push(row);
            hide = false;
            b += row.bedrag;
            var elRow = $('tr').parent(elToe).append(
              $('td').class('datum').text(row.datum),
              $('td').class('bedrag').text(formatCur(b)),
              $('td').class('bedrag').text(formatCur(row.bedrag)),
              $('td').class('bedrag'),
              $('td').append(
                $('a').text(row.omschrijving).href('#' + row.keyID),
              ),
              $('td').text(row.keyID),
            );
            elRow.ids = ids[row.keyID];
            elRow.row = row;
            els.push(elRow);
            gb[naam].tot[name].eind += row.bedrag;
            gb[naam].tot.Eenheid.eind += row.bedrag;
          }
          //gb[naam].tot[name].eind = Math.round(gb[naam].tot[name].eind);
          //gb[naam].tot.Eenheid.eind = Math.round(gb[naam].tot.Eenheid.eind);
        }
      }
      gb[naam].tot[name].elEind.append(
        $('a').text(formatCur(gb[naam].tot[name].eind, 0)).href(lhref ? '#' + lhref : null),
      );
      gb[naam].tot[name].elBegin.text(formatCur(gb[naam].tot[name].begin, 0));
    }
    if (hide && !gb[naam].tot.Eenheid.eind && !gb[naam].tot.Eenheid.begin) {
      elTr.elem.className += ' none';
      elBkToe.elem.className += ' none';
    }
  }
  onload = function () {
  	console.log(data);
    $(document.body).append(
      elTbl = $('table').append(
        $('tr').append(
          $('td'),
          Object.keys(comp).map(name => $('td').text(name).colspan(2)),
        )
      ),
      elToe = $('table'),
    )
    writepost(gb, 'ACTIVA', 1, 1);
    writepost(gb, 'PASSIVA', 1, 1);
    console.log(gb);
    elTbl.append(
      $('tr').append(
        $('td'),
        Object.keys(comp).map(name => $('td').text(formatCur(gb.PASSIVA.tot[name].eind-gb.ACTIVA.tot[name].eind)).colspan(2)),
      )
    )
    // return;
    writepost(gb, 'Winst en Verlies', 1, 1);
    console.log(ids, els);
    ids.forEach(function (rows, keyID) {
      rows.forEach(function (row) {
        $('tr').parent(elToe).append(
          $('td').class('datum').text(row.datum).append(
            $('a').name(keyID),
          ),
          $('td').class('bedrag'),
          $('td').class('bedrag'),
          $('td').class('bedrag').text(formatCur(row.bedrag)),
          $('td').text(row.omschrijving),
          $('td').text(row.keyID),
        );
      });
    });
  };
})()
