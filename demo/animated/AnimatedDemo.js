import React, {PureComponent} from 'react';
import {View, StyleSheet, Text, Animated, Easing, Dimensions, Image, TouchableOpacity} from 'react-native';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

// 透明度动画
// https://www.jianshu.com/p/7fd37d8ed138
export default class AnimatedDemo extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            fadeOutOpacity: new Animated.Value(1) // 透明度初始值设为1
        };

        this.fadeOutAnimated = Animated.timing(
            this.state.fadeOutOpacity,
            {
                toValue: 0,  //透明度动画最终值
                duration: 3000,   //动画时长3000毫秒
                easing: Easing.linear
            }
        );
    }

    _startFadeAnimated() {
        this.fadeOutAnimated.start(() => this.state.fadeOutOpacity.setValue(1)); // 正常播放完成后, 还原透明度
    }

    render() {
        return (
            <View style={style.mainStyle}>
                <Animated.View style={{width: 200, height: 300, opacity: this.state.fadeOutOpacity}}>
                    <Image ref="image" style={{width: 200, height: 300}}
                           source={{uri: 'http://old.bz55.com/uploads/allimg/161124/139-161124114048.jpg'}}>
                    </Image>
                </Animated.View>

                <TouchableOpacity
                    style={style.touchStyle}
                    onPress={this._startFadeAnimated.bind(this)}
                >
                    <Text style={{width: 200, height: 100, textAlign: 'center', lineHeight: 100}}>点击开始动画</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    mainStyle: {
        flex: 1,
        width: screenW,
        backgroundColor: "#ffffff",
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 100,
    },
    touchStyle: {
        width: 200,
        height: 100,
        position: 'absolute',
        bottom: 0,
    },
});