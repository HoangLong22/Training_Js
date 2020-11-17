function filterProductById(id, list) {
    var filter = list.filter(function(item) {
         return item.id == id;
    });
    return filter[0].name;
}

//ES6
function filterProductByIdES6(list, id) {
    var result = list.find(list => list.id == id);
    return result.name;
}