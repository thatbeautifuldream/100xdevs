## Counter

Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)

## Solution

```js
let d = new Date();
datetext = d.toTimeString();
// datestring is "20:32:01 GMT+0530 (India Standard Time)"
// Split with ' ' and we get: ["20:32:01", "GMT+0530", "(India", "Standard", "Time)"]
// Take the first value from array :)
datetext = datetext.split(" ")[0];
```
