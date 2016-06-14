/* @flow */

import type { Node } from './types.js';

/**
 * Abstract subclass providing basic visitor support for visiting nodes in a
 * decaffeinate-parser AST. For the real visitor, see `Visitor`.
 */
export default class BasicVisitor {
  _node: ?Node=null;
  _parent: ?Node=null;
  _break: boolean = false;
  _skip: boolean = false;
  _visiting: boolean = false;

  /**
   * Visit a node and its descendants in a decaffeinate AST. Parent nodes are
   * visited first, followed by their children in the order defined by
   * individual visitor methods.
   */
  visit(node: Node) {
    if (this._visiting) {
      throw new Error(
        `Cannot visit() ${node.type} while already inside a visit() call. ` +
        `Call descend() instead?`
      );
    }

    try {
      this._visiting = true;
      this.descend(node);
    } finally {
      this._node = null;
      this._parent = null;
      this._break = false;
      this._visiting = false;
    }
  }

  /**
   * Descend into a node from a parent visitor method.
   */
  descend(node: Node) {
    if (this._break || this._skip) {
      return;
    }
    
    if (!this._visiting) {
      throw new Error(
        `Cannot descend() into ${node.type} because there was no call to ` +
        `visit(). Call visit() instead?`
      );
    }

    let parent = this._parent;
    let current = this._node;
    let skip = this._skip;

    try {
      this._parent = current;
      this._node = node;
      this._skip = false;
      this.visitNode(node);
    } finally {
      this._parent = parent;
      this._node = current;
      this._skip = skip;
    }
  }

  /**
   * Override point for subclasses. Implementers of this method should delegate
   * to the appropriate methods based on `node`.
   */
  visitNode(node: Node) {
    throw new Error(
      `Cannot call unimplemented visitNode() with ${node.type}. Ensure ` +
      `${this.constructor.name} implements visitNode() correctly.`
    );
  }

  /**
   * Gets the parent node for the node currently being visited.
   */
  parent(): ?Node {
    return this._parent;
  }

  /**
   * Prevents visiting any new nodes.
   */
  break() {
    this._break = true;
  }

  /**
   * Skips any descendants of the current node.
   */
  skip() {
    this._skip = true;
  }
}
