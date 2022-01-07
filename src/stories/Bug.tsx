import { Fragment } from 'react';

export type Col<Item> = {
  key: string;
  head: JSX.Element;
  body: (item: Item, index: number) => JSX.Element;
};

type TableProps<Item> = {
  data: Item[];
  cols: Col<Item>[];
};

export function Table<Item>({ data, cols }: TableProps<Item>) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {cols.map((col) => (
              <Fragment key={col.key}>{col.head}</Fragment>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                {cols.map((col) => (
                  <Fragment key={col.key}>{col.body(item, index)}</Fragment>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
