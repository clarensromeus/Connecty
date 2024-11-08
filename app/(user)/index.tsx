import * as React from "react";
import { View } from "react-native";
import { Noti } from "../components/notifications/noti";

export interface IAppProps {}

export default function NotificationScreen(props: IAppProps) {
  return <Noti />;
}
