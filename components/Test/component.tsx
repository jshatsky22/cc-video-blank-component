import React from "react";
import { useSuperblocksContext } from "@superblocksteam/custom-components";
import { type Props, type EventTriggers } from "./types";

export default function Component({}: Props) {
  const {
    updateProperties,
    events: {
    },
  } = useSuperblocksContext<Props, EventTriggers>();

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#a7aebe",
      }}
    >
      <h1 style={{ color: "white" }}>{"<Insert Component Here>"}</h1>
    </div>
  );
}
