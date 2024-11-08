import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Card, IconButton, Text } from "react-native-paper";
import { FlashList } from "@shopify/flash-list";
import { CardActions } from "../home/cardActions";
import { UserInfo } from "../home/userInfo";
import { ProfileInfo } from "./profileInfo";

export interface IUserPostsProps {}

interface Iuser {
  id: number;
  content: string;
  image: string;
  title: string;
  subtitle: string;
  avatar: string;
}

export function UserPosts(props: IUserPostsProps) {
  const user: Iuser[] = [
    {
      id: 1,
      content:
        "FlashList does support LayoutAnimations but you need to call prepareForLayoutAnimationRender() before React Native's LayoutAnimation.configureNext. prepareForLayoutAnimationRender is an instance method, so you have to keep a reference to your FlashList instance via the ref prop:",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/President_Barack_Obama_%28cropped%29_4.jpg/640px-President_Barack_Obama_%28cropped%29_4.jpg",
      title: "Mark zuckerber",
      subtitle: "a few seconds ago",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/President_Barack_Obama_%28cropped%29_4.jpg/640px-President_Barack_Obama_%28cropped%29_4.jpg",
    },
    {
      id: 2,
      content:
        "FlashList does support LayoutAnimations but you need to call prepareForLayoutAnimationRender() before React Native's LayoutAnimation.configureNext. prepareForLayoutAnimationRender is an instance method, so you have to keep a reference to your FlashList instance via the ref prop:",
      image: "https://spie.org/images/Graphics/CE/CE-Calendar-Top-1000x600.jpg",
      title: "Kendar jenner",
      subtitle: "2 weeks ago",
      avatar:
        "https://hips.hearstapps.com/hmg-prod/images/Kendall-Jenner_GettyImages-477504950.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
    },
    {
      id: 3,
      content:
        "today's early morning execises really make feel a whole lot better",
      image:
        "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/06/1200/675/yoga-park.jpg?ve=1&tl=1",
      title: "Brad pitt",
      subtitle: "a few minutes ago",
      avatar:
        "data:image/jpeg;base64,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",
    },
  ];

  const renderItem = ({ item }: { item: Iuser }) => {
    return (
      <View style={styles.cardContainer}>
        <Card
          style={{
            shadowOffset: { width: 0, height: 0 },
          }}
        >
          <Card.Title
            title={<Text style={{ padding: 0, margin: 0 }}>{item.title}</Text>}
            titleStyle={{ position: "relative", top: 8 }}
            subtitleStyle={{ position: "relative", bottom: 3 }}
            subtitle={<Text style={{ color: "gray" }}>{item.subtitle}</Text>}
            left={(props) => (
              <Avatar.Image source={{ uri: item.avatar }} {...props} />
            )}
            right={(props) => (
              <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
            )}
          />
          <Card.Content>
            <View>{item.content}</View>
          </Card.Content>
          <Card.Cover
            style={{ marginTop: 7 }}
            source={{
              uri: item.image,
            }}
          />
          <Card.Actions>
            <CardActions />
          </Card.Actions>
        </Card>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        //showsHorizontalScrollIndicator
        //showsVerticalScrollIndicator
        contentContainerStyle={{}}
        ListHeaderComponent={<ProfileInfo />}
        scrollEnabled
        data={user}
        renderItem={renderItem}
        keyExtractor={(item) => item.id as any}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: { marginBottom: 15 },
  coverImage: {
    width: "100%",
    resizeMode: "contain",
    height: "100%",
    marginBottom: 0,
    marginTop: 7,
  },
});
