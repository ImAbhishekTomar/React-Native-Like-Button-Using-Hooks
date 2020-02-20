import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Icon, Text, IconProps } from '@ui-kitten/components';

export interface DataResult {
    isLike: boolean,
    value: number
}

interface Props {
    initialState: boolean | false;
    initialLike: number;
    width: number;
    height: number;
    onPress?: (data: DataResult) => void;
}

const LikeComponent: React.FC<Props> = (props) => {

    //props = { initialState: true, width: 30, height: 30, initialLike: 5 };

    const [initialState, setinitialState] = useState<boolean>(props.initialState);
    const [dimensions, setdimensions] = useState<number>(props.width | 30);
    const [initialLike, setinitialLike] = useState<number>(props.initialLike | 0);
    const [likeString, setLikeString] = useState<string>();
    const inActiveColorIcon = 'rgba(255,255,255,1)';
    const activeColor = 'rgba(255,0,0,1)';
    let data: DataResult;

    data = { isLike: initialState, value: initialLike };

    const simplify = (x: number): string => {
        if (isNaN(x)) return x.toString();
        if (x < 9999) { return x.toString(); }
        if (x < 1000000) { return Math.round(x / 1000) + "K"; }
        if (x < 10000000) { return (x / 1000000).toFixed(2) + "M"; }
        if (x < 1000000000) { return Math.round((x / 1000000)) + "M"; }
        if (x < 1000000000000) { return Math.round((x / 1000000000)) + "B"; }

        return "1T+";
    }


    const handlerPress = () => {
        (initialState) ? setinitialLike(initialLike + 1) : setinitialLike(initialLike - 1);
        setLikeString(simplify(initialLike).toString());
        setinitialState(!initialState);
        data = { isLike: initialState, value: initialLike };
        props.onPress = (data) => { return data; };
    };


    // useEffect(() => {
    //     props.onPress = (data) => { return null; };
    // }, [initialState]);


    //const iconRef =React.RefObject<Icon<IconProps>> React.createRef();

    return (
        <View style={{}}>
            <TouchableHighlight style={{}}>
                <TouchableOpacity onPress={handlerPress}>
                    <View
                        style={{
                            //borderWidth: 1,
                            borderColor: 'red',
                            padding: 5,
                            borderRadius: 99,
                            backgroundColor: 'rgba(112,112,112,0.27)',
                            flexDirection: 'row',
                            alignContent: 'center'
                        }}>
                        <Icon
                            fill={(initialState ? activeColor : inActiveColorIcon)}
                            name={(initialState ? 'heart' : 'heart-outline')}
                            width={dimensions} height={dimensions} />
                        <Text style={{ alignSelf: 'center', paddingLeft: 5, paddingRight: 10 }}>{likeString}</Text>
                    </View>
                </TouchableOpacity>
            </TouchableHighlight>
        </View>
    );
}

export default LikeComponent;
