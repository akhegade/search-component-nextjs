import React from "react";
import HeaderStyles from "./header.module.css";
export default function Header() {
  return (
    <div className={HeaderStyles.header}>
      <h1 className={HeaderStyles.title}>Messages</h1>
    </div>
  );
}
