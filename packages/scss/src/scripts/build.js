const fs = require("fs");
const path = require("path");
const sass = require("node-sass");

const getComponents = () => {
  let allComponents = [];
  const types = ["atoms", "molecules", "organisms"];

  types.forEach((type) => {
    const allFiles = fs.readdirSync(`src/${type}`).map((file) => ({
      input: `src/${type}/${file}`,
      output: `src/lib/${file.slice(0, -4) + "css"}`,
    }));

    allComponents = [...allComponents, ...allFiles];
  });

  return allComponents;
};

const compile = (pathname, filename) => {
  const result = sass.renderSync({
    data: fs.readFileSync(path.resolve(pathname)).toString(),
    outputStyle: "expanded",
    outFile: "global.css",
    includePaths: [path.resolve("src")],
  });

  fs.writeFileSync(path.resolve(filename), result.css.toString());
};

getComponents().forEach((component) => {
  compile(component.input, component.output);
});