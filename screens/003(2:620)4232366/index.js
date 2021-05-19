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
      <View style={styles.View_2_874}>
        <View style={styles.View_2_862}>
          <View style={styles.View_2_863} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cec8/6733/ac75ea3c7c8a89b949576291e4aa3361"
            }}
            style={styles.ImageBackground_2_864}
          />
          <View style={styles.View_2_865}>
            <Text style={styles.Text_2_865}>Ron Whilliams</Text>
          </View>
          <View style={styles.View_2_866}>
            <Text style={styles.Text_2_866}>
              I believe that with the lastest tweets from Elon and technological
              development, tesla stocks will to grow instantly.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e019/f9ca/bc9930f879dd551978b088a6b04f860e"
            }}
            style={styles.ImageBackground_2_867}
          />
          <View style={styles.View_2_868}>
            <View style={styles.View_2_869}>
              <Text style={styles.Text_2_869}>Match</Text>
            </View>
            <View style={styles.View_2_870}>
              <Text style={styles.Text_2_870}>View</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa92/0c31/68c96455a26a680b15dea1489f80507d"
              }}
              style={styles.ImageBackground_2_871}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ce8/0c4f/67e7549a2041dc7682fc9c0973680cdd"
              }}
              style={styles.ImageBackground_2_872}
            />
          </View>
        </View>
        <View style={styles.View_2_763} />
        <View style={styles.View_2_764} />
        <View style={styles.View_2_784}>
          <View style={styles.View_2_782} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cec8/6733/ac75ea3c7c8a89b949576291e4aa3361"
            }}
            style={styles.ImageBackground_2_788}
          />
          <View style={styles.View_2_785}>
            <Text style={styles.Text_2_785}>Ron Whilliams</Text>
          </View>
          <View style={styles.View_2_787}>
            <Text style={styles.Text_2_787}>
              I believe that with the lastest tweets from Elon and technological
              development, tesla stocks will to grow instantly.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e019/f9ca/bc9930f879dd551978b088a6b04f860e"
            }}
            style={styles.ImageBackground_2_786}
          />
          <View style={styles.View_2_861}>
            <View style={styles.View_2_790}>
              <Text style={styles.Text_2_790}>Match</Text>
            </View>
            <View style={styles.View_2_791}>
              <Text style={styles.Text_2_791}>View forecast</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa92/0c31/68c96455a26a680b15dea1489f80507d"
              }}
              style={styles.ImageBackground_2_789}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ce8/0c4f/67e7549a2041dc7682fc9c0973680cdd"
              }}
              style={styles.ImageBackground_2_792}
            />
          </View>
        </View>
        <View style={styles.View_2_818}>
          <View style={styles.View_2_794}>
            <Text style={styles.Text_2_794}>Bulls</Text>
          </View>
          <View style={styles.View_2_798}>
            <View style={styles.View_2_799}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ec1/8a5d/d65a9c5ecc9146050fb62861577b7b10"
                }}
                style={styles.ImageBackground_2_800}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_2_855}>
          <View style={styles.View_2_856}>
            <View style={styles.View_2_795}>
              <Text style={styles.Text_2_795}>Bears</Text>
            </View>
            <View style={styles.View_2_837}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8789/faf6/6ad337d746156722e997147e4a09ac0c"
                }}
                style={styles.ImageBackground_2_838}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_632}>
        <View style={styles.View_2_633}>
          <View style={styles.View_2_634}>
            <Text style={styles.Text_2_634}>RETAIL TRADER TESLA </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b543/3240/5ca9ef2d07d88b7a599c6407e540ec59"
            }}
            style={styles.ImageBackground_2_635}
          />
        </View>
      </View>
      <View style={styles.View_2_638}>
        <View style={styles.View_2_639}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cf1/c191/f6e63f6e616d2e1bb8042115af3602fe"
            }}
            style={styles.ImageBackground_2_640}
          />
          <View style={styles.View_2_641}>
            <View source={{ uri: "null" }} style={styles.View_2_642} />
            <View style={styles.View_2_643}>
              <View style={styles.View_2_644}>
                <Text style={styles.Text_2_644}>Profile</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81bd/f41a/b8236743f0a9f50722883e7ef90e51a5"
              }}
              style={styles.ImageBackground_2_645}
            />
          </View>
          <View style={styles.View_2_647}>
            <View source={{ uri: "null" }} style={styles.View_2_648} />
            <View style={styles.View_2_649}>
              <View style={styles.View_2_650}>
                <Text style={styles.Text_2_650}>Watch List</Text>
              </View>
            </View>
            <View style={styles.View_2_651}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0801/4bc7/a18905b65a1a3bad612c4faba1262b8d"
                }}
                style={styles.ImageBackground_2_652}
              />
            </View>
          </View>
          <View style={styles.View_2_654}>
            <View source={{ uri: "null" }} style={styles.View_2_655} />
            <View style={styles.View_2_656}>
              <View style={styles.View_2_657}>
                <Text style={styles.Text_2_657}>Trending</Text>
              </View>
            </View>
            <View style={styles.View_2_658}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c93/c0b9/ae689a18e1e911d183536162159f9908"
                }}
                style={styles.ImageBackground_2_659}
              />
            </View>
          </View>
          <View style={styles.View_2_661}>
            <View source={{ uri: "null" }} style={styles.View_2_662} />
            <View style={styles.View_2_663}>
              <View style={styles.View_2_664}>
                <Text style={styles.Text_2_664}>Home</Text>
              </View>
            </View>
            <View style={styles.View_2_665}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5aa/749e/e02b8a47d872582eb1d6918d06473619"
                }}
                style={styles.ImageBackground_2_666}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_694}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6798/90ca/30073ebf38430554d0d6f1d5c500ec68"
          }}
          style={styles.ImageBackground_2_695}
        />
        <View style={styles.View_2_697}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
            }}
            style={styles.ImageBackground_2_698}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_2_702}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_2_706}
          />
          <View style={styles.View_2_711}>
            <View style={styles.View_2_712}>
              <Text style={styles.Text_2_712}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efc4/aa64/5d1e86d38eeedbf07bd5dd9b6927d0c0"
        }}
        style={styles.ImageBackground_2_860}
      />
      <View style={styles.View_2_778}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1726/ab5f/696281afce1226b62dc72c4767015388"
          }}
          style={styles.ImageBackground_2_766}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ada6/11fe/3642803de7b56a3f3537998f9fcca4ae"
          }}
          style={styles.ImageBackground_2_767}
        />
        <View style={styles.View_2_773}>
          <View style={styles.View_2_777}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cec8/6733/ac75ea3c7c8a89b949576291e4aa3361"
              }}
              style={styles.ImageBackground_2_772}
            />
            <View style={styles.View_2_770}>
              <Text style={styles.Text_2_770}>70%</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_776}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ca4/0a28/e4b8873634e8ffddbfae9856c691a4e7"
            }}
            style={styles.ImageBackground_2_774}
          />
          <View style={styles.View_2_771}>
            <Text style={styles.Text_2_771}>30%</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_779}>
        <Text style={styles.Text_2_779}>LONG</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2_874: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("58.879781420765035%"),
    minHeight: hp("58.879781420765035%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.31693989071038%")
  },
  View_2_862: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("24.453551912568305%"),
    minHeight: hp("24.453551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("34.42622950819672%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_863: {
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
  ImageBackground_2_864: {
    width: wp("5.334879557291667%"),
    height: hp("1.640136385224556%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53333333333333%")
  },
  View_2_865: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("1.639344262295083%")
  },
  Text_2_865: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_866: {
    width: wp("82.66666666666667%"),
    minWidth: wp("82.66666666666667%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("7.103825136612016%")
  },
  Text_2_866: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_867: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.639344262295083%")
  },
  View_2_868: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.032786885245912%")
  },
  View_2_869: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.639344262295083%")
  },
  Text_2_869: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_870: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.133333333333333%"),
    top: hp("1.639344262295083%")
  },
  Text_2_870: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_871: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_872: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.8%")
  },
  View_2_763: {
    width: wp("50.13333333333333%"),
    minWidth: wp("50.13333333333333%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 35, 39, 1)"
  },
  View_2_764: {
    width: wp("49.86666666666667%"),
    minWidth: wp("49.86666666666667%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(34, 35, 39, 1)"
  },
  View_2_784: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("24.453551912568305%"),
    minHeight: hp("24.453551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("8.879781420765028%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_782: {
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
  ImageBackground_2_788: {
    width: wp("5.334879557291667%"),
    height: hp("1.640136385224556%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53333333333333%")
  },
  View_2_785: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("1.639344262295083%")
  },
  Text_2_785: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_787: {
    width: wp("82.66666666666667%"),
    minWidth: wp("82.66666666666667%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("7.1038251366120235%")
  },
  Text_2_787: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_786: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.639344262295083%")
  },
  View_2_861: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.032786885245905%")
  },
  View_2_790: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.639344262295083%")
  },
  Text_2_790: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_791: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.133333333333333%"),
    top: hp("1.639344262295083%")
  },
  Text_2_791: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_789: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_792: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.8%")
  },
  View_2_818: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333333%"),
    top: hp("1.639344262295083%")
  },
  View_2_794: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_2_794: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_798: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666671%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_799: {
    width: wp("6.400388081868489%"),
    height: hp("2.255061154808503%"),
    top: hp("0.5118781751622237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00017089843750284217%")
  },
  ImageBackground_2_800: {
    width: wp("6.400388081868489%"),
    height: hp("2.255061154808503%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_855: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666666%"),
    top: hp("1.9125683060109253%")
  },
  View_2_856: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_795: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_2_795: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_837: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666674%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_838: {
    width: wp("5.600016276041667%"),
    height: hp("1.725809430815483%"),
    top: hp("0.5715271162856581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00001627604167708796%")
  },
  View_2_632: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("7.855191256830602%")
  },
  View_2_633: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_634: {
    width: wp("56.266666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.400000000000002%")
  },
  Text_2_634: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.0800000011920929,
    textTransform: "none"
  },
  ImageBackground_2_635: {
    width: wp("4.266655731201172%"),
    height: hp("2.185792349726776%"),
    top: hp("1.024590163934426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_638: {
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
  View_2_639: {
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_640: {
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_641: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333332%")
  },
  View_2_642: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_643: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_644: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.2666666666666515%"),
    top: hp("0%")
  },
  Text_2_644: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  ImageBackground_2_645: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333346%"),
    top: hp("0.8196721311475414%")
  },
  View_2_647: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%")
  },
  View_2_648: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_649: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_650: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666666%"),
    top: hp("0%")
  },
  Text_2_650: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  View_2_651: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_652: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  View_2_654: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%")
  },
  View_2_655: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_656: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_657: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666666%"),
    top: hp("0%")
  },
  Text_2_657: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  View_2_658: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_659: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  View_2_661: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_662: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_663: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_664: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666667%"),
    top: hp("0%")
  },
  Text_2_664: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  View_2_665: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_666: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%")
  },
  View_2_694: {
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
  ImageBackground_2_695: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("106.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_697: {
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
  ImageBackground_2_698: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.3679410173593323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_2_702: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675783084389943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_2_706: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.41347974766799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_2_711: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_712: {
    width: wp("14.399999999999999%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_712: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000003576278683,
    textTransform: "none"
  },
  ImageBackground_2_860: {
    width: wp("59.199999999999996%"),
    minWidth: wp("59.199999999999996%"),
    height: hp("30.327868852459016%"),
    minHeight: hp("30.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333335%"),
    top: hp("16.80327868852459%")
  },
  View_2_778: {
    width: wp("42.66667073567708%"),
    minWidth: wp("42.66667073567708%"),
    height: hp("21.85793391993788%"),
    minHeight: hp("21.85793391993788%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.799999999999997%"),
    top: hp("21.038249281586193%")
  },
  ImageBackground_2_766: {
    width: wp("42.66667073567708%"),
    minWidth: wp("42.66667073567708%"),
    height: hp("21.55209734140198%"),
    minHeight: hp("21.55209734140198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.3058360574023986%")
  },
  ImageBackground_2_767: {
    width: wp("20.543990071614584%"),
    minWidth: wp("20.543990071614584%"),
    height: hp("7.983570932690563%"),
    minHeight: hp("7.983570932690563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    top: hp("0%")
  },
  View_2_773: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("6.557378612580848%")
  },
  View_2_777: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_772: {
    width: wp("5.334879557291667%"),
    height: hp("1.640136385224556%"),
    top: hp("1.366120218579237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_770: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333341%"),
    top: hp("0%")
  },
  Text_2_770: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_776: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.800000000000004%"),
    top: hp("12.021858965764277%")
  },
  ImageBackground_2_774: {
    width: wp("5.334879557291667%"),
    height: hp("1.640136385224556%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_771: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("0%")
  },
  Text_2_771: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_779: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.93333333333334%"),
    top: hp("12.841530054644808%")
  },
  Text_2_779: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2.4,
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
