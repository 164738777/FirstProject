import React, {Component} from 'react';
import {StyleSheet, Text, ImageBackground, View, TextInput} from 'react-native';
import Forecast from './Forecast';
import WeatherApi from "../api/WeatherApi";

export default class WeatherDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: "",
            forecast: null,
        };
    }

    _handleTextChange = (event) => {
        let city = event.nativeEvent.text;
        WeatherApi.fetchForecast(city)
            .then(forecast => {
                console.warn(forecast);
                this.setState({forecast: forecast});
            });
    };

    render() {
        return (
            <View style={style.container}>
                <ImageBackground
                    style={style.mainBackgroundImage}
                    source={{uri: 'http://old.bz55.com/uploads/allimg/161124/139-161124114048.jpg'}}
                    resizeMode="cover">

                    <View style={style.overLay}>
                        <Text style={style.textWelcome}>
                            Your input {this.state.zip}
                        </Text>


                        {   // 如果forecast不为null，则显示 <Forecast>
                            this.state.forecast &&
                            <Forecast
                                main={this.state.forecast.main}
                                description={this.state.forecast.description}
                                temp={this.state.forecast.temp}
                            />
                        }

                        <TextInput
                            style={style.textInput}
                            onSubmitEditing={this._handleTextChange}
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
    mainBackgroundImage: {
        flex: 1,
        backgroundColor: '#666666',
    },
    overLay: {
        opacity: 0.5,
        backgroundColor: '#000000',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 30
    },
    textWelcome: {
        fontSize: 20,
        alignContent: "center",
        margin: 10,
    },
    textInput: {
        fontSize: 20,
        borderWidth: 2,
        height: 40,
        textAlign: 'center',
        width: 100,
        padding: 2
    },
});