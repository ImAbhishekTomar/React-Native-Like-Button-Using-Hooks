import React from 'react';
import { SafeAreaView, Text, View, KeyboardAvoidingView, Platform, ImageBackground, Image, Alert } from 'react-native';
import { Layout, ThemedComponentProps, ThemeType, withStyles, Input, Icon, Button } from '@ui-kitten/components';
import LikeComponent, { DataResult } from './like.component';
import Snackbar from 'react-native-snackbar';

export interface ComponentProps { }
interface Props {

}
interface State { }

class TestComponent extends React.Component<Props, State> {

    handler = (data: DataResult) => {
        Snackbar.show({ text: `is like ${data.isLike} and totla like is ${data.value}` });
    }

    public render(): React.ReactNode {
        return (
            <Layout style={{ flex: 1, borderWidth: 10, borderColor: 'yellow' }}>
                <SafeAreaView style={{
                    alignContent: 'center', alignSelf: 'center',
                    marginTop: 100
                }}>
                    <LikeComponent
                        onPress={(x) => {
                            Alert.alert(JSON.stringify(x));
                        }}
                        initialLike={5} width={30} height={30} initialState={false} />
                </SafeAreaView>
            </Layout>
        );
    }
}

export const TestScreen = withStyles(TestComponent, (theme: ThemeType) => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}));
