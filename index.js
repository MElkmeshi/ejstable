const reader = require('xlsx')
var fs = require('fs'),
ejs = require("ejs");
let matchs = []

function ejs2html(path, information) {
fs.readFile(path, 'utf8', function (err, data) {
    if (err) { console.log(err); return false; }
    var ejs_string = data,
        template = ejs.compile(ejs_string,{matchs}),
        html = template(information);
    fs.writeFile(path + '.html', html, function(err) {
        if(err) { console.log(err); return false }
        return true;
    });  
});
}

// Reading our test file
const file = reader.readFile('./matchs.xlsx')
  
    
const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[0]])
temp.forEach((res) => {
    matchs.push(res)
})

ejs2html(__dirname+"/index.ejs", {matchs, title: "NTD Competitions"})
