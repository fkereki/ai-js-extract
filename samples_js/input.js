/* eslint-disable  */

var rows = prompt("How many rows for your multiplication table?");
var cols = prompt("How many columns for your multiplication table?");
/*
    Simple comment
*/
if (rows == "" || rows == null) rows = 10;
if (cols == "" || cols == null) cols = 10;
createTable(rows, cols);

/**
 *  Create a table with so many
 *  rows and cols, calculated
 *  somehow...
 */
function createTable(rows, cols) {
    var j = 1;
    var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
    for (i = 1; i <= rows; i++) {
        output = output + "<tr>";
        while (j <= cols) {
            output = output + "<td>" + i * j + "</td>";
            j = j + 1;
        }
        output = output + "</tr>";
        j = 1;
    }
    output = output + "</table>";
    document.write(output);
}

class Rectangle {
    /**
     * @param height - The height of the rectangle to construct
     * @param width - The width of the rectangle
     */
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea();
    }

    /**
     * Get the area of the constructed rectangle
     */
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
