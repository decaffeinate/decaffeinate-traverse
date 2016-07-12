import Visitor from '../src/Visitor.js';
import type { Identifier, Int, Node, PlusOp, String } from '../src/types.js';
import { deepEqual, strictEqual } from 'assert';
import { parse } from 'decaffeinate-parser';

type Direction = '↓' | '↑';

class TrackVisitsVisitor extends Visitor {
  visited: Array<[ Direction, string ]> = [];

  visitNode(node: Node) {
    this.visited.push([ '↓', node.type ]);
    super.visitNode(node);
    this.visited.push([ '↑', node.type ]);
  }
}

describe('Visitor', () => {
  it('visits nodes in top-down order', () => {
    let visitor = new TrackVisitsVisitor();
    visitor.visit(parse('a(3 + 4.2)'));

    deepEqual(
      visitor.visited,
      [
        [ '↓', 'Program' ],
        [ '↓', 'Block' ],
        [ '↓', 'FunctionApplication' ],
        [ '↓', 'Identifier' ],
        [ '↑', 'Identifier' ],
        [ '↓', 'PlusOp' ],
        [ '↓', 'Int' ],
        [ '↑', 'Int' ],
        [ '↓', 'Float' ],
        [ '↑', 'Float' ],
        [ '↑', 'PlusOp' ],
        [ '↑', 'FunctionApplication' ],
        [ '↑', 'Block' ],
        [ '↑', 'Program' ]
      ]
    )
  });

  it('handles interesting operators', () => {
    let visitor = new TrackVisitsVisitor();
    visitor.visit(parse('a %% b'));

    deepEqual(
      visitor.visited,
      [
        [ '↓', 'Program' ],
        [ '↓', 'Block' ],
        [ '↓', 'ModuloOp' ],
        [ '↓', 'Identifier' ],
        [ '↑', 'Identifier' ],
        [ '↓', 'Identifier' ],
        [ '↑', 'Identifier' ],
        [ '↑', 'ModuloOp' ],
        [ '↑', 'Block' ],
        [ '↑', 'Program' ]
      ]
    )
  });

  it('skips missing child nodes', () => {
    let visitor = new TrackVisitsVisitor();
    visitor.visit(parse('if a then 0 # no `else` clause'));

    deepEqual(
      visitor.visited,
      [
        [ '↓', 'Program' ],
        [ '↓', 'Block' ],
        [ '↓', 'Conditional' ],
        [ '↓', 'Identifier' ],
        [ '↑', 'Identifier' ],
        [ '↓', 'Block' ],
        [ '↓', 'Int' ],
        [ '↑', 'Int' ],
        [ '↑', 'Block' ],
        [ '↑', 'Conditional' ],
        [ '↑', 'Block' ],
        [ '↑', 'Program' ]
      ]
    );
  });

  it('allows breaking out of the visitor', () => {
    class BreakOnIdentifierVisitor extends Visitor {
      visitedInt: boolean = false;

      visitIdentifier(node: Identifier) {
        this.break();
      }

      visitInt(node: Int) {
        this.visitedInt = true;
      }
    }

    let visitor = new BreakOnIdentifierVisitor();
    visitor.visit(parse('a + 0'));
    strictEqual(visitor.visitedInt, false);
  });
  
  it('allows skipping a node and its children', () => {
    class SkipOnPlusOpVisitor extends Visitor {
      visitedIdentifiers: Array<string> = [];
      visitedInts: Array<number> = [];

      visitPlusOp(node: PlusOp) {
        this.skip();
      }

      visitInt(node: Int) {
        this.visitedInts.push(node.data);
      }
      
      visitIdentifier(node: String) {
        this.visitedIdentifiers.push(node.data);
      }
    }

    let visitor = new SkipOnPlusOpVisitor();
    visitor.visit(parse('[a + 0, b]'));

    deepEqual(visitor.visitedInts, []);
    deepEqual(
      visitor.visitedIdentifiers,
      [ 'b' ]
    );
  });
});
