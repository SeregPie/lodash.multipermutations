# lodash.multipermutations

`_.multipermutations(collection, n)`

Calculates all possible permutations with repetition of a certain size.

| argument | description |
| ---: | :--- |
| `collection` | A collection of distinct values to calculate the permutations from. |
| `n` | The number of values to combine. |

Returns a new array.

## setup

### npm

```shell
npm i lodash.multipermutations
```

### ES module

```javascript
import 'lodash.multipermutations';
import _ from 'lodash';
```

### Node

```javascript
require('lodash.multipermutations');
let _ = require('lodash');
```

### browser

```html
<script src="https://unpkg.com/lodash"></script>
<script src="https://unpkg.com/lodash.multipermutations"></script>
```

## usage

```javascript
let multipermutations = _.multipermutations([0, 1], 3);
// => [[0, 0, 0], [0, 0, 1], [0, 1, 0], [0, 1, 1], [1, 0, 0], [1, 0, 1], [1, 1, 0], [1, 1, 1]]
```

---

Also accepts array-like values.

```javascript
let multipermutations = _('abc').multipermutations(2).map(v => _.join(v, '')).value();
// => ['aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc']
```

## see also

- [lodash.combinations](https://github.com/SeregPie/lodash.combinations)
- [lodash.permutations](https://github.com/SeregPie/lodash.permutations)
- [lodash.multicombinations](https://github.com/SeregPie/lodash.multicombinations)
- [lodash.product](https://github.com/SeregPie/lodash.product)
