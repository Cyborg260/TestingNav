import { View, Text, SafeAreaView, StatusBar, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import React from 'react'
import Swiper from 'react-native-swiper';
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottom from './Bottom';

const EloScreen = () => {
  const navigation = useNavigation();

  return (

    //StatusBar....

    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"

      />
      <View style={styles.StatusBar}>
        <View style={styles.Bothtext}>
          <View style={styles.statustext}>
            <Text style={{
              fontSize: 42,
              fontWeight: 'bold',
              color: 'black'
            }}>
              elo
            </Text>
          </View>
          <View style={styles.statustext1}>
            <Text style={{
              color: 'black',
              fontSize: 4
            }}>
              GENUINE QUALITY SAVINGS
            </Text>
          </View>
        </View>
        <View style={styles.statusimage}>
          <Image
            style={{
              width: 28,
              height: 28,
              marginVertical: 15,
              tintColor: "black"
            }}
            source={require("../components/assets/icons8-search-50.png")}
          />
        </View>
      </View>
      <View>
        <ScrollView style={styles.ScrollView}>
          <View style={{

            backgroundColor: "red"
          }}>
            <Image
              style={{
                width: 430,
                height: 550,
              }}
              source={require("../components/assets/top_image.png")}
            />
          </View>

          <View style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10
          }}>
            <Text style={{
              fontSize: 24,
              fontWeight: "700",
              color: 'black'
            }}>
              Categories
            </Text>
          </View>

          {/* ......//................1st Swiper..........//................. */}

          <Swiper
            height={200}
            activeDotColor="black"
            dotStyle={{ marginEnd: 10, }}

          >
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'blue',
              flexDirection: 'row',

            }}>

              <View
                style={{
                  // flexDirection:"row"
                  // backgroundColor: 'red',
                  padding: 8,
                  justifyContent: 'center',
                  alignItems: 'center'
                }} >


                <Image
                  style={{
                    height: 160,
                    width: 125,
                    borderRadius: 10,
                  }}
                  source={require("../components/assets/scrollImage_2.png")}
                />
                <Text style={{ fontSize: 14, fontWeight: "bold", color: 'black' }}>
                  New Arrivals
                </Text>
              </View>

              <View
                style={{
                  // flexDirection:"row"
                  padding: 8,
                  // backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center'
                }} >


                <Image
                  style={{
                    height: 160,
                    width: 125,
                    borderRadius: 10,

                  }}
                  source={require("../components/assets/scrollImage_2.png")}
                />
                <Text style={{ fontSize: 14, fontWeight: "bold", color: 'black' }}>
                  Men
                </Text>
              </View>

              <View
                style={{
                  // flexDirection:"row"
                  padding: 8,
                  // backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center'
                }} >


                <Image
                  style={{
                    height: 160,
                    width: 125,
                    borderRadius: 10,

                  }}
                  source={require("../components/assets/scrollImage_2.png")}
                />
                <Text style={{ fontSize: 14, fontWeight: "bold", color: 'black' }}>
                  Women
                </Text>
              </View>
            </View>

            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'blue',
              height: 200,
              flexDirection: 'row',


            }}>

              <View
                style={{
                  // flexDirection:"row"
                  // backgroundColor: 'red',
                  padding: 8,
                  justifyContent: 'center',
                  alignItems: 'center'
                }} >


                <Image
                  style={{
                    height: 160,
                    width: 125,
                    borderRadius: 10,
                  }}
                  source={require("../components/assets/scrollImage_2.png")}
                />
                <Text style={{ fontSize: 14, fontWeight: "bold", color: 'black' }}>
                  New Arrivals
                </Text>
              </View>

              <View
                style={{
                  // flexDirection:"row"
                  padding: 8,
                  // backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center'
                }} >


                <Image
                  style={{
                    height: 160,
                    width: 125,
                    borderRadius: 10,

                  }}
                  source={require("../components/assets/scrollImage_2.png")}
                />
                <Text style={{ fontSize: 14, fontWeight: "bold", color: 'black' }}>
                  Men
                </Text>
              </View>

              <View
                style={{
                  // flexDirection:"row"
                  padding: 8,
                  // backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center'
                }} >


                <Image
                  style={{
                    height: 160,
                    width: 125,
                    borderRadius: 10,

                  }}
                  source={require("../components/assets/scrollImage_2.png")}
                />
                <Text style={{ fontSize: 14, fontWeight: "bold", color: 'black' }}>
                  Women
                </Text>
              </View>
            </View>

            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'blue',
              height: 200,
              flexDirection: 'row',


            }}>

              <View
                style={{
                  // flexDirection:"row"
                  // backgroundColor: 'red',
                  padding: 8,
                  justifyContent: 'center',
                  alignItems: 'center'
                }} >


                <Image
                  style={{
                    height: 160,
                    width: 125,
                    borderRadius: 10,
                  }}
                  source={require("../components/assets/scrollImage_2.png")}
                />
                <Text style={{ fontSize: 14, fontWeight: "bold", color: 'black' }}>
                  New Arrivals
                </Text>

              </View>

              <View
                style={{
                  // flexDirection:"row"
                  padding: 8,
                  // backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center'
                }} >


                <Image
                  style={{
                    height: 160,
                    width: 125,
                    borderRadius: 10,

                  }}
                  source={require("../components/assets/scrollImage_2.png")}
                />
                <Text style={{ fontSize: 14, fontWeight: "bold", color: 'black' }}>
                  Men
                </Text>
              </View>

              <View
                style={{
                  // flexDirection:"row"
                  padding: 8,
                  // backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center'
                }} >


                <Image
                  style={{
                    height: 160,
                    width: 125,
                    borderRadius: 10,

                  }}
                  source={require("../components/assets/scrollImage_2.png")}
                />
                <Text style={{ fontSize: 14, fontWeight: "bold", color: 'black' }}>
                  Women
                </Text>
              </View>
            </View>



          </Swiper>


          {/* .........//..............2nd Swiper.................//......... */}

          <View style={{
            marginBottom: 20,
            // backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}>
            <Swiper
              height={200}
              activeDotColor="black"
              dotStyle={{ marginEnd: 8 }}
            >

              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 200,
                marginVertical: 10,

              }}>

                <Image
                  style={{
                    height: 180,
                    width: "100%",


                  }}

                  source={require("../components/assets/scrollImage_sales.png")}
                />

              </View>

              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 200,
                marginVertical: 10,

              }}>

                <Image
                  style={{
                    height: 180,
                    width: "100%",


                  }}

                  source={require("../components/assets/scrollImage_Men.png")}
                />

              </View>

              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 200,
                marginVertical: 10,
                flexDirection: 'row',

              }}>

                <Image
                  style={{
                    height: 180,
                    width: "50%",


                  }}

                  source={require("../components/assets/scrollImage_Tshirt.png")}
                />
                <Image
                  style={{
                    height: 180,
                    width: "50%",


                  }}

                  source={require("../components/assets/scrollImage_cap.png")}
                />

              </View>

            </Swiper>
          </View>
          <View
            style={{
              // marginBottom: 100,
              // backgroundColor: "red",
              justifyContent: "center",
              alignItems: 'center'
            }}
          >
            <Text style={{ fontSize: 20, color: "grey" }}>
              Special Deals
            </Text>
          </View>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                // backgroundColor:'red',
                marginVertical: 20,
                padding: 8,

              }}>
              <View style={{
                // backgroundColor:'yellow',
                flexDirection: "row",
              }}>

                <View style={{
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: 'center'

                }}>
                  <Image
                    style={{
                      height: 300,
                      width: 160
                    }}
                    source={require("../components/assets/scrollImage_1.png")}
                  />
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Hoodies Winte...
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Rs 99.00
                  </Text>
                </View>
                <View style={{
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: 'center'

                }}>
                  <Image
                    style={{
                      height: 300,
                      width: 160
                    }}
                    source={require("../components/assets/scrollImage_1.png")}
                  />
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Hoodies Winte...
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Rs 99.00
                  </Text>
                </View>
                <View style={{
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: 'center'

                }}>
                  <Image
                    style={{
                      height: 300,
                      width: 160
                    }}
                    source={require("../components/assets/scrollImage_1.png")}
                  />
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Hoodies Winte...
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Rs 99.00
                  </Text>
                </View>
                <View style={{
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: 'center'

                }}>
                  <Image
                    style={{
                      height: 300,
                      width: 160
                    }}
                    source={require("../components/assets/scrollImage_1.png")}
                  />
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Hoodies Winte...
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Rs 99.00
                  </Text>
                </View>

              </View>
            </ScrollView>
          </View>

          <View
            style={{
              // backgroundColor: "red",
              justifyContent: "center",
              alignItems: 'center'
            }}
          >
            <Text style={{ fontSize: 20, color: "grey" }}>
              Hottest Products
            </Text>
          </View>

          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                // backgroundColor:'red',
                padding: 8,
                paddingLeft: 150,


              }}>
              <View style={{
                // backgroundColor:'yellow',
                flexDirection: "row",
              }}>

                <View style={{
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: 'center'

                }}>
                  <Text style={{
                    color: "grey"
                  }}>
                    View More
                  </Text>
                  <Image
                    style={{
                      height: 350,
                      width: 250,
                    }}
                    source={require("../components/assets/scrollImage_playing.png")}
                  />
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Kidz Collecti...
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Rs 299.00
                  </Text>
                </View>
                <View style={{
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: 'center'

                }}>
                  <Image
                    style={{
                      height: 300,
                      width: 160
                    }}
                    source={require("../components/assets/scrollImage_1.png")}
                  />
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Polo Hood...
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Rs 599.00
                  </Text>
                </View>
                <View style={{
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: 'center'

                }}>
                  <Image
                    style={{
                      height: 300,
                      width: 160
                    }}
                    source={require("../components/assets/scrollImage_1.png")}
                  />
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Polo Hood...
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Rs 599.00
                  </Text>
                </View>
                <View style={{
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: 'center'

                }}>
                  <Image
                    style={{
                      height: 300,
                      width: 160
                    }}
                    source={require("../components/assets/scrollImage_1.png")}
                  />
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Polo Hood...
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Rs 599.00
                  </Text>
                </View>
                <View style={{
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: 'center'

                }}>
                  <Image
                    style={{
                      height: 300,
                      width: 160
                    }}
                    source={require("../components/assets/scrollImage_1.png")}
                  />
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Polo Hood...
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Rs 599.00
                  </Text>
                </View>

                <View style={{
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: 'center'

                }}>
                  <Image
                    style={{
                      height: 300,
                      width: 160
                    }}
                    source={require("../components/assets/scrollImage_1.png")}
                  />
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Polo Hood...
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>
                    Rs 599.00
                  </Text>
                </View>

              </View>

            </ScrollView>
          </View>
          <View style={{

            // backgroundColor: "red",
            marginVertical: 15,
          }}>

            <Image
              style={{
                width: "100%",
                height: 600,
                resizeMode:"stretch"
              }}
              source={require("../components/assets/scrollImage_TopImage2.png")}
            />
          </View>
          <View style={{
            marginVertical: 5,
            flexDirection: "row",
            padding: 2,

          }}>
            <Image
              style={{
                width: "48%",
                height: 280,
                borderRadius: 4

              }}
              source={require("../components/assets/elo1.png")}
            />
            <Image
              style={{
                width: "48%",
                height: 280,
                marginHorizontal: 15,
                borderRadius: 4
              }}
              source={require("../components/assets/elo2.png")}
            />
          </View>
          <View style={{
            // backgroundColor:'red',
            flexDirection: 'row',
            justifyContent: "space-between",
            marginHorizontal: 70,
            marginVertical: 5

          }}>
            <Text style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>
              PR Men
            </Text>
            <Text style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>
              PR Men
            </Text>
          </View>
          <View style={{
            marginVertical: 5,
            flexDirection: "row",
            padding: 2,

          }}>
            <Image
              style={{
                width: "48%",
                height: 280,
                borderRadius: 4

              }}
              source={require("../components/assets/elo3.png")}
            />
            <Image
              style={{
                width: "48%",
                height: 280,
                marginHorizontal: 15,
                borderRadius: 4
              }}
              source={require("../components/assets/elo4.png")}
            />
          </View>
          <View style={{
            // backgroundColor:'red',
            flexDirection: 'row',
            justifyContent: "space-between",
            marginHorizontal: 70

          }}>
            <Text style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>
              PR Men
            </Text>
            <Text style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>
              PR Men
            </Text>
          </View>
          <View style={{

            backgroundColor: "red",
            marginVertical: 15,
          }}>

            <Image
              style={{
                width: "100%",
                height: 600,
              }}
              source={require("../components/assets/elo5.png")}
            />
          </View>

          <View style={{
            justifyContent: "center",
            alignItems: 'center',


          }}>
            <Text style={{ borderBottomWidth: 0.5, borderColor: "grey", width: "100%", }} />
            <Text style={{ fontSize: 20, color: "grey", marginTop: 15, justifyContent: 'center', alignItems: "center", }}>
              New Arrivals
            </Text>
            <Text style={{ borderBottomWidth: 0.5, borderColor: "grey", width: "100%", }} />

          </View>
          <View style={{
            marginVertical: 10,
            flexDirection: "row",
            padding: 2,

          }}>
            <Image
              style={{
                width: "48%",
                height: 280,
                borderRadius: 4

              }}
              source={require("../components/assets/elo3.png")}
            />
            <Image
              style={{
                width: "48%",
                height: 280,
                marginHorizontal: 15,
                borderRadius: 4,
              }}
              source={require("../components/assets/elo4.png")}
            />
          </View>
          <View style={{
            // backgroundColor:'red',
            flexDirection: 'row',
            justifyContent: "space-between",
            marginHorizontal: 70,

          }}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>

              <Text style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>
                Men's Choi..
              </Text>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>
                RS 999.00
              </Text>
            </View>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>

              <Text style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>
                Men's Choi..
              </Text>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>
                RS 999.00
              </Text>
            </View>
          </View>
          <View style={{
            marginVertical: 5,
            flexDirection: "row",
            padding: 2,

          }}>
            <Image
              style={{
                width: "48%",
                height: 280,
                borderRadius: 4

              }}
              source={require("../components/assets/elo6.png")}
            />
            <Image
              style={{
                width: "48%",
                height: 280,
                marginHorizontal: 15,
                borderRadius: 4,
              }}
              source={require("../components/assets/elo7.png")}
            />
          </View>
          <View style={{
            // backgroundColor:'red',
            flexDirection: 'row',
            justifyContent: "space-between",
            marginHorizontal: 70,

          }}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>

              <Text style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>
                Men's Choi..
              </Text>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>
                RS 999.00
              </Text>
            </View>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>

              <Text style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>
                Men's Choi..
              </Text>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>
                RS 999.00
              </Text>
            </View>
          </View>
          <View style={{
            marginVertical: 5,
            flexDirection: "row",
            padding: 2,

          }}>
            <Image
              style={{
                width: "48%",
                height: 280,
                borderRadius: 4

              }}
              source={require("../components/assets/elo8.png")}
            />
            <Image
              style={{
                width: "48%",
                height: 280,
                marginHorizontal: 15,
                borderRadius: 4,
              }}
              source={require("../components/assets/elo9.png")}
            />
          </View>
          <View style={{
            // backgroundColor:'red',
            flexDirection: 'row',
            justifyContent: "space-between",
            marginHorizontal: 70,

          }}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',

            }}>

              <Text style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>
                Men's Choi..
              </Text>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>
                RS 999.00
              </Text>
            </View>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>

              <Text style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>
                Men's Choi..
              </Text>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '100' }}>
                RS 999.00
              </Text>
            </View>
          </View>
          <View style={{
            marginBottom: 80,
            marginHorizontal: 10,
            marginVertical: 10

          }}>
            <TouchableOpacity
              style={{
                borderRadius: 4,
                borderWidth: 0.5,
                borderColor: "grey",
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.20,
                shadowRadius: 1.41,

                elevation: 1.5,

              }}
              activeOpacity={1}
              onPress={() => navigation.navigate("Bottom")}
            >
              <Text style={{ fontSize: 18, color: "dodgerblue" }}>
                View More
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  StatusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,

  },
  Bothtext: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 150,
    height: 65,

  },
  statustext: {
    height: 48,

  },

  statustext1: {

  },
  statusimage: {
    width: 30,
    height: 50,
    marginHorizontal: -15
  },
  ScrollView: {
    // backgroundColor: 'grey',
    // marginHorizontal:20
  }
})
export default EloScreen;