function filterProductByQulity(list, id) {
        var result = list.filter(function (item) {
            return item.qulity > id && item.isDelete == false;
        });
        return result;
}

//ES6
function filterProductByQulityES6(list, id) {
	var result = list.filter(list => list.qulity > id && list.isDelete == false);
	return result;
}