const parser = require("@babel/parser");
const fs = require("fs");
const csv = require("fast-csv");

const FILE_TO_PROCESS = "data_short";

const csvStream = csv.format({ headers: ["path", "name", "doc", "code"], quoteColumns: true });
csvStream.pipe(fs.createWriteStream(`./samples_js/${FILE_TO_PROCESS}_output.csv`));

fs.createReadStream(`./samples_js/${FILE_TO_PROCESS}.csv`)
    .pipe(csv.parse({ headers: ["repopath", "repocode"] }))
    .on("data", row => processCode(row.repopath, row.repocode));

function processCode(path, code) {
    function inspectTree(tree) {
        const hasJSDoc = obj =>
            obj.leadingComments && obj.leadingComments.length && obj.leadingComments[0].value.startsWith("*");

        if (tree && tree.body) {
            tree.body.forEach(n => {
                if (n.type === "FunctionDeclaration" && hasJSDoc(n)) {
                    csvStream.write([path, n.id.name, n.leadingComments[0].value, code.substring(n.start, n.end + 1)]);
                }
                if (n.type === "ClassMethod" && hasJSDoc(n)) {
                    csvStream.write([path, n.key.name, n.leadingComments[0].value, code.substring(n.start, n.end + 1)]);
                }
                inspectTree(n.body);
            });
        }
    }

    try {
        const ast = parser.parse(code, {
            sourceType: "unambiguous",
            strictMode: true,
            tokens: false, // true: emit all tokens instead of the AST
            plugins: []
        });
        inspectTree(ast.program);
    } catch (e) {
        // nothing, now
    }
}
