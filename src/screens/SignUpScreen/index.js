import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import Separator from "../../components/Separator";
import IonIcons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { Display } from "../../utils";
import Images from "../../constants/Images";
import LottieView from "lottie-react-native";
import AuthenticationService from "../../services/AuthenticationService";

const SignInScreen = ({ navigation }) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [emailState, setEmailState] = useState("default");
  const [usernameState, setUsernameState] = useState("default");

  const register = () => {
    let user = {
      username,
      email,
      password,
    };
    setIsLoading(true);
    AuthenticationService.register(user).then((response) => {
      setIsLoading(false);
      // console.log(response);
      if (!response?.status) {
        setErrorMessage(response?.message);
      }
    });
  };

  const checkUserExist = async (type, value) => {
    if (value?.length > 0) {
      AuthenticationService.checkUserExist(type, value).then((response) => {
        if (response?.status) {
          type === "email" && emailErrorMessage
            ? setEmailErrorMessage("")
            : null;
          type === "username" && usernameErrorMessage
            ? setUsernameErrorMessage("")
            : null;
          type === "email" ? setEmailState("valid") : null;
          type === "username" ? setUsernameState("valid") : null;
        } else {
          type === "email" ? setEmailErrorMessage(response?.message) : null;
          type === "username"
            ? setUsernameErrorMessage(response?.message)
            : null;
          type === "email" ? setEmailState("invalid") : null;
          type === "username" ? setUsernameState("invalid") : null;
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <IonIcons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Đăng ký</Text>
      </View>
      <Text style={styles.title}>Tạo tài khoản,</Text>
      <Text style={styles.content}>
        Nhập email của bạn, chọn tên người dùng và mật khẩu
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="user"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Nhập họ và tên"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
            onChangeText={(text) => setUsername(text)}
            onEndEditing={({ nativeEvent: { text } }) =>
              checkUserExist("username", text)
            }
          />
        </View>
      </View>
      <Text style={styles.errorMessage}>{usernameErrorMessage}</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="mail"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Nhập email"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
            onChangeText={(text) => setEmail(text)}
            onEndEditing={({nativeEvent: {text}}) =>
              checkUserExist('email', text)
            }
          />
        </View>
      </View>
      <Text style={styles.errorMessage}>{emailErrorMessage}</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="lock"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
          />
          <TextInput
            secureTextEntry={isPasswordShow ? false : true}
            placeholder="Nhập password"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
            onChangeText={(text) => setPassword(text)}
          />
          <Feather
            name={isPasswordShow ? "eye" : "eye-off"}
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
            onPress={() => setIsPasswordShow(!isPasswordShow)}
          />
        </View>
      </View>
      <Text style={styles.errorMessage}>{errorMessage}</Text>

      <TouchableOpacity style={styles.signInButton} onPress={() => register()}>
        {isLoading ? (
          <LottieView source={Images.LOADING} autoPlay />
        ) : (
          <Text style={styles.signInButtonText}>Tạo tài khoản</Text>
        )}
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.accountText}>Bạn đã có tài khoản?</Text>
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate("SignInScreen")}
        >
          Đăng nhập
        </Text>
      </View>
      <Text style={styles.orText}>-hoặc-</Text>
      <TouchableOpacity
        style={styles.phoneButton}
        onPress={() => navigation.navigate("RegisterPhoneScreen")}
      >
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signInButtonLogoContainer}>
            <Image source={Images.PHONE} style={styles.signInButtonLogo} />
          </View>

          <Text style={styles.socialSignInButtonText}>
            Đăng nhập với Số điện thoại
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signInButtonLogoContainer}>
            <Image source={Images.FACEBOOK} style={styles.signInButtonLogo} />
          </View>
          <Text style={styles.socialSignInButtonText}>
            Đăng nhập với Facebook
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.socialButtonsContainer}>
          <View style={styles.signInButtonLogoContainer}>
            <Image source={Images.GOOGLE} style={styles.signInButtonLogo} />
          </View>

          <Text style={styles.socialSignInButtonText}>
            Đăng nhập với Google
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 20,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 20,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: "center",
    marginTop: 10,
  },
  inputSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: "center",
    padding: 0,
    height: Display.setHeight(6),
    color: Colors.DEFAULT_BLACK,
    flex: 1,
  },
  forgotPasswordContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberMeText: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_GREY,
    // fontFamily: Fonts.POPPINS_MEDIUM,
  },
  forgotPasswordText: {
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Colors.DEFAULT_GREEN,
    // fontFamily: Fonts.POPPINS_BOLD,
  },
  signInButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signInButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
    // fontFamily: Fonts.POPPINS_MEDIUM,
  },
  signUpContainer: {
    marginHorizontal: 20,
    justifyContent: "center",
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  accountText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_BLACK,
    // fontFamily: Fonts.POPPINS_MEDIUM,
  },
  signupText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Colors.DEFAULT_GREEN,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 5,
  },
  orText: {
    fontSize: 15,
    lineHeight: 15 * 1.4,
    color: Colors.DEFAULT_BLACK,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 5,
    alignSelf: "center",
    marginBottom: 10,
  },
  facebookButton: {
    backgroundColor: Colors.FABEBOOK_BLUE,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  phoneButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  googleButton: {
    backgroundColor: Colors.GOOGLE_BLUE,
    paddingVertical: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  socialSignInButtonText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    // fontFamily: Fonts.POPPINS_MEDIUM,
  },
  signInButtonLogoContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    padding: 2,
    borderRadius: 3,
    position: "absolute",
    left: 25,
  },
  signInButtonLogo: {
    height: 18,
    width: 18,
  },
  errorMessage: {
    fontSize: 12,
    lineHeight: 10 * 1.4,
    color: Colors.DEFAULT_RED,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    marginHorizontal: 20,
    marginVertical: 3,
  },
});
