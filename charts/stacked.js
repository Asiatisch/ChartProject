class StackChart {
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
        _bvalue,
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
        push();
        translate(this.posX, this.posY);
        this.chartTitle();
        this.drawBar();
        this.drawVerticalLine();
        this.drawHorizontalLine();

        pop();
    }

    drawBar() {
        let barNumber = this.data.getRowCount();
        let remainWidth = this.width - this.margin * 2 - ((barNumber - 1) * this.spacing)
        let BarChartWidth = remainWidth / barNumber;
        let barunit = BarChartWidth + this.spacing;

        push()

        translate(0, 0);
        for (let i = 0; i < barNumber; i++) {


            let dataValue = int(-data.rows[i].obj[this.yvalue])
            noStroke();
            fill(255)
            rect(i * barunit, 0, BarChartWidth, this.scaler(dataValue))
        }
        translate(0, 0);
        for (let i = 0; i < barNumber; i++) {


            let dataValue = int(-data.rows[i].obj[this.bvalue])
            noStroke();
            fill(0)
            rect(i * barunit, 0, BarChartWidth, this.scaler(dataValue))
        }

        pop()


    }

    drawVerticalLine() {
        noFill();

        line(0, 0, 0, -this.height)
            // this line of code draws the ticks in the chart
        for (let T = 0; T < this.tickAmount + 1; T++) {
            let TopTickSpace = this.height / this.tickAmount;

            stroke(0);
            line(0, -TopTickSpace * T, -10, -TopTickSpace * T);

            let unitSpace = (this.maxValue / this.tickAmount).toFixed(2);
            //this line of code draws the text 
            noStroke();
            fill(50)
            textSize(15)
            textAlign(RIGHT, CENTER)
            pixelDensity([1])
            text(T * unitSpace, -15, -TopTickSpace * T)
        }

    }

    drawHorizontalLine() {
        stroke(0)
        line(0, 0, this.width, 0);

        let barNumber = this.data.getRowCount();
        let remainWidth = this.width - (this.margin * 2) - ((barNumber - 1) * this.spacing)
        let BarChartWidth = remainWidth / barNumber;
        let barunit = BarChartWidth + this.spacing;
        push()
        translate(this.margin, 0);



        let labelArray = this.data.getColumn(this.xvalue);

        for (let x = 0; x < labelArray.length; x++) {
            push()
            let dataValue = labelArray[x]

            fill(0);
            noStroke()
            textAlign(LEFT, TOP)
            textSize(12)


            translate(x * barunit + (BarChartWidth / 2), 15)
            rotate(45)
            text(dataValue, 0, 0)
            pop()
        }
        pop()
    }

    scaler(_num) {
        return map(_num, 0, this.maxValue, 0, this.height);
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

    chartTitle() {
        push();
        textAlign(TOP, CENTER);
        fill(0, 0, 0)
        textSize(15)
        text(" Agricultural Fresh(white) & Preserve(Black) Goods comparison with horizontal", this.height / -10, -this.width - 120, )
        pop();
    }
}