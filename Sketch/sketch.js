// Here is a data as an array of objects. Remember to access an array you use the arrayName {index} like myAmmount[0]. Then you access the properties value by using the dot notation 

let food = [30, 60, 200, 90, 70]

let userSelect = [];
let charts = [];



function setup() {
    createCanvas(500, 500);
    background(200);
    angleMode(DEGREES);
    rectMode(CORNER);

    /*  for (let x = 0; x < 100; x++) {
         let randomNum = math.floor(random(0, 400))
         charts.push(new Barchart(_randomNum));
     } */
    charts.push(new Barchart(200, 200, 50, 470, food));
    charts.push(new Barchart(200, 200, 100, 250, food));

}


function draw() {
    charts[0].render()
    charts[1].render()
}
// new uses class and objects 
// let chart = new Barchart(400);
// let chart2 = new Barchart(200);