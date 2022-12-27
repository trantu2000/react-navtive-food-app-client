import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import Separator from "../../components/Separator";
import IonIcons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Images from "../../constants/Images";
import { Display } from "../../utils";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ToggleButton from "../../components/ToggleButton";
import { useDispatch } from "react-redux";
import { StorageService } from "../../services";
import { GeneralAction } from "../../Redux/Actions";
import UserService from "../../services/UserService";

const ProfileScreen = ({ navigation }) => {

  const [user, setUser] = useState(null);
 



  useEffect(() => {
    UserService.getUserData().then((response) => {
      if (response?.status) {
        setUser(response?.data);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.backgroundCurvedContainer} />
      <View style={styles.headerContainer}>
        <IonIcons
          name="chevron-back-outline"
          size={23}
          color={Colors.DEFAULT_BLACK}
          onPress={() => navigation.goBack()}
        />

        <Text style={styles.saveText}>Lưu</Text>
      </View>
      <View style={styles.profileHeaderContainer}>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profileImage} source={Images.AVATAR} />
        </View>
        <View style={styles.menuIconCamera}>
          <MaterialCommunityIcons
            name="camera"
            size={18}
            color={Colors.DEFAULT_GREEN}
          />
        </View>
      </View>

      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.sectionContainer} activeOpacity={0.8}>
          <View style={styles.sectionTextContainer}>
            <IonIcons
              name="person-outline"
              size={17}
              color={Colors.DEFAULT_GREEN}
            />
            <Text style={styles.sectionText}>{user?.data?.username}</Text>
          </View>
          <MaterialCommunityIcons
            name="pencil"
            size={18}
            color={Colors.DEFAULT_GREEN}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer} activeOpacity={0.8}>
          <View style={styles.sectionTextContainer}>
            <Feather name="lock" color={Colors.DEFAULT_GREEN} size={17} />
            <Text style={styles.sectionText}>Mật khẩu</Text>
          </View>
          <Feather
            name="chevron-right"
            color={Colors.DEFAULT_GREEN}
            size={18}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer} activeOpacity={0.8}>
          <View style={styles.sectionTextContainer}>
            <IonIcons
              name="mail-outline"
              size={17}
              color={Colors.DEFAULT_GREEN}
            />
            <Text style={styles.sectionText}>{user?.data?.email}</Text>
          </View>
          <Feather
            name="chevron-right"
            color={Colors.DEFAULT_GREEN}
            size={18}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer} activeOpacity={0.8}>
          <View style={styles.sectionTextContainer}>
          <Feather
            name="phone"
            color={Colors.DEFAULT_GREEN}
            size={18}
          />
            <Text style={styles.sectionText}>0862966071</Text>
          </View>
          <Feather
            name="chevron-right"
            color={Colors.DEFAULT_GREEN}
            size={18}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer} activeOpacity={0.8}>
          <View style={styles.sectionTextContainer}>
          <IonIcons
              name="location-outline"
              size={18}
              color={Colors.DEFAULT_GREEN}
            />
            <Text style={styles.sectionText}>412 Nguyễn Văn Công,P.3,Q.Gò Vấp</Text>
          </View>
          <Feather
            name="chevron-right"
            color={Colors.DEFAULT_GREEN}
            size={18}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer} activeOpacity={0.8}>
          <View style={styles.sectionTextContainer}>
            
          <Feather
            name="user"
            color={Colors.DEFAULT_GREEN}
            size={18}
          />
            <Text style={styles.sectionText}>Nam</Text>
          </View>
          <Feather
            name="chevron-right"
            color={Colors.DEFAULT_GREEN}
            size={18}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_WHITE,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 25,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 20 * 1.4,
    color: Colors.DEFAULT_WHITE,
  },

  profileHeaderContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  profileImageContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius:100,
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
    elevation: 3,
  },
  profileImage: {
    width: Display.setWidth(28),
    height: Display.setWidth(28),
    borderRadius: 100,
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  nameText: {
    fontSize: 15,
    // fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_WHITE,
  },

  menuContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  menuItem: {
    flex: 1,
    alignItems: "center",
  },
  menuIconCamera: {
    backgroundColor: Colors.LIGHT_GREEN,
    height: Display.setWidth(8),
    width: Display.setWidth(8),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    marginLeft: -17,
  },
  menuIcon: {
    backgroundColor: Colors.LIGHT_GREEN,
    height: Display.setWidth(8),
    width: Display.setWidth(8),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
  },
  menuText: {
    fontSize: 12,
    // fontFamily: Fonts.POPPINS_SEMI_BOLD,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_BLACK,
    textAlign: "center",
    marginTop: 5,
  },
  mainContainer: {
    marginHorizontal: 20,
    marginTop: 50,
    backgroundColor: Colors.DEFAULT_WHITE,
    elevation: 3,
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingBottom: 20,
  },
  sectionHeaderText: {
    fontSize: 14,
    // fontFamily: Fonts.POPPINS_SEMI_BOLD,
    lineHeight: 14 * 1.4,
    color: Colors.DEFAULT_BLACK,
    marginTop: 25,
  },
  sectionTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    paddingVertical:10
  },
  sectionText: {
    fontSize: 17,
    // fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_BLACK,
    marginLeft: 10,
  },

  saveText: {
    fontSize: 17,
    color: Colors.DEFAULT_YELLOW,
    fontWeight: "700",
  },
});
