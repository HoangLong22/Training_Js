function isHaveProductCategoryId(list, categoryId) {
    var result = list.some(function (item) {
        return item.categoryId == categoryId;
    });
    return result;
}

//ES6
function isHaveProductCategoryId_ES6(list, categoryId){
	var result = list.some(list => list.categoryId == categoryId);
	return result;
}