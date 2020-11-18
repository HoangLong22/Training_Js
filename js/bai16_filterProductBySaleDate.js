function filterProductBySaleDates(list) {
    var result = [];
    var date = new Date().toLocaleDateString();

    list.forEach(function (item) {
        if (item.qulity > 0 && item.saleDate >= date) {
            var list_new = [item.id, item.name];
            result.push(list_new);
        }
    });
    return result;
    
}

//ES6
function filterProductBySaleDates_ES6(list){
    var date = new Date().toLocaleDateString(); 
    var result = list.filter(list =>  list.qulity > 0 && list.saleDate >= date);
        lists = result.map(list => [list.id, list.name ]);
        return lists;
}

