function isHaveProductCategoryId(list, categoryId) {
    var result = list.find(function (item) {
        return item.categoryId == categoryId;
    });
    if (result){
    	return true;
    }
    return false;
}

//ES6
function isHaveProductCategoryId_ES6(list, categoryId){
	var result = list.some(list => list.categoryId == categoryId);
	return result;
}