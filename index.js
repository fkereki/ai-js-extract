const parser = require("@babel/parser");
const fs = require("fs");

const code = fs.readFileSync("./input.js", "utf8");

const ast = parser.parse(code, {
    sourceType: "unambiguous",
    strictMode: true,
    tokens: false, // true: emit all tokens instead of the AST
    plugins: []
});

fs.writeFileSync("./output.js", "const a = " + JSON.stringify(ast));

const inspectTree = tree => {
    tree &&
        tree.body &&
        tree.body.forEach(n => {
            if (
                n.type === "FunctionDeclaration" &&
                n.leadingComments &&
                n.leadingComments.length &&
                n.leadingComments[0].value.startsWith("*")
            ) {
                console.log("Found function\n", n.id.name);
                console.log("with comments\n", n.leadingComments[0].value);
                //              console.log("source\n", code.substring(n.start, n.end + 1));
            }

            if (
                n.type === "ClassMethod" &&
                n.leadingComments &&
                n.leadingComments.length &&
                n.leadingComments[0].value.startsWith("*")
            ) {
                console.log("Found method\n", n.key.name);
                console.log("with comments\n", n.leadingComments[0].value);
                //                console.log("source\n", code.substring(n.start, n.end + 1));
            }

            inspectTree(n.body);
        });
};

inspectTree(ast.program);
