import * as fs from "fs-extra";
import * as path from "path";

async function gen(type: "completed" | "todo") {
  const dirs = await fs.readdir(path.join(__dirname, `../src/${type}`));

  const str = dirs
    .map((item) => {
      if (type === "todo") {
        return `- [] ${item}`;
      }
      return `- [x] ${item}`;
    })
    .join("\n");
  console.log(`${type}: 共 ${dirs.length}题`);

  return `# ${type}` + "\n\n" + str;
}

async function main() {
  const completed = await gen("completed");
  const todo = await gen("todo");

  const readmePath = path.join(__dirname, "../readme.md");

  await fs.writeFile(readmePath, todo + "\n\n" + completed);
}

main();
