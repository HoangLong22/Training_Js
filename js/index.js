$().ready(function () {
    var list = listProduct(10);
    console.log(list);
    console.log(filterProductById(5, list));
    console.log(filterProductByIdES6(list, 9));
    console.log(filterProductByQulity(list, 0));
    console.log(filterProductByQulityES6(list, 0));
    console.log(filterProductBySaleDate(list));
    console.log(filterProductBySaleDateES6(list));
    console.log(totalQulity(list));
    console.log(totalQulityES6(list));
    console.log(isHaveProductCategoryId(list,100))
    console.log(isHaveProductCategoryId_ES6(list,1))
    console.log(filterProductBySaleDates(list));
    console.log(filterProductBySaleDates_ES6(list));
});