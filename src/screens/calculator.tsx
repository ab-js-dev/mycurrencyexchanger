import React from 'react';
import { View, Text } from 'react-native';
import FlagSelect from '../components/flagSelect';

const CalculatorScreen: React.FC = () => {
    return (
        <View>
            <FlagSelect text='You send exactly' />
        </View>
    );
};

export default CalculatorScreen;
