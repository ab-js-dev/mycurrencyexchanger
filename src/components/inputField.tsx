import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputFieldProps {
    value: string;
    onChangeText: (text: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChangeText }) => {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder="Enter text..."
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default InputField;
