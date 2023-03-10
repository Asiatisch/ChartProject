class StackHori {
    constructor({
        _height,
        _width,
        _posX,
        _posY,
        _data,
        _title,
        _xvalue,
        _yvalue,
        _avalue,
        _bvalue

    }) {
        this.height = _height;
        this.width = _width;
        this.posX = _posX;
        this.posY = _posY;
        this.data = _data;
        this.title = _title;

        this.xvalue = _xvalue;
        this.yvalue = _yvalue;
        this.avalue = _avalue;
        this.bvalue = _bvalue;


        this.maxValue = this.calculateMax();
        this.margin = 10;
        this.tickAmount = 5;
        this.spacing = 10;
        this.tickWidth = 10;
    }

    render() {
        push()
        translate(this.posX, this.posY)

        this.drawBars();
        this.drawVerticalLines();
        this.drawHorizontalLines();
        pop()
    }

    drawBars() {
        let barNumb = this.data.getRowCount();
        let remainHeight = this.height - (this.margin * 2) - ((barNumb - 1) * this.spacing);
        let barHeight = remainHeight / barNumb;
        let barunit = barHeight + this.spacing;

        push()
        translate(0, 0);
        for (let i = 0; i < barNumb; i++) {


            let dataValue = int(-data.rows[i].obj[this.yvalue])
            noStroke();
            fill(255);
            rect(0, i * -barunit, -this.scaler(dataValue), -barHeight);

        }
        translate(0, 0);
        for (let i = 0; i < barNumb; i++) {


            let dataValue = int(-data.rows[i].obj[this.bvalue])
            noStroke();
            fill(0);
            rect(0, i * -barunit, -this.scaler(dataValue), -barHeight);

        }
        pop()

    }

    drawHorizontalLines() {
        stroke(0)
        line(0, 0, this.height, 0);
        for (let T = 0; T < this.tickAmount + 1; T++) {
            let HorizontalTicks = this.height / this.tickAmount;

            stroke(0);
            line(HorizontalTicks * T, 0, HorizontalTicks * T, 10);
            //-HorizontalTicks * T

            let unitSpace = (this.maxValue / this.tickAmount).toFixed(2);
            //this line of code draws the text 
            noStroke();
            fill(0)
            textSize(15)
            textAlign(CENTER)
            pixelDensity([1])
            text(T * unitSpace, HorizontalTicks * T, 30)
        }


    }


    drawVerticalLines() {
        stroke(0)
        line(0, 0, 0, -this.height);

        let barNumb = this.data.getColumnCount();
        let remainWidth = this.height - (this.margin * 2) - ((barNumb - 1) * this.spacing);
        let barWidth = remainWidth / barNumb;
        let barunit = barWidth + this.spacing;

        push();

        let labelArray = this.data.getColumn(this.xvalue);

        for (let x = 0; x < labelArray.length; x++) {
            push()
            let dataValue = labelArray[x]

            fill(0);
            noStroke()
            textAlign(LEFT, CENTER)
            textSize(10)


            translate(-50, -x * barunit, )

            text(dataValue, 0, 0)
            pop()
        }
        pop()



    }


    calculateMax() {
        let maxNum = 0;
        for (let x = 0; x < this.data.getRowCount(); x++) {

            if (int(data.rows[x].obj[this.yvalue]) > maxNum) {
                maxNum = int(data.rows[x].obj[this.yvalue]);
            }
        }
        for (let x = maxNum; x < 100000000; x++) {
            if (x % this.tickAmount == 0 && x % 1 == 0) {
                maxNum = x;
                break
            }

        }
        return maxNum;
    }

    scaler(_num) {
        return map(_num, 0, this.maxValue, 0, this.height);
    }


}