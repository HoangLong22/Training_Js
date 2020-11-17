function filterProductBySaleDate(list) {
	var date = new Date().toLocaleDateString();
    var result = list.filter(function (item) {
        return item.saleDate >= date && item.isDelete == false;
    });
    return result;
}

//ES6
function filterProductBySaleDateES6(list) {
	var date = new Date().toLocaleDateString();
	var result = list.filter(list => list.saleDate >= date && list.isDelete == false);
	return result;
}