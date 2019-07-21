const parser = require("@babel/parser");
const fs = require("fs");

const code = fs.readFileSync("./samples_js/input.js", "utf8");

const ast = parser.parse(code, {
    sourceType: "unambiguous",
    strictMode: true,
    tokens: false, // true: emit all tokens instead of the AST
    plugins: []
});

// The output.js file is for debugging purposes only
// You can use "prettier" to get more readable code: see output2.js
fs.writeFileSync("./samples_js/output.js", "const a = " + JSON.stringify(ast));

const inspectTree = tree => {
    const hasJSDoc = obj =>
        obj.leadingComments && obj.leadingComments.length && obj.leadingComments[0].value.startsWith("*");

    tree &&
        tree.body &&
        tree.body.forEach(n => {
            if (n.type === "FunctionDeclaration" && hasJSDoc(n)) {
                console.log("Found function\n", n.id.name);
                console.log("with comments\n", n.leadingComments[0].value);
                console.log("source\n", code.substring(n.start, n.end + 1));
            }

            if (n.type === "ClassMethod" && hasJSDoc(n)) {
                console.log("Found method\n", n.key.name);
                console.log("with comments\n", n.leadingComments[0].value);
                console.log("source\n", code.substring(n.start, n.end + 1));
            }

            inspectTree(n.body);
        });
};

inspectTree(ast.program); // see output.txt for sample output
