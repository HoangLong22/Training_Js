function totalQulity(list) {
    var total = list.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.qulity;
    }, 0);
    return total;
}

//ES6
function totalQulityES6(list) {
	var reducer = (accumulator, currentValue) => accumulator + currentValue.qulity;
	return list.reduce(reducer, 0);
}