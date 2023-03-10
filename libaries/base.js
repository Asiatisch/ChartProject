// the constructors consist of the properties of the object (barchart)
// class defines how an object should be created, what information it holds and what methods it has.
class Barchart {
    constructor(_height, _width, _posX, _posY, _data, _pos, _margin, _numticks, _max, _barwidth, _Blockgap, _tickWidth, _tickGap) {
        this.height = _height;
        this.width = _width;
        this.posX = _posX;
        this.posY = _posY;
        this.data = _data;
        this.pos = createVector(10, 10);


        this.margin = 20;
        this.numticks = 5;

        /* this.Max = Math.max(...food(this.data)) */
        this.Blockgap = 10;
        this.barwidth = (this.width - this.margin * 2 - (this.data.length - 1) * this.Blockgap) / this.data.length;
        /* this.tickWidth = this.width / this.numticks; */
        this.tickWidth = 10;
        this.tickGap = this.height / this.numticks;

    }

    //functions
    render() {
        push();
        translate(this.posX, this.posY);
        this.drawHeightLine();
        this.drawBaseline();
        this.drawTicks();
        this.DrawShape();

        pop();
    }


    // dras the shape
    DrawShape() {

        for (let x = 0; x < this.data.length; x++) {
            push();
            translate(this.margin + (x * this.Blockgap), 0);
            fill(23, 56, 78, 90, 70);
            let gapV = x * (this.Blockgap + this.barwidth)
            rect(gapV, 0, this.barwidth, -this.data[x])
            pop();

        }

    }

    // draws the ticks
    drawTicks() {
        for (let x = 0; x < this.numticks + 1; x++) {

            stroke(80)
            line(0, x * -this.tickGap, -this.tickWidth, x * -this.tickGap, );
            noStroke();
            fill(50)
                // draws the text
            textAlign(RIGHT, )
            text((x * this.tickGap), -this.tickWidth, x * -this.tickGap, )

        }
    }


    drawHeightLine() {
        noFill();
        stroke(0);
        line(0, 0, 0, -this.height)

    }

    drawBaseline() {
        noFill();
        stroke(0);
        line(0, 0, this.width, 0)
    }


}