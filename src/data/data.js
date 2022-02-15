import { palette } from "@toptal/picasso/utils";

export function getChartData(accountId = 1) {
  return barData[accountId];
}

export function getLineData(accountId = 1) {
  return lineData[accountId];
}

export function getTableData(accountId) {}

const barData = {
  1: [
    {
      name: "Claimed",
      value: { "active talent": 23, "potential talent": 30 },
    },
    {
      name: "Contacted",
      value: { "active talent": 5, "potential talent": 9 },
    },
    {
      name: "Approved",
      value: { "active talent": 2, "potential talent": 0 },
    },
    {
      name: "Verified",
      value: { "active talent": 2, "potential talent": 0 },
    },
    {
      name: "With a Deposit",
      value: { "active talent": 2, "potential talent": 0 },
    },
    {
      name: "With an Active engagement",
      value: { "active talent": 1, "potential talent": 0 },
    },
  ],
  2: [
    {
      name: "Claimed",
      value: { "active talent": 15, "potential talent": 25 },
    },
    {
      name: "Contacted",
      value: { "active talent": 13, "potential talent": 19 },
    },
    {
      name: "Approved",
      value: { "active talent": 7, "potential talent": 2 },
    },
    {
      name: "Verified",
      value: { "active talent": 5, "potential talent": 0 },
    },
    {
      name: "With a Deposit",
      value: { "active talent": 5, "potential talent": 0 },
    },
    {
      name: "With an Active engagement",
      value: { "active talent": 2, "potential talent": 0 },
    },
  ],
  3: [
    {
      name: "Claimed",
      value: { "active talent": 19, "potential talent": 24 },
    },
    {
      name: "Contacted",
      value: { "active talent": 15, "potential talent": 9 },
    },
    {
      name: "Approved",
      value: { "active talent": 12, "potential talent": 3 },
    },
    {
      name: "Verified",
      value: { "active talent": 8, "potential talent": 0 },
    },
    {
      name: "With a Deposit",
      value: { "active talent": 4, "potential talent": 0 },
    },
    {
      name: "With an Active engagement",
      value: { "active talent": 1, "potential talent": 0 },
    },
  ],
};

const lineData = {
  1: {
    HIGHLIGHTS: [
      {
        from: 6,
        to: 8,
        color: palette.yellow.main,
      },
      {
        from: 12,
        to: 13,
        color: palette.yellow.main,
      },
    ],
    CHART_DATA: [
      { x: "Oct 20", talents: 1.7 },
      { x: "Oct 21", talents: 2 },
      { x: "Oct 22", talents: 1.7 },
      { x: "Oct 23", talents: 2 },
      { x: "Oct 24", talents: 1.5 },
      { x: "Oct 25", talents: 1.3 },
      { x: "Oct 26", talents: 1.6 },
      { x: "Oct 27", talents: 2.7 },
      { x: "Oct 28", talents: 3.7 },
      { x: "Oct 29", talents: 1.7 },
      { x: "Oct 30", talents: 1.5 },
      { x: "Oct 31", talents: 1.6 },
      { x: "Nov 01", talents: 2 },
      { x: "Nov 02", talents: 1.5 },
      { x: "Nov 03", talents: 1.3 },
      { x: "Nov 04", talents: 1.5 },
      { x: "Nov 05", talents: 1.5 },
      { x: "Nov 06", talents: 1.8 },
      { x: "Nov 07", talents: 1.6 },
      { x: "Nov 08", talents: 2 },
      { x: "Nov 09", talents: 2 },
      { x: "Nov 10", talents: 3.1 },
    ],
  },
  2: {
    HIGHLIGHTS: [
      {
        from: 3,
        to: 5,
        color: palette.yellow.main,
      },
      {
        from: 10,
        to: 12,
        color: palette.yellow.main,
      },
    ],
    CHART_DATA: [
      { x: "Oct 20", talents: 1.4 },
      { x: "Oct 21", talents: 1.9 },
      { x: "Oct 22", talents: 1.3 },
      { x: "Oct 23", talents: 2.1 },
      { x: "Oct 24", talents: 1.1 },
      { x: "Oct 25", talents: 1.2 },
      { x: "Oct 26", talents: 1.6 },
      { x: "Oct 27", talents: 2.2 },
      { x: "Oct 28", talents: 4.7 },
      { x: "Oct 29", talents: 5.5 },
      { x: "Oct 30", talents: 3.5 },
      { x: "Oct 31", talents: 2.1 },
      { x: "Nov 01", talents: 2.2 },
      { x: "Nov 02", talents: 1.4 },
      { x: "Nov 03", talents: 1.2 },
      { x: "Nov 04", talents: 1.9 },
      { x: "Nov 05", talents: 2.3 },
      { x: "Nov 06", talents: 2.1 },
      { x: "Nov 07", talents: 2.9 },
      { x: "Nov 08", talents: 2.5 },
      { x: "Nov 09", talents: 2.3 },
      { x: "Nov 10", talents: 2.8 },
    ],
  },
  3: {
    HIGHLIGHTS: [
      {
        from: 2,
        to: 4,
        color: palette.yellow.main,
      },
      {
        from: 11,
        to: 14,
        color: palette.yellow.main,
      },
    ],
    CHART_DATA: [
      { x: "Oct 20", talents: 1.5 },
      { x: "Oct 21", talents: 1.7 },
      { x: "Oct 22", talents: 1.5 },
      { x: "Oct 23", talents: 2.6 },
      { x: "Oct 24", talents: 1.3 },
      { x: "Oct 25", talents: 1.3 },
      { x: "Oct 26", talents: 1.6 },
      { x: "Oct 27", talents: 2.7 },
      { x: "Oct 28", talents: 3.7 },
      { x: "Oct 29", talents: 1.4 },
      { x: "Oct 30", talents: 2.4 },
      { x: "Oct 31", talents: 1.6 },
      { x: "Nov 01", talents: 2.2 },
      { x: "Nov 02", talents: 1.4 },
      { x: "Nov 03", talents: 1.8 },
      { x: "Nov 04", talents: 1.4 },
      { x: "Nov 05", talents: 1.9 },
      { x: "Nov 06", talents: 1.8 },
      { x: "Nov 07", talents: 1.6 },
      { x: "Nov 08", talents: 2.1 },
      { x: "Nov 09", talents: 2.7 },
      { x: "Nov 10", talents: 3.2 },
    ],
  },
};
