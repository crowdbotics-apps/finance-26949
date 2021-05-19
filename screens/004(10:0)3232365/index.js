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
      <View style={styles.View_10_186}>
        <View style={styles.View_10_187} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cec8/6733/ac75ea3c7c8a89b949576291e4aa3361"
          }}
          style={styles.ImageBackground_10_188}
        />
        <View style={styles.View_10_189}>
          <Text style={styles.Text_10_189}>CITI Bank</Text>
        </View>
        <View style={styles.View_10_190}>
          <Text style={styles.Text_10_190}>
            There will be major stock depression in the next few days due to the
            pandemic restrictions.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2ba/659a/9520e3e7802c737046d2169a813fa83a"
          }}
          style={styles.ImageBackground_10_191}
        />
        <View style={styles.View_10_192}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ce8/0c4f/67e7549a2041dc7682fc9c0973680cdd"
            }}
            style={styles.ImageBackground_10_193}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2672/dc1b/f9442f57d4c6a49962b32e2cb89b86d9"
          }}
          style={styles.ImageBackground_10_195}
        />
        <View style={styles.View_10_197}>
          <Text style={styles.Text_10_197}>TSLA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0293/1552/1e30b1e18416ff13edc35163b2afed89"
          }}
          style={styles.ImageBackground_10_198}
        />
      </View>
      <View style={styles.View_10_18}>
        <View style={styles.View_10_19}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cf1/c191/f6e63f6e616d2e1bb8042115af3602fe"
            }}
            style={styles.ImageBackground_10_20}
          />
          <View style={styles.View_10_21}>
            <View source={{ uri: "null" }} style={styles.View_10_22} />
            <View style={styles.View_10_23}>
              <View style={styles.View_10_24}>
                <Text style={styles.Text_10_24}>Profile</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81bd/f41a/b8236743f0a9f50722883e7ef90e51a5"
              }}
              style={styles.ImageBackground_10_25}
            />
          </View>
          <View style={styles.View_10_27}>
            <View source={{ uri: "null" }} style={styles.View_10_28} />
            <View style={styles.View_10_29}>
              <View style={styles.View_10_30}>
                <Text style={styles.Text_10_30}>Watch List</Text>
              </View>
            </View>
            <View style={styles.View_10_31}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0801/4bc7/a18905b65a1a3bad612c4faba1262b8d"
                }}
                style={styles.ImageBackground_10_32}
              />
            </View>
          </View>
          <View style={styles.View_10_34}>
            <View source={{ uri: "null" }} style={styles.View_10_35} />
            <View style={styles.View_10_36}>
              <View style={styles.View_10_37}>
                <Text style={styles.Text_10_37}>Trending</Text>
              </View>
            </View>
            <View style={styles.View_10_38}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c93/c0b9/ae689a18e1e911d183536162159f9908"
                }}
                style={styles.ImageBackground_10_39}
              />
            </View>
          </View>
          <View style={styles.View_10_41}>
            <View source={{ uri: "null" }} style={styles.View_10_42} />
            <View style={styles.View_10_43}>
              <View style={styles.View_10_44}>
                <Text style={styles.Text_10_44}>Home</Text>
              </View>
            </View>
            <View style={styles.View_10_45}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5aa/749e/e02b8a47d872582eb1d6918d06473619"
                }}
                style={styles.ImageBackground_10_46}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_10_74}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6798/90ca/30073ebf38430554d0d6f1d5c500ec68"
          }}
          style={styles.ImageBackground_10_75}
        />
        <View style={styles.View_10_77}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
            }}
            style={styles.ImageBackground_10_78}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_10_82}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_10_86}
          />
          <View style={styles.View_10_91}>
            <View style={styles.View_10_92}>
              <Text style={styles.Text_10_92}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_10_126}>
        <Text style={styles.Text_10_126}>Recently Viewed</Text>
      </View>
      <View style={styles.View_10_131}>
        <Text style={styles.Text_10_131}>Activity</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d31/fdd7/9ffbc89e0e397b5856c2cca70a3071dc"
        }}
        style={styles.ImageBackground_10_127}
      />
      <View style={styles.View_10_129} />
      <View style={styles.View_10_130}>
        <Text style={styles.Text_10_130}>CREATE A POST</Text>
      </View>
      <View style={styles.View_10_201}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9573/7c1f/112fd43337d30c7539c871539430fa4e"
          }}
          style={styles.ImageBackground_10_132}
        />
        <View style={styles.View_10_135}>
          <View style={styles.View_10_152}>
            <View style={styles.View_10_148}>
              <Text style={styles.Text_10_148}>30</Text>
            </View>
            <View style={styles.View_10_149}>
              <Text style={styles.Text_10_149}>70</Text>
            </View>
          </View>
          <View style={styles.View_10_153}>
            <View style={styles.View_10_154}>
              <Text style={styles.Text_10_154}>30</Text>
            </View>
            <View style={styles.View_10_155}>
              <Text style={styles.Text_10_155}>70</Text>
            </View>
          </View>
          <View style={styles.View_10_156}>
            <View style={styles.View_10_150}>
              <Text style={styles.Text_10_150}>30</Text>
            </View>
            <View style={styles.View_10_151}>
              <Text style={styles.Text_10_151}>70</Text>
            </View>
          </View>
          <View style={styles.View_10_157}>
            <View style={styles.View_10_158}>
              <Text style={styles.Text_10_158}>70</Text>
            </View>
            <View style={styles.View_10_159}>
              <Text style={styles.Text_10_159}>30</Text>
            </View>
          </View>
          <View style={styles.View_10_163}>
            <View style={styles.View_10_164}>
              <Text style={styles.Text_10_164}>30</Text>
            </View>
            <View style={styles.View_10_165}>
              <Text style={styles.Text_10_165}>50</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2030/3dfb/bbfb2da4bdb2bc76d498c4693ae6c287"
            }}
            style={styles.ImageBackground_10_133}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ba3/e3b0/7411cccc5a85e0d063f08cec1b754b08"
          }}
          style={styles.ImageBackground_10_136}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ba3/e3b0/7411cccc5a85e0d063f08cec1b754b08"
          }}
          style={styles.ImageBackground_10_142}
        />
        <View style={styles.View_10_145}>
          <View style={styles.View_10_146}>
            <Text style={styles.Text_10_146}>TSLA</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ba3/e3b0/7411cccc5a85e0d063f08cec1b754b08"
            }}
            style={styles.ImageBackground_10_147}
          />
        </View>
        <View style={styles.View_10_139}>
          <View style={styles.View_10_200}>
            <View style={styles.View_10_134}>
              <Text style={styles.Text_10_134}>TSLA</Text>
            </View>
            <View style={styles.View_10_137}>
              <Text style={styles.Text_10_137}>SPDR</Text>
            </View>
            <View style={styles.View_10_143}>
              <Text style={styles.Text_10_143}>UKR</Text>
            </View>
            <View style={styles.View_10_140}>
              <Text style={styles.Text_10_140}>GLD</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2030/3dfb/bbfb2da4bdb2bc76d498c4693ae6c287"
            }}
            style={styles.ImageBackground_10_141}
          />
        </View>
      </View>
      <View style={styles.View_10_166}>
        <View style={styles.View_10_185}>
          <View style={styles.View_10_167} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cec8/6733/ac75ea3c7c8a89b949576291e4aa3361"
            }}
            style={styles.ImageBackground_10_168}
          />
          <View style={styles.View_10_169}>
            <Text style={styles.Text_10_169}>Ron Whilliams</Text>
          </View>
          <View style={styles.View_10_170}>
            <Text style={styles.Text_10_170}>
              I believe that with the lastest tweets from Elon and technological
              development, tesla stocks will to grow instantly.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e019/f9ca/bc9930f879dd551978b088a6b04f860e"
            }}
            style={styles.ImageBackground_10_171}
          />
          <View style={styles.View_10_172}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ce8/0c4f/67e7549a2041dc7682fc9c0973680cdd"
              }}
              style={styles.ImageBackground_10_176}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2672/dc1b/f9442f57d4c6a49962b32e2cb89b86d9"
            }}
            style={styles.ImageBackground_10_179}
          />
          <View style={styles.View_10_178}>
            <Text style={styles.Text_10_178}>TSLA</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0293/1552/1e30b1e18416ff13edc35163b2afed89"
            }}
            style={styles.ImageBackground_10_183}
          />
        </View>
        <View style={styles.View_30_2}>
          <Text style={styles.Text_30_2}>View Forecast</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8151/af2f/22639823d28f5503430b5f7016ff9bda"
        }}
        style={styles.ImageBackground_10_212}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9745/34e1/b27e88253becfefc3b9da460eaf025af"
        }}
        style={styles.ImageBackground_32_53}
      />
      <View style={styles.View_26_5}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37b1/e3b8/204e99ee991a784e40c133de498f7f46"
          }}
          style={styles.ImageBackground_26_2}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f6e/a1ee/113d7111bb105b345430d2d949fd2a45"
          }}
          style={styles.ImageBackground_26_3}
        />
      </View>
      <View style={styles.View_32_52}>
        <Text style={styles.Text_32_52}>SocialTrade</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10_186: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("74.59016393442623%")
  },
  View_10_187: {
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
  ImageBackground_10_188: {
    width: wp("5.334879557291667%"),
    height: hp("1.640136385224556%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53333333333333%")
  },
  View_10_189: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("2.1857923497267677%")
  },
  Text_10_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_190: {
    width: wp("82.66666666666667%"),
    minWidth: wp("82.66666666666667%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("9.289617486338798%")
  },
  Text_10_190: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_191: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("2.1857923497267677%")
  },
  View_10_192: {
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
  ImageBackground_10_193: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_195: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("19.125683060109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333334%")
  },
  View_10_197: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666666%"),
    top: hp("1.2295081967213122%")
  },
  Text_10_197: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  ImageBackground_10_198: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("19.125683060109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.2%")
  },
  View_10_18: {
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
  View_10_19: {
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_20: {
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_21: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333332%")
  },
  View_10_22: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_23: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_24: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.2666666666666515%"),
    top: hp("0%")
  },
  Text_10_24: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  ImageBackground_10_25: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333346%"),
    top: hp("0.8196721311475414%")
  },
  View_10_27: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%")
  },
  View_10_28: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_29: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_30: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666666%"),
    top: hp("0%")
  },
  Text_10_30: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  View_10_31: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_32: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  View_10_34: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%")
  },
  View_10_35: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_36: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_37: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666666%"),
    top: hp("0%")
  },
  Text_10_37: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  View_10_38: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_39: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  View_10_41: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_42: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_43: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_44: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666667%"),
    top: hp("0%")
  },
  Text_10_44: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  View_10_45: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10_46: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%")
  },
  View_10_74: {
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
  ImageBackground_10_75: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("106.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_77: {
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
  ImageBackground_10_78: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.3679410173593323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_10_82: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675783084389943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_10_86: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.41347974766799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_10_91: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_92: {
    width: wp("14.399999999999999%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_10_92: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000003576278683,
    textTransform: "none"
  },
  View_10_126: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("18.0327868852459%")
  },
  Text_10_126: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_131: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("42.89617486338798%")
  },
  Text_10_131: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_127: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%")
  },
  View_10_129: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.475409836065573%"),
    backgroundColor: "rgba(34, 35, 39, 1)"
  },
  View_10_130: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("11.612021857923498%")
  },
  Text_10_130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.05600000083446503,
    textTransform: "none"
  },
  View_10_201: {
    width: wp("109.33333333333333%"),
    minWidth: wp("109.33333333333333%"),
    height: hp("15.573770491803279%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.043715846994534%")
  },
  ImageBackground_10_132: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.573770491803277%")
  },
  View_10_135: {
    width: wp("103.46666666666667%"),
    minWidth: wp("103.46666666666667%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("4.098360655737704%")
  },
  View_10_152: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666654%"),
    top: hp("6.693989071038253%")
  },
  View_10_148: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_148: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  View_10_149: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333335%"),
    top: hp("0%")
  },
  Text_10_149: {
    color: "rgba(239, 93, 168, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  View_10_153: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.73333333333333%"),
    top: hp("6.693989071038253%")
  },
  View_10_154: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_154: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  View_10_155: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("0%")
  },
  Text_10_155: {
    color: "rgba(239, 93, 168, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  View_10_156: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("6.693989071038253%")
  },
  View_10_150: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_150: {
    color: "rgba(239, 93, 168, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  View_10_151: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333336%"),
    top: hp("0%")
  },
  Text_10_151: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  View_10_157: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.66666666666667%"),
    top: hp("6.693989071038253%")
  },
  View_10_158: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("0%")
  },
  Text_10_158: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  View_10_159: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_159: {
    color: "rgba(239, 93, 168, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  View_10_163: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.33333333333334%"),
    top: hp("6.693989071038253%")
  },
  View_10_164: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("0%")
  },
  Text_10_164: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  View_10_165: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_165: {
    color: "rgba(239, 93, 168, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.2000000000000002,
    textTransform: "none"
  },
  ImageBackground_10_133: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10_136: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26666666666667%"),
    top: hp("4.098360655737704%")
  },
  ImageBackground_10_142: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%"),
    top: hp("4.098360655737704%")
  },
  View_10_145: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97.06666666666666%"),
    top: hp("0.8196721311475414%")
  },
  View_10_146: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("6.693989071038253%")
  },
  Text_10_146: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.4000000000000001,
    textTransform: "none"
  },
  ImageBackground_10_147: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_139: {
    width: wp("77.33333333333333%"),
    minWidth: wp("77.33333333333333%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("0%")
  },
  View_10_200: {
    width: wp("77.33333333333333%"),
    minWidth: wp("77.33333333333333%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_134: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_10_134: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.4000000000000001,
    textTransform: "none"
  },
  View_10_137: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333336%"),
    top: hp("0%")
  },
  Text_10_137: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.4000000000000001,
    textTransform: "none"
  },
  View_10_143: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.33333333333333%"),
    top: hp("0%")
  },
  Text_10_143: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.4000000000000001,
    textTransform: "none"
  },
  View_10_140: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.66666666666667%"),
    top: hp("0%")
  },
  Text_10_140: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 1.4000000000000001,
    textTransform: "none"
  },
  ImageBackground_10_141: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    height: hp("4.508196721311475%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.26666666666667%"),
    top: hp("4.098360655737704%")
  },
  View_10_166: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("24.453551912568305%"),
    minHeight: hp("24.453551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("47.950819672131146%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10_185: {
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
  View_10_167: {
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
  ImageBackground_10_168: {
    width: wp("5.334879557291667%"),
    height: hp("1.640136385224556%"),
    top: hp("2.4590163934426172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53333333333333%")
  },
  View_10_169: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.26666666666667%"),
    top: hp("2.185792349726775%")
  },
  Text_10_169: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_170: {
    width: wp("82.66666666666667%"),
    minWidth: wp("82.66666666666667%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.6502732240437155%")
  },
  Text_10_170: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_171: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726775%")
  },
  View_10_172: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("19.125683060109296%")
  },
  ImageBackground_10_176: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10_179: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("19.125683060109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333334%")
  },
  View_10_178: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666667%"),
    top: hp("1.2295081967213122%")
  },
  Text_10_178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  ImageBackground_10_183: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("19.125683060109296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.2%")
  },
  View_30_2: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.400000000000006%"),
    top: hp("19.535519125683052%")
  },
  Text_30_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10_212: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666666%")
  },
  ImageBackground_32_53: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.73333333333333%")
  },
  View_26_5: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.333333333333336%"),
    top: hp("77.59562841530054%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_26_2: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_26_3: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_32_52: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("6.420765027322404%")
  },
  Text_32_52: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
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
