# AdCheck
A simple AdBlocker checker, with the typing file of TypeScript.

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
