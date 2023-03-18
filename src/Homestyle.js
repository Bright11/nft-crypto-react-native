import {StyleSheet, ImageBackground} from 'react-native';
const Homestyle = StyleSheet.create({
  backgroundimghome: {
    // backgroundColor: '#345CD1',
    flex: 1,
    resizeMode: 'cover',
  },
  topwalletview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  homehistorypress: {
    flexDirection: 'row',
    gap: 5,
  },
  historytext: {
    fontFamily: 'Roboto-Italic',
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
  },
  homeaccountbalanceview: {
    marginTop: 50,
    flexDirection: 'column',
    alignSelf: 'center',
    shadowColor: '#3E4271',
    alignContent: 'center',
    justifyContent: 'center',
    width: '60%',
    aspectRatio: 1 / 1,
    // backgroundColor: '#3E4271',
    shadowOpacity: 100.75,
    shadowRadius: 100.97,
    elevation: 10,
    borderRadius: 100,
    paddingVertical: 45,
    paddingHorizontal: 25,
    marginVertical: 10,
  },
  acountownnernametext: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Italic',
    fontSize: 15,
    fontWeight: '100',
    alignSelf: 'center',
  },
  acountownneramounttext: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Italic',
    fontSize: 30,
    fontWeight: '700',
    alignSelf: 'center',
    letterSpacing: 1,
  },
  viewshomeitem_holder: {
    backgroundColor: '#3E417E',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  iconsview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  iconspress: {
    padding: 20,
    backgroundColor: '#2F376E',
    borderRadius: 100,
  },

  cryptoholde: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  cryptoname: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Roboto-Italic.ttf',
    fontWeight: '100',
  },
  cryptonameholder: {
    flexDirection: 'column',
  },
  cryptoprice: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Roboto-Italic.ttf',
    fontWeight: '100',
  },
  nftview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  nftpress: {
    flexDirection: 'row',
    gap: 20,
  },
  nfttext: {
    color: 'white',
    fontFamily: 'Roboto-Italic.ttf',
    fontWeight: '100',
    fontSize: 20,
  },
});
export default Homestyle;
