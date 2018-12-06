var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
export default class CameraExample extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
        };
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            const { status } = yield Permissions.askAsync(Permissions.CAMERA);
            this.setState({ hasCameraPermission: status === 'granted' });
        });
    }
    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return React.createElement(View, null);
        }
        else if (hasCameraPermission === false) {
            return React.createElement(Text, null, "No access to camera");
        }
        else {
            return (
            // 坑：不要给flex：1了
            React.createElement(View, { style: { height: '100%' } },
                React.createElement(Camera, { type: this.state.type },
                    React.createElement(View, { style: {
                            height: '100%',
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                        } },
                        React.createElement(TouchableOpacity, { style: {
                                height: '100%',
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }, onPress: () => {
                                this.setState({
                                    type: this.state.type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back,
                                });
                            } },
                            React.createElement(Text, { style: { fontSize: 18, marginBottom: 10, color: 'white' } },
                                ' ',
                                "Flip",
                                ' '))))));
        }
    }
}
//# sourceMappingURL=MineContainer.js.map