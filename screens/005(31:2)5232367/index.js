import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_32_31}>
        <View style={styles.View_32_32}>
          <View style={styles.View_32_33} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cec8/6733/ac75ea3c7c8a89b949576291e4aa3361"
            }}
            style={styles.ImageBackground_32_34}
          />
          <View style={styles.View_32_35}>
            <Text style={styles.Text_32_35}>Ron Whilliams</Text>
          </View>
          <View style={styles.View_32_36}>
            <Text style={styles.Text_32_36}>
              I believe that with the lastest tweets from Elon and technological
              development, tesla stocks will to grow instantly.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e019/f9ca/bc9930f879dd551978b088a6b04f860e"
            }}
            style={styles.ImageBackground_32_37}
          />
          <View style={styles.View_32_38}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ce8/0c4f/67e7549a2041dc7682fc9c0973680cdd"
              }}
              style={styles.ImageBackground_32_39}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2672/dc1b/f9442f57d4c6a49962b32e2cb89b86d9"
            }}
            style={styles.ImageBackground_32_41}
          />
          <View style={styles.View_32_43}>
            <Text style={styles.Text_32_43}>TSLA</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0293/1552/1e30b1e18416ff13edc35163b2afed89"
            }}
            style={styles.ImageBackground_32_44}
          />
        </View>
        <View style={styles.View_32_46}>
          <Text style={styles.Text_32_46}>View Forecast</Text>
        </View>
      </View>
      <View style={styles.View_31_43}>
        <View style={styles.View_31_44}>
          <View style={styles.View_31_45}>
            <Text style={styles.Text_31_45}>Ron Whilliams</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b543/3240/5ca9ef2d07d88b7a599c6407e540ec59"
            }}
            style={styles.ImageBackground_31_46}
          />
        </View>
      </View>
      <View style={styles.View_31_49}>
        <View style={styles.View_31_50}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cf1/c191/f6e63f6e616d2e1bb8042115af3602fe"
            }}
            style={styles.ImageBackground_31_51}
          />
          <View style={styles.View_31_52}>
            <View source={{ uri: "null" }} style={styles.View_31_53} />
            <View style={styles.View_31_54}>
              <View style={styles.View_31_55}>
                <Text style={styles.Text_31_55}>Profile</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81bd/f41a/b8236743f0a9f50722883e7ef90e51a5"
              }}
              style={styles.ImageBackground_31_56}
            />
          </View>
          <View style={styles.View_31_58}>
            <View source={{ uri: "null" }} style={styles.View_31_59} />
            <View style={styles.View_31_60}>
              <View style={styles.View_31_61}>
                <Text style={styles.Text_31_61}>Watch List</Text>
              </View>
            </View>
            <View style={styles.View_31_62}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0801/4bc7/a18905b65a1a3bad612c4faba1262b8d"
                }}
                style={styles.ImageBackground_31_63}
              />
            </View>
          </View>
          <View style={styles.View_31_65}>
            <View source={{ uri: "null" }} style={styles.View_31_66} />
            <View style={styles.View_31_67}>
              <View style={styles.View_31_68}>
                <Text style={styles.Text_31_68}>Trending</Text>
              </View>
            </View>
            <View style={styles.View_31_69}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c93/c0b9/ae689a18e1e911d183536162159f9908"
                }}
                style={styles.ImageBackground_31_70}
              />
            </View>
          </View>
          <View style={styles.View_31_72}>
            <View source={{ uri: "null" }} style={styles.View_31_73} />
            <View style={styles.View_31_74}>
              <View style={styles.View_31_75}>
                <Text style={styles.Text_31_75}>Home</Text>
              </View>
            </View>
            <View style={styles.View_31_76}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5aa/749e/e02b8a47d872582eb1d6918d06473619"
                }}
                style={styles.ImageBackground_31_77}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_31_81}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6798/90ca/30073ebf38430554d0d6f1d5c500ec68"
          }}
          style={styles.ImageBackground_31_82}
        />
        <View style={styles.View_31_84}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
            }}
            style={styles.ImageBackground_31_85}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_31_89}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_31_93}
          />
          <View style={styles.View_31_98}>
            <View style={styles.View_31_99}>
              <Text style={styles.Text_31_99}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5239/204f/18192016321416ba25766faf6938072b"
        }}
        style={styles.ImageBackground_32_0}
      />
      <View style={styles.View_32_8}>
        <View style={styles.View_32_4} />
        <View style={styles.View_32_1}>
          <Text style={styles.Text_32_1}>10</Text>
        </View>
      </View>
      <View style={styles.View_32_2}>
        <Text style={styles.Text_32_2}>Forecasting Rank</Text>
      </View>
      <View style={styles.View_32_7}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9751/ac41/1353e8ff413ca65046fa9ec43af64512"
          }}
          style={styles.ImageBackground_32_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b29c/9a86/93214c06d0267e413ff385c771f4f0e8"
          }}
          style={styles.ImageBackground_32_6}
        />
      </View>
      <View style={styles.View_32_15}>
        <View style={styles.View_32_16}>
          <View style={styles.View_32_17} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cec8/6733/ac75ea3c7c8a89b949576291e4aa3361"
            }}
            style={styles.ImageBackground_32_18}
          />
          <View style={styles.View_32_19}>
            <Text style={styles.Text_32_19}>Ron Whilliams</Text>
          </View>
          <View style={styles.View_32_20}>
            <Text style={styles.Text_32_20}>
              I believe that with the lastest tweets from Elon and technological
              development, tesla stocks will to grow instantly.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e019/f9ca/bc9930f879dd551978b088a6b04f860e"
            }}
            style={styles.ImageBackground_32_21}
          />
          <View style={styles.View_32_22}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ce8/0c4f/67e7549a2041dc7682fc9c0973680cdd"
              }}
              style={styles.ImageBackground_32_23}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2672/dc1b/f9442f57d4c6a49962b32e2cb89b86d9"
            }}
            style={styles.ImageBackground_32_25}
          />
          <View style={styles.View_32_27}>
            <Text style={styles.Text_32_27}>TSLA</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0293/1552/1e30b1e18416ff13edc35163b2afed89"
            }}
            style={styles.ImageBackground_32_28}
          />
        </View>
        <View style={styles.View_32_30}>
          <Text style={styles.Text_32_30}>View Forecast</Text>
        </View>
      </View>
      <View style={styles.View_33_18}>
        <View style={styles.View_33_27}>
          <View style={styles.View_33_8}>
            <Text style={styles.Text_33_8}>Followers</Text>
          </View>
          <View style={styles.View_33_19}>
            <Text style={styles.Text_33_19}>12k</Text>
          </View>
          <View style={styles.View_33_21}>
            <Text style={styles.Text_33_21}>123</Text>
          </View>
          <View style={styles.View_33_26}>
            <View style={styles.View_33_20}>
              <Text style={styles.Text_33_20}>12</Text>
            </View>
            <View style={styles.View_33_9}>
              <Text style={styles.Text_33_9}>Following</Text>
            </View>
          </View>
          <View style={styles.View_33_10}>
            <Text style={styles.Text_33_10}>Posts</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_33_28}>
        <View style={styles.View_32_13}>
          <Text style={styles.Text_32_13}>
            Stock trader with 10+ years of commercial trading experience &amp;
            crypto markers
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9573/7c1f/112fd43337d30c7539c871539430fa4e"
          }}
          style={styles.ImageBackground_32_3}
        />
        <View style={styles.View_33_11}>
          <View style={styles.View_33_12} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b683/de54/e96f8ed5a51493446535cd4fdd47ca63"
            }}
            style={styles.ImageBackground_33_13}
          />
          <View style={styles.View_33_14}>
            <View style={styles.View_33_15}>
              <Text style={styles.Text_33_15}>Forecasts</Text>
            </View>
            <View style={styles.View_33_16}>
              <Text style={styles.Text_33_16}>Votes</Text>
            </View>
            <View style={styles.View_33_17}>
              <Text style={styles.Text_33_17}>Activity</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_33_29} />
      <View style={styles.View_33_30}>
        <Text style={styles.Text_33_30}>Follow</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_32_31: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("24.453551912568305%"),
    minHeight: hp("24.453551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("92.75956284153006%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_32_32: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_32_33: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 35, 39, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_32_34: {
    width: wp("5.334879557291667%"),
    height: hp("1.640136385224556%"),
    top: hp("3.41530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.66666666666667%")
  },
  View_32_35: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("2.185792349726782%")
  },
  Text_32_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_36: {
    width: wp("82.66666666666667%"),
    minWidth: wp("82.66666666666667%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("7.6502732240437155%")
  },
  Text_32_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_32_37: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.185792349726782%")
  },
  View_32_38: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("19.125683060109296%")
  },
  ImageBackground_32_39: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_32_41: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("19.125683060109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333334%")
  },
  View_32_43: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("2.185792349726782%")
  },
  Text_32_43: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  ImageBackground_32_44: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("19.125683060109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.2%")
  },
  View_32_46: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4%"),
    top: hp("19.535519125683066%")
  },
  Text_32_46: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_43: {
    width: wp("64.26666666666667%"),
    minWidth: wp("64.26666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("7.855191256830602%")
  },
  View_31_44: {
    width: wp("64.26666666666667%"),
    minWidth: wp("64.26666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_31_45: {
    width: wp("35.46666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.8%")
  },
  Text_31_45: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.0800000011920929,
    textTransform: "none"
  },
  ImageBackground_31_46: {
    width: wp("4.266655731201172%"),
    height: hp("2.185792349726776%"),
    top: hp("1.024590163934426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_31_49: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.59016393442623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_50: {
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_31_51: {
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_31_52: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333332%")
  },
  View_31_53: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_31_54: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_55: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.2666666666666515%"),
    top: hp("0%")
  },
  Text_31_55: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  ImageBackground_31_56: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333346%"),
    top: hp("0.8196721311475414%")
  },
  View_31_58: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%")
  },
  View_31_59: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_31_60: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_61: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666666%"),
    top: hp("0%")
  },
  Text_31_61: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  View_31_62: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_31_63: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  View_31_65: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%")
  },
  View_31_66: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_31_67: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_68: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666666%"),
    top: hp("0%")
  },
  Text_31_68: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  View_31_69: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_31_70: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  View_31_72: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_31_73: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_31_74: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_75: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666667%"),
    top: hp("0%")
  },
  Text_31_75: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  View_31_76: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_31_77: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%")
  },
  View_31_81: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_31_82: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("106.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_31_84: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_31_85: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.3679410173593323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_31_89: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675783084389943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_31_93: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.41347974766799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_31_98: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_99: {
    width: wp("14.399999999999999%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_31_99: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000003576278683,
    textTransform: "none"
  },
  ImageBackground_32_0: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.06666666666666%"),
    top: hp("13.387978142076504%")
  },
  View_32_8: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.266666666666666%"),
    top: hp("24.863387978142075%")
  },
  View_32_4: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(120, 121, 241, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_32_1: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0.13661202185792476%")
  },
  Text_32_1: {
    color: "rgba(22, 23, 28, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_2: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("29.098360655737704%")
  },
  Text_32_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_7: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666666%"),
    top: hp("23.224043715846996%")
  },
  ImageBackground_32_5: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_32_6: {
    width: wp("3.2%"),
    height: hp("1.2295081967213115%"),
    top: hp("1.0928961748633874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%")
  },
  View_32_15: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("24.453551912568305%"),
    minHeight: hp("24.453551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("66.39344262295081%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_32_16: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_32_17: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 35, 39, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  ImageBackground_32_18: {
    width: wp("5.334879557291667%"),
    height: hp("1.640136385224556%"),
    top: hp("3.415300546448094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.66666666666667%")
  },
  View_32_19: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("2.185792349726782%")
  },
  Text_32_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_20: {
    width: wp("82.66666666666667%"),
    minWidth: wp("82.66666666666667%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("7.65027322404373%")
  },
  Text_32_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_32_21: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.185792349726782%")
  },
  View_32_22: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("19.125683060109296%")
  },
  ImageBackground_32_23: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_32_25: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("19.125683060109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333334%")
  },
  View_32_27: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("2.185792349726782%")
  },
  Text_32_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  ImageBackground_32_28: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("19.125683060109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.2%")
  },
  View_32_30: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4%"),
    top: hp("19.535519125683066%")
  },
  Text_32_30: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_18: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("34.56284153005464%")
  },
  View_33_27: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_33_8: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218577%")
  },
  Text_33_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_19: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("0%")
  },
  Text_33_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_21: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.400000000000006%"),
    top: hp("0%")
  },
  Text_33_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_26: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.133333333333336%"),
    top: hp("0%")
  },
  View_33_20: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("0%")
  },
  Text_33_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_9: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218577%")
  },
  Text_33_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_10: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.266666666666666%"),
    top: hp("3.8251366120218577%")
  },
  Text_33_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_28: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.549180327868852%"),
    minHeight: hp("14.549180327868852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.59016393442623%")
  },
  View_32_13: {
    width: wp("82.66666666666667%"),
    minWidth: wp("82.66666666666667%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("0%")
  },
  Text_32_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_32_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.000004478625753923711%"),
    minHeight: hp("0.000004478625753923711%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759565%")
  },
  View_33_11: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.62568306010929%"),
    minHeight: hp("6.62568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759565%")
  },
  View_33_12: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(22, 23, 28, 1)"
  },
  ImageBackground_33_13: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%"),
    top: hp("6.625683060109289%")
  },
  View_33_14: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333333%"),
    top: hp("1.092896174863391%")
  },
  View_33_15: {
    width: wp("18.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.733333333333334%")
  },
  Text_33_15: {
    color: "rgba(67, 70, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_33_16: {
    width: wp("11.200000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.266666666666666%")
  },
  Text_33_16: {
    color: "rgba(67, 70, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_33_17: {
    width: wp("14.666666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_33_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_33_29: {
    width: wp("60.53333333333333%"),
    minWidth: wp("60.53333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("43.30601092896175%"),
    backgroundColor: "rgba(34, 35, 39, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_33_30: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666666%"),
    top: hp("43.5792349726776%")
  },
  Text_33_30: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
