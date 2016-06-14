/* @flow */

import Visitor from './Visitor.js';
import type { Node } from './types.js';

export default function traverse(node: Node, iterator: (node: Node, parent: ?Node) => ?boolean) {
  let visitorClass = class extends Visitor {
    visitNode(node: Node) {
      let result = iterator(node, this.parent());

      if (result !== false) {
        super.visitNode(node);
      }
    }
  };

  new visitorClass().visit(node);
}
