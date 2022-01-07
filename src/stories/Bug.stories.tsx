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
