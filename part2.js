var myJam = {};
var fs = require ('fs');
function label(currentPath, subObj){
    var items = fs.readdirSync(currentPath);
    for (var i = 0; i < items.length; i++){
        var currentItem = items[i];
        var newPath = currentPath + "/" + currentItem;
        var fileInfo = fs.statSync(newPath);
        if (fileInfo.isDirectory()){
            subObj[currentItem] = {};
            label(newPath, subObj[currentItem]);
        } else {
            subObj[currentItem] = fileInfo.size;
        }




    }
}

label(__dirname + "/files", myJam);
console.log(myJam);
fs.writeFileSync(__dirname + '/files.json', JSON.stringify(myJam));
console.log(__dirname + '/files.json');
