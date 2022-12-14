import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import Colors from "../../constants/Colors";
import General from "../../constants/General";
import { WelcomeCard } from "../../components";
import { Display } from "../../utils";
import Separator from "../../components/Separator";
import { StorageService } from "../../services";
import { GeneralAction } from "../../Redux/Actions";
// import Fonts from "../../constants/Fonts";
import { useDispatch } from "react-redux";

const pageStyle = (isActive) =>
  isActive
    ? styles.page
    : { ...styles.page, backgroundColor: Colors.DEFAULT_GREY };

const Pagination = ({ index }) => {
  return (
    <View style={styles.pageContainer}>
      {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
        i === index ? (
          <View style={pageStyle(true)} key={i} />
        ) : (
          <View style={pageStyle(false)} key={i} />
        )
      )}
    </View>
  );
};

const WelcomeScreen = ({ navigation }) => {
  const [welcomeListIndex, setWelcomeListIndex] = useState(0);
  const welcomeList = useRef();
  const onViewRef = useRef(({ changed }) => {
    setWelcomeListIndex(changed[0].index);
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
  const pageScrollNext = () => {
    welcomeList.current.scrollToIndex({
      index: welcomeListIndex < 2 ? welcomeListIndex + 1 : 0,
    });
  };

  const dispatch = useDispatch();

  const navigate = () => {
    StorageService.setFirstTimeUse().then(() => {
      dispatch(GeneralAction.setIsFirstTimeUse());
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <Separator height={Display.setHeight(8)} />
      <View style={styles.welcomeListContainer}>
        <FlatList
          ref={welcomeList}
          data={General.WELCOME_CONTENTS}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          renderItem={({ item }) => <WelcomeCard {...item} />}
        />
      </View>
      <Separator height={Display.setHeight(8)} />
      <Pagination index={welcomeListIndex} />
      <Separator height={Display.setHeight(8)} />

      {welcomeListIndex === 2 ? (
        <TouchableOpacity
          style={styles.gettingStartedButton}
          activeOpacity={0.8}
          onPress={() => navigate()}
        >
          <Text style={styles.gettingStartedButtonText}>B???t ?????u</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonSKIP}
            // activeOpacity={0.8}
            onPress={() => welcomeList.current.scrollToEnd()}
          >
            <Text style={styles.buttonText}>B??? qua</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonNEXT}
            // activeOpacity={0.8}
            onPress={() => pageScrollNext()}
          >
            <Text style={styles.buttonText}>K??? ti???p</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  welcomeListContainer: {
    height: Display.setHeight(60),
  },
  pageContainer: {
    flexDirection: "row",
  },
  page: {
    height: 8,
    width: 15,
    backgroundColor: Colors.DEFAULT_GREEN,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    with: Display.setWidth(90),
    alignItems: "center",
  },
  buttonSKIP: {
    backgroundColor: Colors.LIGHT_GREEN,
    paddingVertical: 20,
    paddingHorizontal: 11,
    borderRadius: 32,
    marginRight: 110,
  },
  buttonNEXT: {
    backgroundColor: Colors.LIGHT_GREEN,
    paddingVertical: 20,
    paddingHorizontal: 11,
    borderRadius: 32,
    marginLeft: 110,
  },
  buttonText: {
    fontSize: 16,
    fontWeight:'600',
    lineHeight: 16 * 1.4,
  },
  gettingStartedButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  gettingStartedButtonText: {
    fontSize: 20,
    color: Colors.DEFAULT_WHITE,
    lineHeight: 20 * 1.4,
    fontWeight:'600'
  },
});
