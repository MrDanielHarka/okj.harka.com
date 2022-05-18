const magyarHaviAdatokJson = `
[
    {"id":"1","datum":"2017-01-01","import":"7182.20 EUR","export":"7672.09 EUR"},
    {"id":"2","datum":"2017-02-01","import":"7357.33 EUR","export":"8136.3 EUR"},
    {"id":"3","datum":"2017-03-01","import":"8672.22 EUR","export":"9490.86 EUR"},
    {"id":"4","datum":"2017-04-01","import":"6950.34 EUR","export":"7765.47 EUR"},
    {"id":"5","datum":"2017-05-01","import":"8235.47 EUR","export":"9091.72 EUR"},
    {"id":"6","datum":"2017-06-01","import":"7911.15 EUR","export":"8770.38 EUR"},
    {"id":"7","datum":"2017-07-01","import":"7289.40 EUR","export":"7571.56 EUR"},
    {"id":"8","datum":"2017-08-01","import":"7475.92 EUR","export":"7908.12 EUR"},
    {"id":"9","datum":"2017-09-01","import":"7899.38 EUR","export":"8866.84 EUR"},
    {"id":"10","datum":"2017-10-01","import":"8350.21 EUR","export":"8875.07 EUR"},
    {"id":"11","datum":"2017-11-01","import":"8380.32 EUR","export":"9062.06 EUR"},
    {"id":"12","datum":"2017-12-01","import":"6898.50 EUR","export":"7469.56 EUR"},
    {"id":"13","datum":"2018-01-01","import":"7848.20 EUR","export":"8455.32 EUR"},
    {"id":"14","datum":"2018-02-01","import":"7684.73 EUR","export":"8527.03 EUR"},
    {"id":"15","datum":"2018-03-01","import":"8523.32 EUR","export":"9219.94 EUR"},
    {"id":"16","datum":"2018-04-01","import":"8072.45 EUR","export":"8555.1 EUR"},
    {"id":"17","datum":"2018-05-01","import":"8525.07 EUR","export":"9016.24 EUR"},
    {"id":"18","datum":"2018-06-01","import":"8572.17 EUR","export":"9560.08 EUR"},
    {"id":"19","datum":"2018-07-01","import":"8113.28 EUR","export":"8370.26 EUR"},
    {"id":"20","datum":"2018-08-01","import":"7996.62 EUR","export":"7934.59 EUR"},
    {"id":"21","datum":"2018-09-01","import":"8462.86 EUR","export":"8643.98 EUR"},
    {"id":"22","datum":"2018-10-01","import":"9236.85 EUR","export":"9450.94 EUR"},
    {"id":"23","datum":"2018-11-01","import":"9039.04 EUR","export":"9479.52 EUR"},
    {"id":"24","datum":"2018-12-01","import":"7260.07 EUR","export":"7641.63 EUR"},
    {"id":"25","datum":"2019-01-01","import":"8593.41 EUR","export":"8977.58 EUR"},
    {"id":"26","datum":"2019-02-01","import":"8299.41 EUR","export":"9074.34 EUR"},
    {"id":"27","datum":"2019-03-01","import":"9064.22 EUR","export":"9708.44 EUR"},
    {"id":"28","datum":"2019-04-01","import":"8713.26 EUR","export":"8942.38 EUR"},
    {"id":"29","datum":"2019-05-01","import":"8859.18 EUR","export":"9505.85 EUR"},
    {"id":"30","datum":"2019-06-01","import":"8319.51 EUR","export":"8815.17 EUR"}
    ]
`

const magyarHaviAdatok = JSON.parse(magyarHaviAdatokJson);
console.log(magyarHaviAdatokJson);

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table");
let data = Object.keys(magyarHaviAdatok[0]);
generateTable(table, magyarHaviAdatok);