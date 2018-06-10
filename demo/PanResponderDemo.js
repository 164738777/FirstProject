import React, {PureComponent} from 'react';
import {View, StyleSheet, Text, PanResponder} from 'react-native';

const CIRCLE_SIZE = 40;
const CIRCLE_UNPRESSED_COLOR = 'blue';
const CIRCLE_PRESSING_COLOR = 'green';

export default class PanResponderDemo extends PureComponent {
    _panResponder: {};
    _previousLeft: 0;
    _previousTop: 0;
    _circleStyles: {};
    circle = null;

    constructor(props) {
        super(props);

        this.state = {
            moveX: 0,
            moveY: 0,
            x0: 0,
            y0: 0,
            dx: 0,
            dy: 0,
            vx: 0,
            vy: 0,
            numberActiveTouches: 0
        };
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
            onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
            onPanResponderGrant: this._handlePanResponderGrant,
            onPanResponderMove: this._handlePanResponderMove,
            onPanResponderTerminate: this._handlePanResponderTerminate,
            onPanResponderRelease: this._handlePanResponderRelease
        });

        this._previousLeft = 20;
        this._previousTop = 84;
        this._circleStyles = {
            style: {
                left: this._previousLeft,
                top: this._previousTop,
            },
        };
    }

    componentDidMount() {
        this._updatePosition();
    }

    _handleStartShouldSetPanResponder = (nativeEvent, gestureState) => {
        console.log('_handleStartShouldSetPanResponder');
        return true;
    };

    _handleMoveShouldSetPanResponder = (nativeEvent, gestureState) => {
        console.log('_handleMoveShouldSetPanResponder');
        return true;
    };

    _handlePanResponderGrant(nativeEvent, gestureState) {
        console.log('_handlePanResponderGrant');

        this._hightLight();
    }

    _hightLight = () => {
        this.circle && this.circle.setNativeProps({
            style: {backgroundColor: CIRCLE_PRESSING_COLOR}
        });
    };

    _handlePanResponderMove(nativeEvent, gestureState) {
        console.log('_handlePanResponderMove');
        this.setState({
            moveX: gestureState.moveX,
            moveY: gestureState.moveY,
            x0: gestureState.x0,
            y0: gestureState.y0,
            dx: gestureState.dx,
            dy: gestureState.dy,
            vx: gestureState.vx,
            vy: gestureState.vy,
            numberActiveTouches: gestureState.numberActiveTouches
        });

        this._circleStyles.style.left = this._previousLeft + gestureState.dx;
        this._circleStyles.style.top = this._previousTop + gestureState.dy;
        this._updatePosition();
    }

    _handlePanResponderTerminate(nativeEvent, gestureState) {
        console.log('_handlePanResponderTerminate');
        this._handlePanResponderEnd(nativeEvent, gestureState);
    }

    _handlePanResponderRelease(nativeEvent, gestureState) {
        console.log('_handlePanResponderRelease');
        this._handlePanResponderEnd(nativeEvent, gestureState);
    }

    _handlePanResponderEnd(nativeEvent, gestureState) {
        this._unHightLight();

        this._previousTop += gestureState.dx;
        this._previousLeft += gestureState.dy;
    }

    _unHightLight() {
        this.circle && this.circle.setNativeProps({
            style: {backgroundColor: CIRCLE_UNPRESSED_COLOR}
        });
    }

    _updatePosition() {
        console.log('_updatePosition');
        this.circle && this.circle.setNativeProps(this._circleStyles)
    }

    render() {
        return (
            <View style={styles.container}>
                <View
                    ref={circle => this.circle = circle}
                    style={styles.circle}
                    {...this._panResponder.panHandlers}
                />
                <Text>
                    {this.state.numberActiveTouches} touches,
                    dx:{this.state.dx},
                    dy:{this.state.dy},
                    vx:{this.state.vx},
                    vy:{this.state.vy}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: 64
    },
    circle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        position: 'absolute',
        left: 0,
        top: 0,
    },
});