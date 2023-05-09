import React from "react";
import Message from "../message/index";
import MessageListStyles from "./message-list.module.css";

type MessagesPropType = {
  data: [];
};

export default function MessageList({data}: MessagesPropType) {
  return (
    <div className={MessageListStyles.messsageList}>
      {data.map((user:any) => (
        <Message key={user.id} user={user} />
      ))}
    </div>
  );
}
