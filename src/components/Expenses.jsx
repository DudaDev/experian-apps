import React from "react";
import { OverviewBlock } from "@toptal/picasso";
import Picasso from "@toptal/picasso-provider";

const blocks = [
  {
    value: "$26,125,123.70",
    label: "Outstanding",
    variant: "label-yellow",
  },
  {
    value: "$5,837,806.68",
    label: "Overdue",
    variant: "label-red",
  },
  {
    value: "$1,232,107.99",
    label: "Disputed",
    variant: "label-red",
  },
  {
    value: "$1,722,076.43",
    label: "Incollections",
    variant: "label-red",
  },
  {
    value: "$935,590.65",
    label: "Written off",
    variant: "label-red",
  },
  { value: "$5,758,716.46", label: "Pending receipt" },
  {
    value: "$44,244,163.83",
    label: "Credited",
    variant: "label-green",
  },
  {
    value: "$585,895,606.35",
    label: "Paid",
    variant: "label-green",
  },
];

export default function Expenses({ rowNumber = 2 } = {}) {
  const data = chunk(blocks, Math.ceil(blocks.length / parseInt(rowNumber)));
  const run = Math.random() * 100;
  return (
    <Picasso>
      <section>
        <OverviewBlock.Group>
          {data.map((row, index) => (
            <OverviewBlock.Row key={`${run}_${index}`}>
              {row.map((block, index) => (
                <OverviewBlock key={`${run}_${index}`} {...block} />
              ))}
            </OverviewBlock.Row>
          ))}
        </OverviewBlock.Group>
      </section>
    </Picasso>
  );
}

function padArray(array, length) {
  while (array.length < length) {
    array.push({});
  }
  return array;
}

function chunk(origArray, size) {
  const chunked_arr = [];
  let array = [...origArray];
  if (array.length % size !== 0) {
    array = padArray(array, Math.ceil(array.length / size) * size);
  }
  for (let i = 0; i < array.length; i += size) {
    chunked_arr.push(array.slice(i, i + size));
  }
  return chunked_arr;
}
