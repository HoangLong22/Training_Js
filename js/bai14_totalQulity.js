function totalQulity(list) {
    var total = 0;
        list.forEach(function(item) {
            total += item.qulity;
        });
        return total;
    }

//ES6
function totalQulityES6(list) {
	var reducer = (accumulator, currentValue) => accumulator + currentValue.qulity;
	return list.reduce(reducer, 0);
}