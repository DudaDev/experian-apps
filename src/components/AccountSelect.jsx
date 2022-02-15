import React from "react";
import { AccountSelect } from "@toptal/picasso";
import Picasso from "@toptal/picasso-provider";

const accounts = [
  {
    id: "1",
    name: "Phil Leif",
    position: "Account Owner at Stowaway Cosmetics",
  },
  {
    id: "2",
    name: "Phil Leif",
    position: "Company Representative at Marketing Works",
  },
  {
    id: "3",
    name: "Phil Leif",
    position: "Talent",
    avatar: "https://i.ibb.co/cYtx5PP/jacqueline-with-flowers-1954-square.jpg",
  },
];

export default function AccountSelectComponent({ onSelect }) {
  return (
    <Picasso>
      <AccountSelect accounts={accounts} onSelect={onSelect} />
    </Picasso>
  );
}
