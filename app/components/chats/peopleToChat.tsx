import * as React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import {
  Avatar,
  Button,
  List,
  Text,
  Divider,
  MD3Colors,
  Badge,
} from "react-native-paper";
import { FlashList } from "@shopify/flash-list";
import { useRouter } from "expo-router";

export interface IAppProps {}
interface Iuser {
  id: number;
  firstname: string;
  lastname: string;
  image: string;
  timeSent: string;
  chat: string;
  blueCheck: boolean;
  nofm?: number;
  online?: boolean;
}

export function PeopleToChat(props: IAppProps) {
  const router = useRouter();

  const users: Iuser[] = [
    {
      id: 1,
      firstname: "Eminem",
      lastname: "shady",
      chat: "best, and no contradiction",
      image:
        "https://www.billboard.com/wp-content/uploads/2024/07/eminem-hwof-2020-billboard-1548.jpg?w=942&h=623&crop=1",
      timeSent: ".4mo",
      blueCheck: false,
      nofm: 2,
    },
    {
      id: 2,
      firstname: "Romeus",
      lastname: "clarens",
      chat: "good bro, i got you",
      image: "https://static.toiimg.com/photo/80482428.cms?imgsize=99038",
      timeSent: ".1h",
      blueCheck: false,
      online: true,
    },
    {
      id: 3,
      firstname: "Benjamin",
      lastname: "leonard",
      chat: "one love, here we go",
      image: "https://cdn.mos.cms.futurecdn.net/3E6XZEAtuGD2yCDM7UhyXL.jpg",
      timeSent: ".40s",
      blueCheck: false,
    },
    {
      id: 4,
      firstname: "Rhianna",
      lastname: "petty",
      chat: "shine, as much as you can",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4wMadbEFEKtjqtgPmagocMpQ56tGZCLCbof4A-5IiLtSb6pLB_1Z9Fq_gcyvca2v0Fw&usqp=CAU",
      timeSent: ".2w",
      blueCheck: true,
      nofm: 1,
      online: true,
    },
    {
      id: 5,
      firstname: "Melinda",
      lastname: "gates",
      chat: "be a donor is much more awesome",
      image:
        "https://image.cnbcfm.com/api/v1/image/106918921-1627574399713-gettyimages-1233756097-AA_01072021_395158.jpg?v=1627574418&w=929&h=523&vtcrop=y",
      timeSent: ".2y",
      blueCheck: true,
      nofm: 1,
    },
    {
      id: 6,
      firstname: "Eminem",
      lastname: "shady",
      chat: "best, and no contradiction",
      image:
        "https://www.billboard.com/wp-content/uploads/2024/07/eminem-hwof-2020-billboard-1548.jpg?w=942&h=623&crop=1",
      timeSent: ".4mo",
      blueCheck: false,
    },
    {
      id: 7,
      firstname: "Rhianna",
      lastname: "petty",
      chat: "shine, as much as you can",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4wMadbEFEKtjqtgPmagocMpQ56tGZCLCbof4A-5IiLtSb6pLB_1Z9Fq_gcyvca2v0Fw&usqp=CAU",
      timeSent: ".2w",
      blueCheck: true,
    },
  ];

  const renderItem = ({ item }: { item: Iuser }) => {
    return (
      <View>
        <List.Section style={{ paddingHorizontal: 8 }}>
          <Pressable
            onPress={() =>
              router.push({ pathname: "/[id]", params: { id: item.id } })
            }
          >
            <List.Item
              description={<Text>{item.chat}</Text>}
              title={
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold" }}>
                    {item.firstname} {item.lastname.charAt(0)}.
                  </Text>
                  <Text style={{ color: "gray" }}>
                    @{item.firstname.toLowerCase()}engineer
                  </Text>
                </View>
              }
              right={(props) => (
                <View style={{ position: "relative", left: 21, top: 9 }}>
                  <View style={{ gap: 5 }}>
                    <Text style={{ color: "#4527a0" }}>{item.timeSent}</Text>
                    {item.nofm && item.nofm > 0 && (
                      <Badge style={{ backgroundColor: "#f44336" }}>3</Badge>
                    )}
                  </View>
                </View>
              )}
              left={() => (
                <View>
                  <Avatar.Image
                    size={48}
                    source={{
                      uri: item.image,
                    }}
                  />
                  {item.online && (
                    <Badge
                      size={10}
                      visible={true}
                      style={styles.badge}
                    ></Badge>
                  )}
                </View>
              )}
            />
          </Pressable>
        </List.Section>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlashList
        data={users}
        renderItem={renderItem}
        keyExtractor={(u) => u.id as any}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#e0e0e0",
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  titleSection: {
    fontWeight: "bold",
    fontSize: 27,
  },
  badge: {
    position: "absolute",
    top: 36,
    left: 34,
    backgroundColor: "#388e3c",
    fontWeight: "bold",
  },
});
