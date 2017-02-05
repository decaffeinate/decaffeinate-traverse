# decaffeinate-traverse

[![Greenkeeper badge](https://badges.greenkeeper.io/decaffeinate/decaffeinate-traverse.svg)](https://greenkeeper.io/)

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
