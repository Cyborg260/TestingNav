import { View, Text, SafeAreaView, StatusBar, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import Bottom from './Bottom';


const Data = [
  {
    image: require("../components/assets/elo1.png"),
    image1: require("../components/assets/scrollImage_TopImage2.png"),
    title: `Nexoluce Mens Sty...\nRs 12,49.00`,
    title1:`Nexoluce Mens Sty...\nRs 15,99.00`,

  },
  {
    image: require("../components/assets/elo1.png"),
    image1: require("../components/assets/scrollImage_TopImage2.png"),
    title: `Nexoluce Mens Sty...\nRs 12,49.00`,
    title1:`Nexoluce Mens Sty...\nRs 15,99.00`,

  },
  {
    image: require("../components/assets/elo1.png"),
    image1: require("../components/assets/scrollImage_TopImage2.png"),
    title: `Nexoluce Mens Sty...\nRs 12,49.00`,
    title1:`Nexoluce Mens Sty...\nRs 15,99.00`,

  },
  {
    image: require("../components/assets/elo1.png"),
    image1: require("../components/assets/scrollImage_TopImage2.png"),
    title: `Nexoluce Mens Sty...\nRs 12,49.00`,
    title1:`Nexoluce Mens Sty...\nRs 15,99.00`,

  },
  {
    image: require("../components/assets/elo1.png"),
    image1: require("../components/assets/scrollImage_TopImage2.png"),
    title: `Nexoluce Mens Sty...\nRs 12,49.00`,
    title1:`Nexoluce Mens Sty...\nRs 15,99.00`,

  },
  {
    image: require("../components/assets/elo1.png"),
    image1: require("../components/assets/scrollImage_TopImage2.png"),
    title: `Nexoluce Mens Sty...\nRs 12,49.00`,
    title1:`Nexoluce Mens Sty...\nRs 15,99.00`,

  },
  {
    image: require("../components/assets/elo1.png"),
    image1: require("../components/assets/scrollImage_TopImage2.png"),
    title: `Nexoluce Mens Sty...\nRs 12,49.00`,
    title1:`Nexoluce Mens Sty...\nRs 15,99.00`,

  },
  {
    image: require("../components/assets/elo1.png"),
    image1: require("../components/assets/scrollImage_TopImage2.png"),
    title: `Nexoluce Mens Sty...\nRs 12,49.00`,
    title1:`Nexoluce Mens Sty...\nRs 15,99.00`,

  },
  {
    image: require("../components/assets/elo1.png"),
    image1: require("../components/assets/scrollImage_TopImage2.png"),
    title: `Nexoluce Mens Sty...\nRs 12,49.00`,
    title1:`Nexoluce Mens Sty...\nRs 15,99.00`,

  },
  {
    image: require("../components/assets/elo1.png"),
    image1: require("../components/assets/scrollImage_TopImage2.png"),
    title: `Nexoluce Mens Sty...\nRs 12,49.00`,
    title1:`Nexoluce Mens Sty...\nRs 15,99.00`,

  },

]

const Item = ({ image, image1,title,title1 }) => (

  <View style={{
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    // backgroundColor: "red",
    padding:2,
    marginVertical:"2%",
    
  }}>
    <View style={{
      // backgroundColor:'blue',
      width:"49%",
      justifyContent:'center',
      alignItems:'center',
    }}>
    <Image
      style={{
        width: '98%',
        height: 280,
        
        
      }}
      source={image}
      />
      <Text style={{ fontSize: 18, color: 'black', fontWeight: '100',textAlign:"center" }}>
        {title}
      </Text>

      </View>
      <View style={{
      // backgroundColor:'blue',
      width:"49%",
      justifyContent:'center',
      alignItems:'center',
    }}>
    <Image
      style={{
        width: '98%',
        height: 280,
        resizeMode:"stretch",
        
      }}
      source={image1}
      />
       <Text style={{ fontSize: 18, color: 'black', fontWeight: '100',textAlign:'center' }}>
        {title1}
      </Text>
      </View>
      
  </View>

)

const SortScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <Item
      image={item.image}
      image1={item.image1}
      title={item.title}
      title1={item.title1}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <View style={styles.StatusBar}>
        <View style={{
          justifyContent: "space-between",
          flexDirection: 'row',
          alignItems: "center",
          // backgroundColor:"green",
          width: 340
        }}>

          <View style={styles.lefticon}>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => navigation.goBack("ELo")}
            >

              <Image
                style={{
                  width: 28,
                  height: 28,
                  marginVertical: 15,
                  tintColor: "black"
                }}
                source={require("../components/assets/icons8-less-than-30.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.text}>
            <Text style={{ fontSize: 24, fontWeight: "500", color: 'black' }}>
              New Arrivals
            </Text>
          </View>
        </View>
        <View style={{
          justifyContent: "space-between",
          flexDirection: 'row',
          alignItems: "center",
          // backgroundColor:'blue',
          width: 65,
        }}>

          <View style={styles.searchicon}>
            <Image
              style={{
                width: 28,
                height: 28,
                marginVertical: 15,
                tintColor: "black",
              }}
              source={require("../components/assets/icons8-search-50.png")}
            />
          </View>
          <View style={styles.bagicon}>
            <Image
              style={{
                width: 28,
                height: 28,
                marginVertical: 15,
                tintColor: "black"
              }}
              source={require("../components/assets/icons8-shopping-bag-50.png")}
            />
          </View>
        </View>
      </View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        />
        
       
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },
  StatusBar: {
    // backgroundColor:'red',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: "space-between",
    height: 50,
    marginHorizontal: "2%",
    marginRight: "4%"

  },
  lefticon: {
    // backgroundColor:"blue"
  },
  text: {
    //  backgroundColor:"red",
    marginRight: 70,

  },

  searchicon: {
    // backgroundColor:'yellow',


  },

  bagicon: {
    // backgroundColor:'green',
  }
})
export default SortScreen;