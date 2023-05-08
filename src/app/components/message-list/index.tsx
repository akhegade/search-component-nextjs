import React from "react";
import Message from "../message/index";

type MessagesPropType = {
  data: [];
};

export default function MessageList({data}:MessagesPropType) {
  return (
    <div>
        {data.map(user=>(
            <Message user={user}/>
        ))}
      
    </div>
  );
}
