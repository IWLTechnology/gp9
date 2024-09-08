self.addEventListener('message', function(msg){
	var start = new Number(msg.data.split(':')[0]);
	var end = new Number(msg.data.split(':')[1]);
	var result = "";
	var set = [118,127,136,145,154,163,172,181,217,226,235,244,253,262,271,316,325,334,343,352,361,415,424,433,442,451,514,523,532,541,613,622,631,712,721,811]
	for (var i = start/4*set.length; i < end/4*set.length; i++) {
		for (var j = 0; j < set.length; j++) {
			for (var k = 0; k < set.length; k++) {
				for (var l = 0; l < set.length; l++) {
					if(set[i].toString().charAt(0) == set[j].toString().charAt(0) && set[i].toString().charAt(2) == set[k].toString().charAt(0) && set[j].toString().charAt(2) == set[l].toString().charAt(0) && set[k].toString().charAt(2) == set[l].toString().charAt(2)){
						var n1 = set[i];
						var n2 = set[j];
						var n3 = set[k];
						var n4 = set[l];
						result += `#1: ${n1} #2: ${n2} #3: ${n3} #4: ${n4} <br>`;
						self.postMessage("Perc");
					}
				}
			}
		}
	}
	self.postMessage("Res:" + result);
}, false);