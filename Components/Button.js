import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export const Button = ({ btnStyle, text, clicked }) => {
    const [active, setActive] = useState({});

    return (
        <TouchableOpacity style={[btnStyle.btn, { backgroundColor: active.bg }]} >
            <Text style={[btnStyle.btnFont, { color: active.color }]}>{text}</Text>
        </TouchableOpacity>
    )
}
