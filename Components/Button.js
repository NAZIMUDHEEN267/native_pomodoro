import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export const Button = ({ btnStyle, text, clicked }) => {
    const [active, setActive] = useState({});

    return (
        <TouchableOpacity style={[btnStyle.btn, { backgroundColor: clicked }]} >
            <Text style={[btnStyle.btnFont, clicked === "transparent" ? {color: "#888"} : {color: "#222"}]}>{text}</Text>
        </TouchableOpacity>
    )
}
