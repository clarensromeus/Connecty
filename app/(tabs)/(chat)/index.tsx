import { PeopleToChat } from "@/app/components/chats/peopleToChat";
import * as React from "react";

export interface IMessageProps {}

export default function MessageScreen(props: IMessageProps) {
  return <PeopleToChat />;
}
