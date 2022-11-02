import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export const Button = ({ btnStyle, text, clicked }) => {
    const [active, setActive] = useState({
        bg: "transparent",
        color: "#777"
    });

    if (clicked) {
        setActive(clicked);
    } else {
        setActive({
            bg: "transparent",
            color: "#777"
        })
    }

    return (
        <TouchableOpacity style={[btnStyle.btn, { backgroundColor: active.bg }]} >
            <Text style={[btnStyle.btnFont, { color: active.color }]}>{text}</Text>
        </TouchableOpacity>
    )
}
