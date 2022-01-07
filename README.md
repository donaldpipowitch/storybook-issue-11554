Bootstraped with:

```bash
$ npx create-react-app my-app --template typescript
$ cd my-app/
$ npx sb init --use-npm
```

To test:

```bash
$ npm run storybook
```

As soon as you add `reactOptions: { strictMode: true, }` to `.storybook/main.js` and a story like this one, you'll see the `"Cannot convert a Symbol value to a string"` error (see [this issue](https://github.com/storybookjs/storybook/issues/11554)):

```ts
import { FC } from 'react';

type Col = {
  key: string;
  head: JSX.Element;
};

type TableProps = {
  items: Col[];
};

const Loop: FC<TableProps> = () => {
  return null;
};

export default {
  title: 'Example/Bug',
};

export const Bug: FC<{ test: unknown }> = ({ test }) => {
  return (
    <Loop
      items={[
        {
          key: 'firstName',
          head: <th>First Name</th>,
        },
      ]}
    />
  );
};
```

The error goes away if you use `strictMode: false,` in `.storybook/main.js` or do this...

```ts
type Col = {
  key: string;
  // head: JSX.Element;
};

// ...

export const Bug: FC<{ test: unknown }> = ({ test }) => {
  return (
    <Loop
      items={[
        {
          key: 'firstName',
          // head: <th>First Name</th>,
        },
      ]}
    />
  );
};
```

...or this...

```ts
export const Bug: FC = () => {
```
