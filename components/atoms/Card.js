import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

let cardWidth = Dimensions.get("window").width - 50;
let cardHeight = Math.round(Dimensions.get("window").height / 3);
let col2Width = Math.round(cardWidth / 4 + 20);

let imageWidth = Math.round(cardWidth * 0.4);
let ImageHeight = Math.round(cardHeight * 0.6);

const Card = ({
  backgroundColor,
  img,
  money,
  title,
  date,
  subTitle,
  heightPercent,
}) => {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor,
          height:
            heightPercent !== undefined
              ? heightPercent * cardHeight
              : cardHeight,
        },
      ]}
    >
      <View style={styles.subcard}>
        <View style={styles.col1}>
          <Text style={[styles.text, styles.t1, { flex: 2 }]}>{title}</Text>
          <Text style={[styles.text, styles.t2, { flex: 2 }]}>{subTitle}</Text>
          <Text style={[styles.text, styles.t2, { flex: 1 }]}>{date}</Text>
        </View>
        <View style={styles.col2}>
          <Image source={img} style={[styles.img]} />
          <Text style={[styles.text, styles.t1]}>{money}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    width: cardWidth,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  subcard: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
  },
  img: {
    width: imageWidth,
    height: ImageHeight,
    resizeMode: "stretch",
  },
  col1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  col2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    color: "#FDB44B",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    maxWidth: col2Width,
  },
  t1: {
    fontSize: 25,
    fontWeight: "900",
  },
  t2: {
    fontSize: 20,
    fontWeight: "700",
  },
});
