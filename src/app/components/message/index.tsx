import React from "react";
import MessageStyles from "./message.module.css";
import Image from "next/image";
import Avatar from "../../assets/images/MaskGroup2.jpg";

type MessagePropType = {
    user:any
}

export default function Message(props:MessagePropType) {
  return (
    <div className={MessageStyles.messageContainer}>
      <Image src={Avatar} alt="your Name" className="avatar" />
      <div className={MessageStyles.nameContainer}>
        <h3 className={MessageStyles.displayName}>{props.user.name}</h3>
        <span className={MessageStyles.displayNumber}>{props.user.number}</span>
      </div>
    </div>
  );
}
