import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, StatusBar, FlatList} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import BookmarkCard from '../../components/BookmarkCard';
import Separator from '../../components/Separator';
import Colors from '../../constants/Colors';
import { Display } from '../../utils';
import { useDispatch, useSelector } from "react-redux";
import BookmarkAction from '../../Redux/Actions/BookmarkAction';
import { BookmarkService } from '../../services';

const ListItemSeparator = () => (
  <View
    style={{
      height: 0.8,
      backgroundColor: Colors.DEFAULT_GREY,
      width: '100%',
      marginVertical: 10,
    }}
  />
);

const BookmarkScreen = ({navigation}) => {
  const dispatch = useDispatch();
  // const bookmarks = useSelector(state => state?.bookmarkState?.bookmarks);
  const [bookmarks, setBookmarks] = useState("")

  useEffect(() => {
    dispatch(BookmarkAction.getBookmarks())
    const unsubscribe = navigation.addListener("focus", () => {
     BookmarkService.getBookmarks().then((response) => {
        if (response?.status) {
          setBookmarks(response?.data);
          // console.log(response?.data);
        }
      });
    });
    return unsubscribe;
  }, []);
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
        <Text style={styles.headerTitle}>Nhà hàng yêu thích</Text>
      </View>
      <FlatList
        style={styles.bookmarkList}
        data={bookmarks}
        keyExtractor={item => item?.restaurantId}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Separator height={10} />}
        ListFooterComponent={() => <Separator height={10} />}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        renderItem={({item}) => (
          <BookmarkCard
            {...item?.restaurant}
            navigate={restaurantId =>
              navigation.navigate('RestaurantScreen', {restaurantId})
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop:20
  },
  headerTitle: {
    fontSize: 20,
    fontWeight:'600',
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  bookmarkList: {
    marginHorizontal: 20,
  },
});

export default BookmarkScreen;
