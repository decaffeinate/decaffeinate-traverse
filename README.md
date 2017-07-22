# decaffeinate-traverse

## DEPRECATED

This project is no longer in use and should be considered deprecated.

---

Traverse programs parsed using [decaffeinate-parser][decaffeinate-parser].

## Install

```
$ npm install [--save-dev] decaffeinate-traverse
```

## Usage

```js
/**
 * This example prints all identifiers in a program. In this case, it prints:
 *
 *     a
 *     b
 *
 */

import { Visitor } from 'decaffeinate-traverse';
import { parse } from 'decaffeinate-parser';

class IdentifierPrinter extends Visitor {
  visitIdentifier(node) {
    console.log(node.data);
  }
}

new IdentifierPrinter().visit(parse('a + b'));
```

## License

MIT


[decaffeinate-parser]: https://github.com/eventualbuddha/decaffeinate-parser
