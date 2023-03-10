// Here is a data as an array of objects. Remember to access an array you use the arrayName {index} like myAmmount[0]. Then you access the properties value by using the dot notation 

let data;

let charts = [];




function preload() {

    data = loadTable('DataSets/TestData.csv', 'csv', 'header');


}



function setup() {
    createCanvas(800, 800);
    background(200);
    angleMode(degrees)
    noLoop()
    pixelDensity([2]);

    charts.push(new Barchart({ _width: 200, _height: 300, _posX: 50, _posY: 350, _data: data, _xvalue: "Meat-Type", _yvalue: "total" }));

    charts.push(new Horizontal({ _width: 200, _height: 300, _posX: 350, _posY: 350, _data: data, _xvalue: "Meat-Type", _yvalue: "total" }));

    charts.push(new stackChart({ _width: 200, _height: 300, _posX: -120, _posY: 390, _data: data, _xvalue: "Meat-Type", _yvalue: "total", _avalue: "Fresh", _bvalue: "Preserved" }));

    //charts.push(new stackHori({ _width: 200, _height: 300, _posX: 50, _posY: 700, _data: data, _xvalue: "Meat-Type", _yvalue: "total", _avalue: "Fresh", _bvalue: "Preserved" }));






}

function draw() {
    background(200)
    charts[0].render()
    charts[1].render()
    charts[2].render()
        // charts[3].render()
}