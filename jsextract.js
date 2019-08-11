const parser = require("@babel/parser");
const fs = require("fs");
const csv = require("fast-csv");

const FILE_TO_PROCESS = process.argv[2] || "./samples_js/data_short.csv";
const FILE_TO_GENERATE = FILE_TO_PROCESS.replace(/\.csv$/i, "_output$&");

const parserOptions = outputTokens => ({
    sourceType: "unambiguous",
    strictMode: false,
    tokens: outputTokens, // true: emit all tokens instead of the AST
    allowImportExportEverywhere: true,
    allowUndeclaredExports: true,
    plugins: [
        "typescript",
        "jsx",
        "asyncGenerators",
        "classProperties",
        "decorators-legacy",
        "dynamicImport",
        "exportDefaultFrom"
    ]
});

const outputStream = csv.format({
    headers: ["repo_path", "name", "start", "raw_code", "code", "doc", "tokens"],
    quoteColumns: true
});
outputStream.pipe(fs.createWriteStream(FILE_TO_GENERATE));

fs.createReadStream(FILE_TO_PROCESS)
    .pipe(csv.parse({ headers: ["repopath", "repocode"] }))
    .on("data", row => processCode(row.repopath, row.repocode));

function processCode(path, code) {
    function inspectTree(tree) {
        const hasJSDoc = obj =>
            obj.leadingComments && obj.leadingComments.length && obj.leadingComments[0].value.startsWith("*");

        if (tree && tree.body) {
            tree.body.forEach(n => {
                if ((n.type === "FunctionDeclaration" || n.type === "ClassMethod") && hasJSDoc(n)) {
                    const tokens = parser
                        .parse(code.substring(n.start, n.end + 1), parserOptions(true))
                        .tokens.map(x => x.value)
                        .filter(Boolean)
                        .join(" ");

                    outputStream.write([
                        path, // repo_path
                        n.type === "FunctionDeclaration" ? n.id.name : n.key.name, // name
                        n.leadingComments[0].start, // start
                        code.substring(n.leadingComments[0].start, n.end + 1), // raw_code (inc doc)
                        code.substring(n.start, n.end + 1), // code (without doc)
                        code.substring(
                            n.leadingComments[0].start,
                            n.leadingComments[n.leadingComments.length - 1].end + 1
                        ), //doc
                        tokens // tokens
                    ]);
                }

                inspectTree(n.body);
            });
        }
    }

    try {
        const ast = parser.parse(code, parserOptions(false));
        inspectTree(ast.program);
    } catch (e) {
        console.log("EXCEPTION!", e, "<**************************>", code);
    }
}
