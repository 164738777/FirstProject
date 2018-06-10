import {AppRegistry} from 'react-native';
import App from './App';
import WeatherDemo from './demo/WeatherDemo';
import PressButtonDemo from "./demo/PressButtonDemo";
import PanResponderDemo from "./demo/PanResponderDemo";
import AnimatedDemo from "./demo/animated/AnimatedDemo";
import InterpolateAnimatedDemo from "./demo/animated/InterpolateAnimatedDemo";

// AppRegistry.registerComponent('FirstProject', () => App);
// AppRegistry.registerComponent('FirstProject', () => WeatherDemo); 天气Api简单Demo
// AppRegistry.registerComponent('FirstProject', () => PressButtonDemo); 点击按钮Demo
// AppRegistry.registerComponent('FirstProject', () => PanResponderDemo); // 暂时没有反应

// AppRegistry.registerComponent('FirstProject', () => AnimatedDemo); // 动画
AppRegistry.registerComponent('FirstProject', () => InterpolateAnimatedDemo); // 动画
