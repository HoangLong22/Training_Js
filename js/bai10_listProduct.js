function listProduct(count) {
    var list = [];
    for (var i = 0; i < count; i++) {
        var listPro = new Product(i, "Product" + i, 100 + i, new Date().toLocaleDateString(), i + 1, i%2);
        list.push(listPro);
    }
    return list;
}