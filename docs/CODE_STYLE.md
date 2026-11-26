# General

- Encoding: UTF-8.
- Line endings: LF. A newline at the end of the file is **required**.
- Indent with 2 spaces; do not use tabs.
- Lines must not exceed 80 characters (use `prettier`).
- Do not leave trailing whitespace (configure your text editor to remove it on
  save).

# Naming

- `variableNamesLikeThis`
- `functionNamesLikeThis`
- `ClassNamesLikeThis`
- `methodNamesLikeThis`
- `CONSTANTS_LIKE_THIS`
- `event-like-this:event-logic-namespace`
- Private object properties and methods start with an underscore: `_`.
- Protected object properties and methods also start with an underscore: `_`.
- Avoid short or unclear names.

# Functions

- Use camelCase names: `functionNamesLikeThis`.
- Callback names start with the `on` prefix: `onAction`, `onSubjectAction`,
  for example `onClick` or `onButtonClick`.
- Handler method names start with the `handle` prefix: `handleAction`,
  `handleSubjectAction`, for example `handleClick`.

```tsx
const Item: FC<ItemProps> = (props) => {
  const { onFetch } = props;

  return <div></div>;
};

const Usage: FC = () => {
  const handleFetch = () => {
    // ...
  };

  return <Item onFetch={handleFetch} />;
};
```

# `useState`

- Name the state value in camelCase.
- Name the setter with the `set` prefix.

```tsx
const [count, setCount] = useState(0);
const [isBig, setIsBig] = useState(false);
```

# Classes

Use PascalCase names: `ClassNamesLikeThis`.

# Interfaces and types

- Use PascalCase names: `InterfaceOrTypeLikeThis`.
- Name component props interfaces after the component, with a `Props` suffix.
- Use `interface` to describe objects.
- Use `type` to describe composite types.
- Document every property and use the JSDoc comment format.

```ts
interface Person {
  /** User ID in UUID format. */
  id: string;
  /** User's age. */
  age: number;
  /** User's name. */
  name: string;
  /** User's country code. */
  countryCode: "ru" | "kz" | "ua";
}

type User = Person | UnknownPerson;
```

# Constants

Use uppercase snake_case names: `CONSTANT_NAMES_LIKE_THIS`.

# Flags

Flags are boolean variables. Use camelCase names with an `is`, `are`, or
`should` prefix: `isBig`, `isDisabled`, `shouldOpen`.

# Literals

## Objects

- Do not put a space before the colon.
- Do not align colons.
- Put key names in quotes only when necessary.

```js
const obj = {
  key: 0,
  "key-key": 1,
};
```

## Arrays

Put a space after each comma:

```js
const fellowship = ["foo", "bar", "baz"];
```

## Strings

- Use single quotes for strings.
- Escape single quotes inside a string.

# File structure, imports, and exports

- Keep related component-only entities in the component directory.
- The file name must match the directory name.
- The default export name must match the file name.
- Named exports are permitted when they improve discoverability.

```text
components
└── Select
    ├── images
    │   ├── up.svg
    │   └── down.svg
    ├── hooks
    │   └── useClickOutside
    │       └── useClickOutside.ts
    └── Select.tsx
```

# Function declarations and function expressions

- Use function declarations only for overloads.
- Otherwise, use arrow function expressions.
- Use an implicit return only when the whole expression fits on one line.
- Otherwise, use a block with `{}`.

```tsx
const cleanedCustomFields = _.filter(customFields, (customField) => {
  return customField.id && customField.option && customField.value;
});
```

# Underscore and Lodash

- Use Underscore/Lodash methods as much as possible.
- For a three-level chain, use the `_()` syntax.

```js
const sum = _(items).reduce((total, item) => {
  if (_.isObject(item)) {
    return total + item.value;
  }

  return total + item;
}, 0);
```

# When to use `interface` or `type`

- Use `interface` to describe objects.
- Use `type` to describe composite types.
- Document every property.

# Braces

- Put the opening brace on the same line as the preceding construct.
- Always use braces.

```js
if (condition) {
  return;
}
```

# Conditional statements

- Put `else` on the same line as the closing brace.
- Do not use assignments in conditional expressions.
- Use expressions only when a value is required.
- Break long conditions for readability.
- Do not use Yoda conditions.

```js
if (getType() === "driving") {
  // ...
}
```

## `switch`

```js
switch (value) {
  case 1:
    // ...
    break;

  case 2:
    // ...
    break;

  default:
  // ...
}
```

# Operators

## Equality operator

Always use strict equality (`===`) and inequality (`!==`), unless type
coercion is necessary.

## Ternary operator

Keep ternary expressions readable:

```js
const x = a ? b : c;
const y = a ? longButSimpleOperandB : longButSimpleOperandC;
```

## Unary operator

Write unary operators next to their operands without a space:

```js
const foo = !bar;
```

# Type conversion

Use explicit type conversions:

```js
Boolean(foo);
Number(bar);
String(baz);
[].indexOf(qux) === -1;
```

# Blank lines

Use blank lines to group logically related code.

# Comments

- Write comments in Russian.
- Use `//` for inline comments, followed by one space.
- JSDoc is permitted for functions, classes, and similar constructs.

# CSS

- Group CSS properties by their effect:
  1. Positioning.
  2. Display and layout.
  3. Spacing.
  4. Typography.
  5. Everything else.

```css
position: relative;
z-index: 10;
overflow: hidden;

display: flex;
align-items: baseline;
width: 100%;
padding: 40px 35px;

font-size: 13px;
line-height: 15px;
color: tomato;

border: 1px solid #ffffff;
background: green;
```

- Use BEM for global modules.
- Do not use BEM for local modules.
