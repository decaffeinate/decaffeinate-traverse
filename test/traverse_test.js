import traverse from '../src/traverse.js';
import type { Node } from '../src/types.js';
import { deepEqual } from 'assert';
import { parse } from 'decaffeinate-parser';

describe('traverse', () => {
  it('offers a simple interface to call a callback with all nodes with parent', () => {
    let visited = [];

    traverse(parse('a + 0'), (node: Node, parent: ?Node) => {
      visited.push([ node.type, parent ? parent.type : null ]);
    });

    deepEqual(
      visited,
      [
        [ 'Program', null ],
        [ 'Block', 'Program' ],
        [ 'PlusOp', 'Block' ],
        [ 'Identifier', 'PlusOp' ],
        [ 'Int', 'PlusOp' ]
      ]
    )
  });
});
