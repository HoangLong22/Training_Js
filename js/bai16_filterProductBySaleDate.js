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
        var result = [];
        var date = new Date().toLocaleDateString();
        
        list.map(list => { if (list.qulity > 0 && list.saleDate >= date) {
                var lists = [list.id, list.name ];
                result.push(lists);
            }
        }
           
        );
        return result;
}


