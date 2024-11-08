import * as React from "react";
import { View } from "react-native";
import { useLocalSearchParams, useRouter, useNavigation } from "expo-router";
import { GiftedChat } from "react-native-gifted-chat";

interface User {
  _id: string | number;
  name?: string;
}

export interface IMessage {
  _id: string | number;
  text: string;
  createdAt: Date | number;
  user: User;
  image?: string;
}

export default function UserIdScreen() {
  const router = useRouter();

  const params = useLocalSearchParams();

  const [messages, setMessages] = React.useState<IMessage[]>([]);

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          //avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = React.useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}
