function filterProductByQulity(list, id) {
    var result = [];
    list.forEach(function(item) {
        if (item.qulity > 0 && item.isDelete == false) {
            result.push(item);
        }
    });
    return result;
   
}

//ES6
function filterProductByQulityES6(list, id) {
	var result = list.filter(list => list.qulity > id && list.isDelete == false);
	return result;
}