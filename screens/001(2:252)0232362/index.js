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
      <View style={styles.View_2_253}>
        <View style={styles.View_2_254}>
          <View style={styles.View_2_255} />
        </View>
        <View style={styles.View_2_256}>
          <Text style={styles.Text_2_256}>Vote up</Text>
        </View>
      </View>
      <View style={styles.View_2_257}>
        <View style={styles.View_2_258}>
          <View style={styles.View_2_259} />
        </View>
        <View style={styles.View_2_260}>
          <Text style={styles.Text_2_260}>Vote down</Text>
        </View>
      </View>
      <View style={styles.View_2_376}>
        <View style={styles.View_2_323}>
          <Text style={styles.Text_2_323}>113,00</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d460/907e/8394f348c3cd0c9364af7641d448415b"
          }}
          style={styles.ImageBackground_2_324}
        />
      </View>
      <View style={styles.View_2_325}>
        <View style={styles.View_2_326}>
          <View style={styles.View_2_327}>
            <Text style={styles.Text_2_327}>TSLA-TESLA</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b543/3240/5ca9ef2d07d88b7a599c6407e540ec59"
            }}
            style={styles.ImageBackground_2_328}
          />
        </View>
      </View>
      <View style={styles.View_2_413}>
        <View style={styles.View_2_414}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cf1/c191/f6e63f6e616d2e1bb8042115af3602fe"
            }}
            style={styles.ImageBackground_2_415}
          />
          <View style={styles.View_2_416}>
            <View source={{ uri: "null" }} style={styles.View_2_417} />
            <View style={styles.View_2_418}>
              <View style={styles.View_2_419}>
                <Text style={styles.Text_2_419}>Profile</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81bd/f41a/b8236743f0a9f50722883e7ef90e51a5"
              }}
              style={styles.ImageBackground_2_420}
            />
          </View>
          <View style={styles.View_2_422}>
            <View source={{ uri: "null" }} style={styles.View_2_423} />
            <View style={styles.View_2_424}>
              <View style={styles.View_2_425}>
                <Text style={styles.Text_2_425}>Watch List</Text>
              </View>
            </View>
            <View style={styles.View_2_426}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0801/4bc7/a18905b65a1a3bad612c4faba1262b8d"
                }}
                style={styles.ImageBackground_2_448}
              />
            </View>
          </View>
          <View style={styles.View_2_428}>
            <View source={{ uri: "null" }} style={styles.View_2_429} />
            <View style={styles.View_2_430}>
              <View style={styles.View_2_431}>
                <Text style={styles.Text_2_431}>Trending</Text>
              </View>
            </View>
            <View style={styles.View_2_432}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c93/c0b9/ae689a18e1e911d183536162159f9908"
                }}
                style={styles.ImageBackground_2_446}
              />
            </View>
          </View>
          <View style={styles.View_2_434}>
            <View source={{ uri: "null" }} style={styles.View_2_435} />
            <View style={styles.View_2_436}>
              <View style={styles.View_2_437}>
                <Text style={styles.Text_2_437}>Home</Text>
              </View>
            </View>
            <View style={styles.View_2_438}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5aa/749e/e02b8a47d872582eb1d6918d06473619"
                }}
                style={styles.ImageBackground_2_440}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_368}>
        <View style={styles.View_2_261}>
          <View style={styles.View_2_262}>
            <Text style={styles.Text_2_262}>113,00 $</Text>
          </View>
          <View style={styles.View_2_263}>
            <Text style={styles.Text_2_263}>NASDAQ</Text>
          </View>
          <View style={styles.View_2_264}>
            <Text style={styles.Text_2_264}>1,54 %</Text>
          </View>
          <View style={styles.View_2_265}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d7a/735e/b266867b89e1a361b41e3e433a65b042"
              }}
              style={styles.ImageBackground_2_266}
            />
            <View style={styles.View_2_267} />
          </View>
          <View style={styles.View_2_268}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0e7/0a7e/367f551ad2a305afbeb70030afb4efb5"
              }}
              style={styles.ImageBackground_2_269}
            />
            <View style={styles.View_2_270} />
          </View>
          <View style={styles.View_2_271}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d724/1a3b/216096eda70031a19ca8454d04261f6d"
              }}
              style={styles.ImageBackground_2_272}
            />
            <View style={styles.View_2_273} />
          </View>
          <View style={styles.View_2_274}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6107/75a3/af1e7be469116abaa69020fc30c4904e"
              }}
              style={styles.ImageBackground_2_275}
            />
            <View style={styles.View_2_276} />
          </View>
          <View style={styles.View_2_277}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d724/1a3b/216096eda70031a19ca8454d04261f6d"
              }}
              style={styles.ImageBackground_2_278}
            />
            <View style={styles.View_2_279} />
          </View>
          <View style={styles.View_2_280}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65b4/a734/4b2ea796f8e1cb28ab3f47ded6f6bb56"
              }}
              style={styles.ImageBackground_2_281}
            />
            <View style={styles.View_2_282} />
          </View>
          <View style={styles.View_2_283}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d724/1a3b/216096eda70031a19ca8454d04261f6d"
              }}
              style={styles.ImageBackground_2_284}
            />
            <View style={styles.View_2_285} />
          </View>
          <View style={styles.View_2_286}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/181d/037e/6b49e4ee194e72c00d6f2d9ba06f6670"
              }}
              style={styles.ImageBackground_2_287}
            />
            <View style={styles.View_2_288} />
          </View>
          <View style={styles.View_2_289}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffe1/eb5f/561dfc852e7e08ca2cb89f7c983bbadb"
              }}
              style={styles.ImageBackground_2_290}
            />
            <View style={styles.View_2_291} />
          </View>
          <View style={styles.View_2_292}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e49c/f6d6/47bf4f4b9c28e1079816278e1adaaccf"
              }}
              style={styles.ImageBackground_2_293}
            />
            <View style={styles.View_2_294} />
          </View>
          <View style={styles.View_2_295}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d724/1a3b/216096eda70031a19ca8454d04261f6d"
              }}
              style={styles.ImageBackground_2_296}
            />
            <View style={styles.View_2_297} />
          </View>
          <View style={styles.View_2_298}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e056/7db3/f468c5a643b1d69328f7d4d80c00a549"
              }}
              style={styles.ImageBackground_2_299}
            />
            <View style={styles.View_2_300} />
          </View>
          <View style={styles.View_2_301}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/231f/407a/e93e542e54e83cd2ad312637aae69fc9"
              }}
              style={styles.ImageBackground_2_302}
            />
            <View style={styles.View_2_303} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ce7/093b/8bc3c50e8e8f168cdee88198cf0e3f17"
              }}
              style={styles.ImageBackground_2_304}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35eb/99a0/77896103fe97c555e4448426e96432c9"
            }}
            style={styles.ImageBackground_2_305}
          />
          <View style={styles.View_2_306}>
            <View style={styles.View_2_307}>
              <View style={styles.View_2_308}>
                <Text style={styles.Text_2_308}>150,00</Text>
              </View>
              <View style={styles.View_2_309}>
                <Text style={styles.Text_2_309}>140,00</Text>
              </View>
              <View style={styles.View_2_310}>
                <Text style={styles.Text_2_310}>130,00</Text>
              </View>
              <View style={styles.View_2_311}>
                <Text style={styles.Text_2_311}>120,00</Text>
              </View>
              <View style={styles.View_2_312}>
                <Text style={styles.Text_2_312}>110,00</Text>
              </View>
              <View style={styles.View_2_313}>
                <Text style={styles.Text_2_313}>100,00</Text>
              </View>
            </View>
            <View style={styles.View_2_315}>
              <Text style={styles.Text_2_315}>Day</Text>
            </View>
            <View style={styles.View_2_316}>
              <Text style={styles.Text_2_316}>Week</Text>
            </View>
            <View style={styles.View_2_317}>
              <Text style={styles.Text_2_317}>Month</Text>
            </View>
            <View style={styles.View_2_318}>
              <Text style={styles.Text_2_318}>Year</Text>
            </View>
            <View style={styles.View_2_319}>
              <Text style={styles.Text_2_319}>All</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/883f/195b/d8108851610ac2931dec13e0e8c90945"
              }}
              style={styles.ImageBackground_2_320}
            />
          </View>
        </View>
        <View style={styles.View_2_377}>
          <View style={styles.View_2_314}>
            <Text style={styles.Text_2_314}>
              · 11 am · 12 am · 1 pm · 2 pm · 3pm ·{" "}
            </Text>
          </View>
          <View style={styles.View_2_338}>
            <Text style={styles.Text_2_338}>03:45:09 </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_339}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6798/90ca/30073ebf38430554d0d6f1d5c500ec68"
          }}
          style={styles.ImageBackground_2_340}
        />
        <View style={styles.View_2_342}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4d/439a/ae38e1e86f18911cce04b454b9fea35c"
            }}
            style={styles.ImageBackground_2_343}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_2_347}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_2_351}
          />
          <View style={styles.View_2_356}>
            <View style={styles.View_2_357}>
              <Text style={styles.Text_2_357}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdfb/0146/dafe330b6a4580d6603d7bcfa3758193"
        }}
        style={styles.ImageBackground_2_358}
      />
      <View style={styles.View_2_369}>
        <View style={styles.View_2_370} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b683/de54/e96f8ed5a51493446535cd4fdd47ca63"
          }}
          style={styles.ImageBackground_2_371}
        />
        <View style={styles.View_2_372}>
          <View style={styles.View_2_373}>
            <Text style={styles.Text_2_373}>Forecast</Text>
          </View>
          <View style={styles.View_2_374}>
            <Text style={styles.Text_2_374}>Discussion</Text>
          </View>
          <View style={styles.View_2_375}>
            <Text style={styles.Text_2_375}>Votes</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9950/116b/5e7d0aa3ce9b5f7f605a950d76c14567"
        }}
        style={styles.ImageBackground_2_378}
      />
      <View style={styles.View_2_393}>
        <View style={styles.View_2_380}>
          <Text style={styles.Text_2_380}>Retail</Text>
        </View>
        <View style={styles.View_2_382} />
        <View style={styles.View_2_383} />
        <View style={styles.View_2_386}>
          <View style={styles.View_2_381}>
            <Text style={styles.Text_2_381}>Institution</Text>
          </View>
          <View style={styles.View_2_384} />
          <View style={styles.View_2_385} />
        </View>
        <View style={styles.View_2_387}>
          <Text style={styles.Text_2_387}>30</Text>
        </View>
        <View style={styles.View_2_390}>
          <Text style={styles.Text_2_390}>20</Text>
        </View>
        <View style={styles.View_2_388}>
          <Text style={styles.Text_2_388}>70</Text>
        </View>
        <View style={styles.View_2_391}>
          <Text style={styles.Text_2_391}>80</Text>
        </View>
        <View style={styles.View_2_389}>
          <Text style={styles.Text_2_389}>View</Text>
        </View>
        <View style={styles.View_2_392}>
          <Text style={styles.Text_2_392}>View</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2_253: {
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
  View_2_254: {
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
  View_2_255: {
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
  View_2_256: {
    width: wp("15.466666666666667%"),
    top: hp("1.092896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.884545898437494%")
  },
  Text_2_256: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_257: {
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
  View_2_258: {
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
  View_2_259: {
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
  View_2_260: {
    width: wp("21.333333333333336%"),
    top: hp("1.092896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.951204427083335%")
  },
  Text_2_260: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_376: {
    width: wp("13.489532470703125%"),
    minWidth: wp("13.489532470703125%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.97713216145833%"),
    top: hp("53.96174863387978%")
  },
  View_2_323: {
    width: wp("10.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.822863769531253%")
  },
  Text_2_323: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  ImageBackground_2_324: {
    width: wp("2.2627415974934895%"),
    minWidth: wp("2.2627415974934895%"),
    height: hp("1.15919139215855%"),
    minHeight: hp("1.15919139215855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027364095052107%")
  },
  View_2_325: {
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
  View_2_326: {
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
  View_2_327: {
    width: wp("29.86666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.466666666666665%")
  },
  Text_2_327: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.0800000011920929,
    textTransform: "none"
  },
  ImageBackground_2_328: {
    width: wp("4.266655731201172%"),
    height: hp("2.185792349726776%"),
    top: hp("1.024590163934426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_413: {
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
  View_2_414: {
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_415: {
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_416: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333332%")
  },
  View_2_417: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_418: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_419: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.2666666666666515%"),
    top: hp("0%")
  },
  Text_2_419: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  ImageBackground_2_420: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333346%"),
    top: hp("0.8196721311475414%")
  },
  View_2_422: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%")
  },
  View_2_423: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_424: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_425: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666666%"),
    top: hp("0%")
  },
  Text_2_425: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  View_2_426: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_448: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  View_2_428: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%")
  },
  View_2_429: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_430: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_431: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666666%"),
    top: hp("0%")
  },
  Text_2_431: {
    color: "rgba(138, 138, 143, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  View_2_432: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_446: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  View_2_434: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_435: {
    width: wp("25%"),
    height: hp("6.693989071038252%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_436: {
    width: wp("25%"),
    height: hp("1.639344262295082%"),
    top: hp("4.781420765027335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_437: {
    width: wp("33.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.266666666666667%"),
    top: hp("0%")
  },
  Text_2_437: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12000000476837158,
    textTransform: "none"
  },
  View_2_438: {
    width: wp("8%"),
    height: hp("3.551912568306011%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_440: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%")
  },
  View_2_368: {
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
  View_2_261: {
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
  View_2_262: {
    width: wp("35.199999999999996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_262: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12800000190734864,
    textTransform: "none"
  },
  View_2_263: {
    width: wp("18.666666666666668%"),
    top: hp("4.030054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_263: {
    color: "rgba(72, 127, 217, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_264: {
    width: wp("20.533333333333335%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.93333333333334%")
  },
  Text_2_264: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.09600000143051149,
    textTransform: "none"
  },
  View_2_265: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("17.554644808743173%")
  },
  ImageBackground_2_266: {
    width: wp("5.595058003867355e-7%"),
    minWidth: wp("5.595058003867355e-7%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0%")
  },
  View_2_267: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(120, 203, 187, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_2_268: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("9.699453551912567%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("17.41803278688525%")
  },
  ImageBackground_2_269: {
    width: wp("8.276022830007909e-7%"),
    minWidth: wp("8.276022830007909e-7%"),
    height: hp("9.699453551912567%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0%")
  },
  View_2_270: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.142076502732241%"),
    backgroundColor: "rgba(255, 49, 101, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_2_271: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.2%"),
    top: hp("21.926229508196723%")
  },
  ImageBackground_2_272: {
    width: wp("0.0000013055134331807496%"),
    minWidth: wp("0.0000013055134331807496%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0%")
  },
  View_2_273: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448087%"),
    backgroundColor: "rgba(255, 49, 101, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_2_274: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("20.833333333333332%")
  },
  ImageBackground_2_275: {
    width: wp("0.0000013987644100173685%"),
    minWidth: wp("0.0000013987644100173685%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.533333333333335%"),
    top: hp("0%")
  },
  View_2_276: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.322404371584696%"),
    backgroundColor: "rgba(120, 203, 187, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_2_277: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333336%"),
    top: hp("20.833333333333332%")
  },
  ImageBackground_2_278: {
    width: wp("0.0000013055133119147892%"),
    minWidth: wp("0.0000013055133119147892%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333279%"),
    top: hp("0%")
  },
  View_2_279: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.644808743169399%"),
    backgroundColor: "rgba(255, 49, 101, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_2_280: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.733333333333334%"),
    top: hp("23.155737704918028%")
  },
  ImageBackground_2_281: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0%")
  },
  View_2_282: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562883220735188%"),
    backgroundColor: "rgba(120, 203, 187, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_2_283: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%"),
    top: hp("23.155737704918028%")
  },
  ImageBackground_2_284: {
    width: wp("0.0000013055133119147892%"),
    minWidth: wp("0.0000013055133119147892%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0%")
  },
  View_2_285: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    backgroundColor: "rgba(255, 49, 101, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_2_286: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.66666666666667%"),
    top: hp("26.571038251366122%")
  },
  ImageBackground_2_287: {
    width: wp("0.0000010141042973070094%"),
    minWidth: wp("0.0000010141042973070094%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333243%"),
    top: hp("0%")
  },
  View_2_288: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.00000938040310671795%"),
    backgroundColor: "rgba(120, 203, 187, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_2_289: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.266666666666666%"),
    top: hp("26.571038251366122%")
  },
  ImageBackground_2_290: {
    width: wp("0.000001340482655602197%"),
    minWidth: wp("0.000001340482655602197%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0%")
  },
  View_2_291: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 49, 101, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_2_292: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.86666666666667%"),
    top: hp("35.040983606557376%")
  },
  ImageBackground_2_293: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0%")
  },
  View_2_294: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.8688503744823635%"),
    backgroundColor: "rgba(255, 49, 101, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_2_295: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.2%"),
    top: hp("32.71857923497268%")
  },
  ImageBackground_2_296: {
    width: wp("0.0000013055133119147892%"),
    minWidth: wp("0.0000013055133119147892%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0%")
  },
  View_2_297: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.41530054644808%"),
    backgroundColor: "rgba(120, 203, 187, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_2_298: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.8%"),
    top: hp("35.040983606557376%")
  },
  ImageBackground_2_299: {
    width: wp("7.343513667971517e-7%"),
    minWidth: wp("7.343513667971517e-7%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%"),
    top: hp("0%")
  },
  View_2_300: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.41530054644808%"),
    backgroundColor: "rgba(255, 49, 101, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_2_301: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.6%"),
    top: hp("17.554644808743173%")
  },
  ImageBackground_2_302: {
    width: wp("0.000002680965068672473%"),
    minWidth: wp("0.000002680965068672473%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333428%"),
    top: hp("0%")
  },
  View_2_303: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.94535519125683%"),
    backgroundColor: "rgba(84, 138, 130, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  ImageBackground_2_304: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000114%"),
    top: hp("22.131147540983605%")
  },
  ImageBackground_2_305: {
    width: wp("2.2627415974934895%"),
    minWidth: wp("2.2627415974934895%"),
    height: hp("1.15919139215855%"),
    minHeight: hp("1.15919139215855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.5771240234375%"),
    top: hp("1.2978142076502746%")
  },
  View_2_306: {
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
  View_2_307: {
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
  View_2_308: {
    width: wp("10.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_308: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  View_2_309: {
    width: wp("10.666666666666668%"),
    top: hp("6.693989071038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_309: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  View_2_310: {
    width: wp("10.666666666666668%"),
    top: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_310: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  View_2_311: {
    width: wp("10.666666666666668%"),
    top: hp("19.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_311: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  View_2_312: {
    width: wp("10.666666666666668%"),
    top: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_312: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  View_2_313: {
    width: wp("10.666666666666668%"),
    top: hp("30.601092896174855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_313: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  View_2_315: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_315: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_316: {
    width: wp("11.466666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%")
  },
  Text_2_316: {
    color: "rgba(67, 70, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_317: {
    width: wp("13.066666666666665%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%")
  },
  Text_2_317: {
    color: "rgba(67, 70, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_318: {
    width: wp("8.799999999999999%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.33333333333333%")
  },
  Text_2_318: {
    color: "rgba(67, 70, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_319: {
    width: wp("5.333333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.06666666666666%")
  },
  Text_2_319: {
    color: "rgba(67, 70, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  ImageBackground_2_320: {
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
  View_2_377: {
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
  View_2_314: {
    width: wp("61.86666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_314: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  View_2_338: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666666%")
  },
  Text_2_338: {
    color: "rgba(120, 203, 187, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.048000000715255745,
    textTransform: "none"
  },
  View_2_339: {
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
  ImageBackground_2_340: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("106.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_342: {
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
  ImageBackground_2_343: {
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    top: hp("2.3679410173593323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  ImageBackground_2_347: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675783084389943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_2_351: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.41347974766799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%")
  },
  View_2_356: {
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_357: {
    width: wp("14.399999999999999%"),
    top: hp("0.2732240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_357: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000003576278683,
    textTransform: "none"
  },
  ImageBackground_2_358: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.06666666666668%")
  },
  View_2_369: {
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
  View_2_370: {
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
  ImageBackground_2_371: {
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
  View_2_372: {
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
  View_2_373: {
    width: wp("16.8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.199999999999996%")
  },
  Text_2_373: {
    color: "rgba(67, 70, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_374: {
    width: wp("21.066666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666667%")
  },
  Text_2_374: {
    color: "rgba(67, 70, 77, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_375: {
    width: wp("11.200000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_375: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  ImageBackground_2_378: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("24.453551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.26666666666667%")
  },
  View_2_393: {
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
  View_2_380: {
    width: wp("11.200000000000001%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%")
  },
  Text_2_380: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_382: {
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
  View_2_383: {
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
  View_2_386: {
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
  View_2_381: {
    width: wp("19.733333333333334%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_2_381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_384: {
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
  View_2_385: {
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
  View_2_387: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    top: hp("0.546448087431699%")
  },
  Text_2_387: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_390: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    top: hp("7.103825136612031%")
  },
  Text_2_390: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_388: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.133333333333326%"),
    top: hp("0.546448087431699%")
  },
  Text_2_388: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_391: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.133333333333326%"),
    top: hp("7.103825136612031%")
  },
  Text_2_391: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_389: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.86666666666666%"),
    top: hp("0.546448087431699%")
  },
  Text_2_389: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
    textTransform: "none"
  },
  View_2_392: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.86666666666666%"),
    top: hp("7.103825136612031%")
  },
  Text_2_392: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.06400000095367432,
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
