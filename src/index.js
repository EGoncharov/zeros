module.exports = function getZerosCount(number) {
 var zerosCount = 0;
 for (var i = 5; i <= number; i += 5) {
 	var y = i;
 	while( y % 5 === 0) { y = y / 5; zerosCount++;}
 	}
 	return zerosCount;
}
