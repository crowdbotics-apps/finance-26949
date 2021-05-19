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
      <View style={styles.View_2_451}>
        <View style={styles.View_2_452}>
          <View style={styles.View_2_453} />
        </View>
        <View style={styles.View_2_454}>
          <Text style={styles.Text_2_454}>Vote up</Text>
        </View>
      </View>
      <View style={styles.View_2_455}>
        <View style={styles.View_2_456}>
          <View style={styles.View_2_457} />
        </View>
        <View style={styles.View_2_458}>
          <Text style={styles.Text_2_458}>Vote down</Text>
        </View>
      </View>
      <View style={styles.View_2_459}>
        <View style={styles.View_2_460}>
          <Text style={styles.Text_2_460}>113,00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d460/907e/8394f348c3cd0c9364af7641d448415b"
          }}
          style={styles.ImageBackground_2_461}
        />
      </View>
      <View style={styles.View_2_462}>
        <View style={styles.View_2_463}>
          <View style={styles.View_2_464}>
            <Text style={styles.Text_2_464}>TSLA-TESLA</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b543/3240/5ca9ef2d07d88b7a599c6407e540ec59"
            }}
            style={styles.ImageBackground_2_465}
          />
        </View>
      </View>
      <View style={styles.View_2_468}>
        <View style={styles.View_2_469}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cf1/c191/f6e63f6e616d2e1bb8042115af3602fe"
            }}
            style={styles.ImageBackground_2_470}
          />
          <View style={styles.View_2_471}>
            <View source={{ uri: "null" }} style={styles.View_2_472} />
            <View style={styles.View_2_473}>
              <View style={styles.View_2_474}>
                <Text style={styles.Text_2_474}>Profile</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81bd/f41a/b8236743f0a9f50722883e7ef90e51a5"
              }}
              style={styles.ImageBackground_2_475}
            />
          </View>
          <View style={styles.View_2_477}>
            <View source={{ uri: "null" }} style={styles.View_2_478} />
            <View style={styles.View_2_479}>
              <View style={styles.View_2_480}>
                <Text style={styles.Text_2_480}>Watch List</Text>
              </View>
            </View>
            <View style={styles.View_2_481}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0801/4bc7/a18905b65a1a3bad612c4faba1262b8d"
                }}
                style={styles.ImageBackground_2_482}
              />
            </View>
          </View>
          <View style={styles.View_2_484}>
            <View source={{ uri: "null" }} style={styles.View_2_485} />
            <View style={styles.View_2_486}>
              <View style={styles.View_2_487}>
                <Text style={styles.Text_2_487}>Trending</Text>
              </View>
            </View>
            <View style={styles.View_2_488}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c93/c0b9/ae689a18e1e911d183536162159f9908"
                }}
                style={styles.ImageBackground_2_489}
              />
            </View>
          </View>
          <View style={styles.View_2_491}>
            <View source={{ uri: "null" }} style={styles.View_2_492} />
            <View style={styles.View_2_493}>
              <View style={styles.View_2_494}>
                <Text style={styles.Text_2_494}>Home</Text>
              </View>
            </View>
            <View style={styles.View_2_495}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5aa/749e/e02b8a47d872582eb1d6918d06473619"
                }}
                style={styles.ImageBackground_2_496}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_500}>
        <View style={styles.View_2_501}>
          <View style={styles.View_2_502}>
            <Text style={styles.Text_2_502}>113,00 $</Text>
          </View>
          <View style={styles.View_2_503}>
            <Text style={styles.Text_2_503}>NASDAQ</Text>
          </View>
          <View style={styles.View_2_504}>
            <Text style={styles.Text_2_504}>1,54 %</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35eb/99a0/77896103fe97c555e4448426e96432c9"
            }}
            style={styles.ImageBackground_2_545}
          />
          <View style={styles.View_2_546}>
            <View style={styles.View_2_547}>
              <View style={styles.View_2_548}>
                <Text style={styles.Text_2_548}>150,00</Text>
              </View>
              <View style={styles.View_2_549}>
                <Text style={styles.Text_2_549}>140,00</Text>
              </View>
              <View style={styles.View_2_550}>
                <Text style={styles.Text_2_550}>130,00</Text>
              </View>
              <View style={styles.View_2_551}>
                <Text style={styles.Text_2_551}>120,00</Text>
              </View>
              <View style={styles.View_2_552}>
                <Text style={styles.Text_2_552}>110,00</Text>
              </View>
              <View style={styles.View_2_553}>
                <Text style={styles.Text_2_553}>100,00</Text>
              </View>
            </View>
            <View style={styles.View_2_554}>
              <Text style={styles.Text_2_554}>Day</Text>
            </View>
            <View style={styles.View_2_555}>
              <Text style={styles.Text_2_555}>Week</Text>
            </View>
            <View style={styles.View_2_556}>
              <Text style={styles.Text_2_556}>Month</Text>
            </View>
            <View style={styles.View_2_557}>
              <Text style={styles.Text_2_557}>Year</Text>
            </View>
            <View style={styles.View_2_558}>
              <Text style={styles.Text_2_558}>All</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/883f/195b/d8108851610ac2931dec13e0e8c90945"
              }}
              style={styles.ImageBackground_2_559}
            />
          </View>
        </View>
        <View style={styles.View_2_561}>
          <View style={styles.View_2_562}>
            <Text style={styles.Text_2_562}>
              · 11 am · 12 am · 1 pm · 2 pm · 3pm ·{" "}
            </Text>
          </View>
          <View style={styles.View_2_563}>
            <Text style={styles.Text_2_563}>03:45:09 </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_564}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6798/90ca/30073ebf38430554d0d6f1d5c500ec68"
          }}
          style={styles.ImageBackground_2_565}
        />
        <View style={styles.View_2_567}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
            }}
            style={styles.ImageBackground_2_568}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_2_572}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_2_576}
          />
          <View style={styles.View_2_581}>
            <View style={styles.View_2_582}>
              <Text style={styles.Text_2_582}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdfb/0146/dafe330b6a4580d6603d7bcfa3758193"
        }}
        style={styles.ImageBackground_2_583}
      />
      <View style={styles.View_2_586}>
        <View style={styles.View_2_587} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b683/de54/e96f8ed5a51493446535cd4fdd47ca63"
          }}
          style={styles.ImageBackground_2_588}
        />
        <View style={styles.View_2_589}>
          <View style={styles.View_2_590}>
            <Text style={styles.Text_2_590}>Forecast</Text>
          </View>
          <View style={styles.View_2_591}>
            <Text style={styles.Text_2_591}>Discussion</Text>
          </View>
          <View style={styles.View_2_592}>
            <Text style={styles.Text_2_592}>Votes</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9950/116b/5e7d0aa3ce9b5f7f605a950d76c14567"
        }}
        style={styles.ImageBackground_2_593}
      />
      <View style={styles.View_2_595}>
        <View style={styles.View_2_596}>
          <Text style={styles.Text_2_596}>Retail</Text>
        </View>
        <View style={styles.View_2_597} />
        <View style={styles.View_2_598} />
        <View style={styles.View_2_599}>
          <View style={styles.View_2_600}>
            <Text style={styles.Text_2_600}>Institution</Text>
          </View>
          <View style={styles.View_2_601} />
          <View style={styles.View_2_602} />
        </View>
        <View style={styles.View_2_603}>
          <Text style={styles.Text_2_603}>30</Text>
        </View>
        <View style={styles.View_2_604}>
          <Text style={styles.Text_2_604}>20</Text>
        </View>
        <View style={styles.View_2_605}>
          <Text style={styles.Text_2_605}>70</Text>
        </View>
        <View style={styles.View_2_606}>
          <Text style={styles.Text_2_606}>80</Text>
        </View>
        <View style={styles.View_2_607}>
          <Text style={styles.Text_2_607}>View</Text>
        </View>
        <View style={styles.View_2_608}>
          <Text style={styles.Text_2_608}>View</Text>
        </View>
      </View>
      <View style={styles.View_2_613}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/231f/407a/e93e542e54e83cd2ad312637aae69fc9"
          }}
          style={styles.ImageBackground_2_614}
        />
        <View style={styles.View_2_616}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e69/5ba6/31019dd0b9563b25e569133eb40d8511"
            }}
            style={styles.ImageBackground_2_617}
          />
          <View style={styles.View_2_618} />
          <View style={styles.View_2_619} />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2_451: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("91.80327868852459%")
  },
  View_2_452: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_453: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(120, 203, 187, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_2_454: {
    width: wp("15.466666666666667%"),
    top: hp("1.092896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.884545898437494%")
  },
  Text_2_454: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_455: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("91.80327868852459%")
  },
  View_2_456: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_457: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 93, 168, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_2_458: {
    width: wp("21.333333333333336%"),
    top: hp("1.092896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.951212565104166%")
  },
  Text_2_458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_459: {
    width: wp("13.489532470703125%"),
    minWidth: wp("13.489532470703125%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.97713216145833%"),
    top: hp("53.00546448087432%")
  },
  View_2_460: {
    width: wp("10.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.822863769531253%")
  },
  Text_2_460: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  ImageBackground_2_461: {
    width: wp("2.2627415974934895%"),
    minWidth: wp("2.2627415974934895%"),
    height: hp("1.15919139215855%"),
    minHeight: hp("1.15919139215855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027364095051965%")
  },
  View_2_462: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("7.855191256830602%")
  },
  View_2_463: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_464: {
    width: wp("29.86666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.466666666666665%")
  },
  Text_2_464: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.0800000011920929,
    textTransform: "none"
  },
  ImageBackground_2_465: {
    width: wp("4.266655731201172%"),
    height: hp("2.185792349726776%"),
    top: hp("1.024590163934426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_468: {
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
  View_2_469: {
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_470: {
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_471: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333332%")
  },
  View_2_472: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_473: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_474: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.2666666666666515%"),
    top: hp("0%")
  },
  Text_2_474: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  ImageBackground_2_475: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333346%"),
    top: hp("0.8196721311475414%")
  },
  View_2_477: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%")
  },
  View_2_478: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_479: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_480: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666666%"),
    top: hp("0%")
  },
  Text_2_480: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  View_2_481: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_482: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  View_2_484: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%")
  },
  View_2_485: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_486: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_487: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666666%"),
    top: hp("0%")
  },
  Text_2_487: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  View_2_488: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_489: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  View_2_491: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_492: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_493: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_494: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666667%"),
    top: hp("0%")
  },
  Text_2_494: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  View_2_495: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_496: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%")
  },
  View_2_500: {
    width: wp("94.13333333333334%"),
    minWidth: wp("94.13333333333334%"),
    height: hp("55.259562841530055%"),
    minHeight: hp("55.259562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6%"),
    top: hp("14.412568306010929%")
  },
  View_2_501: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("51.02459016393443%"),
    minHeight: hp("51.02459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("0%")
  },
  View_2_502: {
    width: wp("35.199999999999996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_502: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12800000190734864,
    textTransform: "none"
  },
  View_2_503: {
    width: wp("18.666666666666668%"),
    top: hp("4.030054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_503: {
    color: "rgba(72, 127, 217, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_504: {
    width: wp("20.533333333333335%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.93333333333334%")
  },
  Text_2_504: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.09600000143051149,
    textTransform: "none"
  },
  ImageBackground_2_545: {
    width: wp("2.2627415974934895%"),
    minWidth: wp("2.2627415974934895%"),
    height: hp("1.15919139215855%"),
    minHeight: hp("1.15919139215855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.5771260579427%"),
    top: hp("1.2978142076502746%")
  },
  View_2_546: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("41.53005464480874%"),
    minHeight: hp("41.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.49453551912568%")
  },
  View_2_547: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53334960937501%"),
    top: hp("6.557377049180332%")
  },
  View_2_548: {
    width: wp("10.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_548: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  View_2_549: {
    width: wp("10.666666666666668%"),
    top: hp("6.693989071038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_549: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  View_2_550: {
    width: wp("10.666666666666668%"),
    top: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_550: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  View_2_551: {
    width: wp("10.666666666666668%"),
    top: hp("19.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_551: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  View_2_552: {
    width: wp("10.666666666666668%"),
    top: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_552: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  View_2_553: {
    width: wp("10.666666666666668%"),
    top: hp("30.601092896174855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  View_2_554: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_554: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_555: {
    width: wp("11.466666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%")
  },
  Text_2_555: {
    color: "rgba(67, 70, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_556: {
    width: wp("13.066666666666665%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%")
  },
  Text_2_556: {
    color: "rgba(67, 70, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_557: {
    width: wp("8.799999999999999%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.33333333333333%")
  },
  Text_2_557: {
    color: "rgba(67, 70, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_558: {
    width: wp("5.333333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.06666666666666%")
  },
  Text_2_558: {
    color: "rgba(67, 70, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  ImageBackground_2_559: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333334%"),
    top: hp("0%")
  },
  View_2_561: {
    width: wp("77.06666666666668%"),
    minWidth: wp("77.06666666666668%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50.887978142076506%")
  },
  View_2_562: {
    width: wp("61.86666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_562: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  View_2_563: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666666%")
  },
  Text_2_563: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  View_2_564: {
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
  ImageBackground_2_565: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("106.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_567: {
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
  ImageBackground_2_568: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.3679410173593323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_2_572: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675783084389943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_2_576: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.41347974766799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%")
  },
  View_2_581: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_582: {
    width: wp("14.399999999999999%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_582: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000003576278683,
    textTransform: "none"
  },
  ImageBackground_2_583: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.06666666666668%")
  },
  View_2_586: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.62568306010929%"),
    minHeight: hp("6.62568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("69.53551912568307%")
  },
  View_2_587: {
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
  ImageBackground_2_588: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%"),
    top: hp("6.6256830601092815%")
  },
  View_2_589: {
    width: wp("66.93333333333334%"),
    minWidth: wp("66.93333333333334%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333336%"),
    top: hp("1.0928961748633697%")
  },
  View_2_590: {
    width: wp("16.8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.199999999999996%")
  },
  Text_2_590: {
    color: "rgba(67, 70, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_591: {
    width: wp("21.066666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666667%")
  },
  Text_2_591: {
    color: "rgba(67, 70, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_592: {
    width: wp("11.200000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_592: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  ImageBackground_2_593: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("24.453551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.26666666666667%")
  },
  View_2_595: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("77.3224043715847%")
  },
  View_2_596: {
    width: wp("11.200000000000001%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%")
  },
  Text_2_596: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_597: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.26666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.05000000074505806,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_598: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.6%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.05000000074505806,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_599: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.557377049180332%")
  },
  View_2_600: {
    width: wp("19.733333333333334%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_600: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_601: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.26666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.05000000074505806,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_602: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.6%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.05000000074505806,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_603: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    top: hp("0.546448087431699%")
  },
  Text_2_603: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_604: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    top: hp("7.103825136612031%")
  },
  Text_2_604: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_605: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.133333333333326%"),
    top: hp("0.546448087431699%")
  },
  Text_2_605: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_606: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.133333333333326%"),
    top: hp("7.103825136612031%")
  },
  Text_2_606: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_607: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.86666666666666%"),
    top: hp("0.546448087431699%")
  },
  Text_2_607: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_608: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.86666666666666%"),
    top: hp("7.103825136612031%")
  },
  Text_2_608: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_613: {
    width: wp("72.39999999999999%"),
    minWidth: wp("72.39999999999999%"),
    height: hp("31.830601092896178%"),
    minHeight: hp("31.830601092896178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("31.830601092896178%")
  },
  ImageBackground_2_614: {
    width: wp("0.000002680965068672473%"),
    minWidth: wp("0.000002680965068672473%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.46666666666667%"),
    top: hp("0.40983606557376717%")
  },
  View_2_616: {
    width: wp("72.39999999999999%"),
    minWidth: wp("72.39999999999999%"),
    height: hp("26.161202185792348%"),
    minHeight: hp("26.161202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_617: {
    width: wp("71.2%"),
    minWidth: wp("71.2%"),
    height: hp("26.161202185792348%"),
    minHeight: hp("26.161202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_618: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("22.609289617486336%"),
    backgroundColor: "rgba(84, 138, 130, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_2_619: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.80000000000001%"),
    top: hp("23.019125683060107%"),
    backgroundColor: "rgba(120, 203, 187, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
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
