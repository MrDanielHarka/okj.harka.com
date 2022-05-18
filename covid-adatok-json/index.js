const euZonakJson = `
[
    {"id":"1","zonanev":"Nyugat-Európa"},
    {"id":"2","zonanev":"Dél-Európa"},
    {"id":"3","zonanev":"Észak-Európa"},
    {"id":"4","zonanev":"Visegrádi országok"}
    ]
`

const euZonak = JSON.parse(euZonakJson);
console.log(euZonak);

let optionList = document.getElementById('territory').options;

euZonak.forEach(option =>
    optionList.add(
        new Option(option.zonanev, option.id)
    )
);