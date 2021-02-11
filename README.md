# AdCheck
A simple AdBlocker checker, with the typing file of TypeScript.

The source code is from [here](https://blog.reh.tw/archives/2273), thanks GoneTone! :)

## Usage
```html
<script src="./checker.js"></script>
<script>
adcheck().then((result) => {
    if (result) {
        alert("Disable your AdBlocker!");
    }
});
</script>
```

### Use webpack (not tested yet)
```bash
# npm
npm install adcheck

# yarn
yarn add adcheck
```

```javascript
import * as adc from 'adcheck';

adc.adcheck().then((result) => {
    if (result) {
        alert("Disable your AdBlocker!");
    }
});
```
