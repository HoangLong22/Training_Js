function filterProductBySaleDate(list) {
	var date = new Date().toLocaleDateString();
    var result = [];
     list.forEach(function (item) {
       if (item.qulity > 0 && item.isDelete == false) {
            result.push(item);
        }
    });
    return result;
}

//ES6
function filterProductBySaleDateES6(list) {
	var date = new Date().toLocaleDateString();
	var result = list.filter(list => list.saleDate >= date && list.isDelete == false);
	return result;
}