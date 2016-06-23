/* @flow */

export type ArrayInitialiser = {
  type: 'ArrayInitialiser';
  members: Array<Expression | Expansion>;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type AssignOp = {
  type: 'AssignOp';
  assignee: Assignee;
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type BitAndOp = {
  type: 'BitAndOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type BitNotOp = {
  type: 'BitNotOp';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type BitOrOp = {
  type: 'BitOrOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type BitXorOp = {
  type: 'BitXorOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Block = {
  type: 'Block';
  statements: Array<Statement>;
  inline: boolean;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Bool = {
  type: 'Bool';
  data: boolean;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type BoundFunction = {
  type: 'BoundFunction';
  parameters: Array<Parameter>;
  body: ?Block;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Break = {
  type: 'Break';
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type ChainedComparisonOp = {
  type: 'ChainedComparisonOp';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Class_ = {
  type: 'Class';
  nameAssignee: ?Assignee;
  parent: ?Expression;
  body: ?Block;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type ClassProtoAssignOp = {
  type: 'ClassProtoAssignOp';
  assignee: Assignee;
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type CompoundAssignOp = {
  type: 'CompoundAssignOp';
  assignee: Assignee;
  expression: Expression;
  op: 'EQOp' | 'NEQOp' | 'LogicalAndOp' | 'LogicalOrOp' | 'PlusOp' | 'SubtractOp' | 'MultiplyOp' | 'DivideOp' | 'RemOp' | 'ModuloOp' | 'BitAndOp' | 'BitOrOp' | 'BitXorOp' | 'LTOp' | 'GTOp' | 'LTEOp' | 'GTEOp' | 'OfOp' | 'ExistsOp' | 'InstanceofOp' | 'LeftShiftOp' | 'SignedRightShiftOp' | 'UnsignedRightShiftOp' | 'ExpOp' | 'FloorDivideOp';
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Conditional = {
  type: 'Conditional';
  condition: Expression;
  consequent: ?Block;
  alternate: ?Block;
  isUnless: boolean;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Constructor = {
  type: 'Constructor';
  assignee: Assignee;
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Continue = {
  type: 'Continue';
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type DefaultParam = {
  type: 'DefaultParam';
  param: Parameter;
  default: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type DeleteOp = {
  type: 'DeleteOp';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type DivideOp = {
  type: 'DivideOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type DoOp = {
  type: 'DoOp';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type DynamicMemberAccessOp = {
  type: 'DynamicMemberAccessOp';
  expression: Expression;
  indexingExpr: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type EQOp = {
  type: 'EQOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type ExistsOp = {
  type: 'ExistsOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type ExpOp = {
  type: 'ExpOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Expansion = {
  type: 'Expansion';
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type ExtendsOp = {
  type: 'ExtendsOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Float = {
  type: 'Float';
  data: number;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type FloorDivideOp = {
  type: 'FloorDivideOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type ForIn = {
  type: 'ForIn';
  keyAssignee: ?Assignee;
  valAssignee: ?Assignee;
  target: Expression;
  step: ?Expression;
  filter: ?Expression;
  body: Block;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type ForOf = {
  type: 'ForOf';
  keyAssignee: Assignee;
  valAssignee: ?Assignee;
  target: Expression;
  filter: ?Expression;
  body: Block;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Function_ = {
  type: 'Function';
  parameters: Array<Parameter>;
  body: ?Block;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type FunctionApplication = {
  type: 'FunctionApplication';
  function: Expression;
  arguments: Array<Expression | Expansion>;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type GeneratorFunction = {
  type: 'GeneratorFunction';
  parameters: Array<Parameter>;
  body: Block;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type GTEOp = {
  type: 'GTEOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type GTOp = {
  type: 'GTOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Herestring = {
  type: 'Herestring';
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Identifier = {
  type: 'Identifier';
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type InOp = {
  type: 'InOp';
  left: Expression;
  right: Expression;
  isNot: boolean;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type InstanceofOp = {
  type: 'InstanceofOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Int = {
  type: 'Int';
  data: number;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type JavaScript = {
  type: 'JavaScript';
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type LTEOp = {
  type: 'LTEOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type LTOp = {
  type: 'LTOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type LeftShiftOp = {
  type: 'LeftShiftOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type LogicalAndOp = {
  type: 'LogicalAndOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type LogicalNotOp = {
  type: 'LogicalNotOp';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type LogicalOrOp = {
  type: 'LogicalOrOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type MemberAccessOp = {
  type: 'MemberAccessOp';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type MultiplyOp = {
  type: 'MultiplyOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type NEQOp = {
  type: 'NEQOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type NewOp = {
  type: 'NewOp';
  ctor: Expression;
  arguments: Array<Expression>;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Null = {
  type: 'Null';
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type ObjectInitialiser = {
  type: 'ObjectInitialiser';
  members: Array<ObjectInitialiserMember>;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type ObjectInitialiserMember = {
  type: 'ObjectInitialiserMember';
  key: Identifier | String;
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type OfOp = {
  type: 'OfOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type PlusOp = {
  type: 'PlusOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type PostDecrementOp = {
  type: 'PostDecrementOp';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type PostIncrementOp = {
  type: 'PostIncrementOp';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type PreDecrementOp = {
  type: 'PreDecrementOp';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type PreIncrementOp = {
  type: 'PreIncrementOp';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Program = {
  type: 'Program';
  body: ?Block;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type ProtoMemberAccessOp = {
  type: 'ProtoMemberAccessOp';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Range = {
  type: 'Range';
  left: Expression;
  right: Expression;
  isInclusive: boolean;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type RegExp = {
  type: 'RegExp';
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type RemOp = {
  type: 'RemOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Rest = {
  type: 'Rest';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Return = {
  type: 'Return';
  expression: ?Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type SeqOp = {
  type: 'SeqOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type SignedRightShiftOp = {
  type: 'SignedRightShiftOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Slice = {
  type: 'Slice';
  expression: Expression;
  left: ?Expression;
  right: ?Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type SoakedDynamicMemberAccessOp = {
  type: 'SoakedDynamicMemberAccessOp';
  expression: Expression;
  indexingExpr: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type SoakedFunctionApplication = {
  type: 'SoakedFunctionApplication';
  function: Expression;
  arguments: Array<Expression | Expansion>;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type SoakedMemberAccessOp = {
  type: 'SoakedMemberAccessOp';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Spread = {
  type: 'Spread';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type String = {
  type: 'String';
  data: string;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type SubtractOp = {
  type: 'SubtractOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Super = {
  type: 'Super';
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Switch = {
  type: 'Switch';
  expression: ?Expression;
  cases: Array<SwitchCase>;
  alternate: ?Block;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type SwitchCase = {
  type: 'SwitchCase';
  conditions: Array<Expression>;
  consequent: Block;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type TemplateLiteral = {
  type: 'TemplateLiteral';
  quasis: Array<String>;
  expressions: Array<Expression>;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type This = {
  type: 'This';
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Throw = {
  type: 'Throw';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Try = {
  type: 'Try';
  body: Block;
  catchAssignee: ?Assignee;
  catchBody: ?Block;
  finallyBody: ?Block;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type TypeofOp = {
  type: 'TypeofOp';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type UnaryExistsOp = {
  type: 'UnaryExistsOp';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type UnaryNegateOp = {
  type: 'UnaryNegateOp';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type UnaryPlusOp = {
  type: 'UnaryPlusOp';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Undefined = {
  type: 'Undefined';
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type UnsignedRightShiftOp = {
  type: 'UnsignedRightShiftOp';
  left: Expression;
  right: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type While = {
  type: 'While';
  condition: Expression;
  guard: ?Expression;
  body: Block;
  isUntil: boolean;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Yield = {
  type: 'Yield';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type YieldFrom = {
  type: 'YieldFrom';
  expression: Expression;
  raw: string;
  line: number;
  column: number;
  range: [ number, number ];
  virtual?: boolean;
};

export type Expression =
  ArrayInitialiser |
  AssignOp |
  BitAndOp |
  BitNotOp |
  BitOrOp |
  BitXorOp |
  Bool |
  BoundFunction |
  ChainedComparisonOp |
  Class_ |
  ClassProtoAssignOp |
  CompoundAssignOp |
  Conditional |
  DivideOp |
  DoOp |
  DynamicMemberAccessOp |
  EQOp |
  ExistsOp |
  ExpOp |
  ExtendsOp |
  Float |
  FloorDivideOp |
  ForIn |
  ForOf |
  Function_ |
  FunctionApplication |
  GeneratorFunction |
  GTEOp |
  GTOp |
  Herestring |
  Identifier |
  InOp |
  InstanceofOp |
  Int |
  JavaScript |
  LTEOp |
  LTOp |
  LeftShiftOp |
  LogicalAndOp |
  LogicalNotOp |
  LogicalOrOp |
  MemberAccessOp |
  MultiplyOp |
  NEQOp |
  NewOp |
  Null |
  ObjectInitialiser |
  ObjectInitialiserMember |
  OfOp |
  PlusOp |
  PostDecrementOp |
  PostIncrementOp |
  PreDecrementOp |
  PreIncrementOp |
  ProtoMemberAccessOp |
  Range |
  RegExp |
  RemOp |
  Rest |
  Return |
  SeqOp |
  SignedRightShiftOp |
  Slice |
  SoakedDynamicMemberAccessOp |
  SoakedFunctionApplication |
  SoakedMemberAccessOp |
  Spread |
  String |
  SubtractOp |
  Super |
  Switch |
  TemplateLiteral |
  This |
  Throw |
  Try |
  TypeofOp |
  UnaryExistsOp |
  UnaryNegateOp |
  UnaryPlusOp |
  Undefined |
  UnsignedRightShiftOp |
  While |
  Yield |
  YieldFrom;

export type Node =
  Block |
  DefaultParam |
  Expansion |
  Program |
  Statement |
  SwitchCase;

export type Functions =
  BoundFunction |
  Function_ |
  GeneratorFunction;

export type Statement =
  Break |
  Constructor |
  Continue |
  DeleteOp |
  Expression;

export type Assignee =
  DynamicMemberAccessOp |
  Identifier |
  MemberAccessOp |
  ProtoMemberAccessOp |
  SoakedDynamicMemberAccessOp |
  SoakedMemberAccessOp;

export type Parameter =
  DynamicMemberAccessOp |
  Identifier |
  MemberAccessOp |
  ProtoMemberAccessOp |
  SoakedDynamicMemberAccessOp |
  SoakedMemberAccessOp;

