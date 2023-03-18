import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Homestyle from './Homestyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import crypto from './data';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={Homestyle.backgroundimghome}
        source={require('./image/background.webp')}>
        <View style={Homestyle.topwalletview}>
          <Pressable style={Homestyle.homehistorypress}>
            <FontAwesome name="recycle" size={24} color="white" />
            {/* <Text style={Homestyle.historytext}>Wallet</Text> */}
          </Pressable>
          <Pressable style={Homestyle.homehistorypress}>
            <FontAwesome name="history" size={24} color="white" />
            {/* <Text style={Homestyle.historytext}>History</Text> */}
          </Pressable>
          <Pressable style={Homestyle.homehistorypress}>
            <FontAwesome5 name="low-vision" size={24} color="white" />
            {/* <Text style={Homestyle.historytext}>History</Text> */}
          </Pressable>
          <Pressable style={Homestyle.homehistorypress}>
            <Ionicons
              name="notifications-off-outline"
              size={24}
              color="white"
            />
            {/* <Text style={Homestyle.historytext}>Notification</Text> */}
          </Pressable>
        </View>
        <View style={Homestyle.viewshomeitem_holder}>
          <LinearGradient
            colors={['#FE5A00', '#3E4271', '#82C200']}
            style={Homestyle.homeaccountbalanceview}>
            <Text style={Homestyle.acountownnernametext}>
              Bright C Web Developer
            </Text>
            <Text style={Homestyle.acountownneramounttext}>$25,789.50</Text>
          </LinearGradient>
          <View style={Homestyle.iconsview}>
            <Pressable style={Homestyle.iconspress}>
              <MaterialCommunityIcons
                name="card-multiple-outline"
                size={24}
                color="white"
              />
            </Pressable>
            <Pressable style={Homestyle.iconspress}>
              <Fontisto name="arrow-swap" size={24} color="white" />
            </Pressable>
            <Pressable style={Homestyle.iconspress}>
              <AntDesign name="pluscircle" size={24} color="white" />
            </Pressable>
          </View>
        </View>
        <View style={Homestyle.nftview}>
          <Pressable style={Homestyle.nftpress}>
            <Text style={Homestyle.nfttext}>Asset</Text>
            <Text style={Homestyle.nfttext}>NFTs</Text>
          </Pressable>
          <Pressable style={Homestyle.nftpress}>
            <FontAwesome5 name="photo-video" size={24} color="white" />
            <AntDesign name="pluscircle" size={24} color="white" />
          </Pressable>
        </View>
        <FlatList
          style={{backgroundColor: '#0D0D2B'}}
          data={crypto}
          renderItem={({item}) => (
            <View style={Homestyle.cryptoholde}>
              <View style={Homestyle.cryptoholde}>
                <Image style={Homestyle.image} source={item.image} />
                <Pressable style={Homestyle.cryptonameholder}>
                  <Text style={Homestyle.cryptoname}>{item.name}</Text>
                  <Text style={Homestyle.cryptoprice}>{item.Price}</Text>
                </Pressable>
              </View>
              <Text style={Homestyle.cryptoprice}>{item.Market}</Text>
            </View>
          )}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
