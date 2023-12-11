## File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```text
hello     world    my    name   is       raman
```

After the program runs, the output should be

```text
hello world my name is raman
```

### Solution

```js
const fs = require("fs");

fs.readFile("./file.txt", "utf8", (err, data) => {
  if (err) throw err;
  const cleanedData = data.replace(/\s+/g, " ");
  fs.writeFile("./file.txt", cleanedData, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});
```
