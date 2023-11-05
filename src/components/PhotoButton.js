import { useState, useEffect } from 'react';
import { TouchableOpacity, Image, Dimensions } from 'react-native';

export default function PhotoButton({ source }) {
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('screen').width);

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
            'change',
            ({ screen }) => {
                setScreenWidth(screen.width);
            },
        );
        return () => subscription?.remove();
    });

    return (
        <TouchableOpacity activeOpacity={0.7} >
            <Image
                source={source}
                style={{
                    width: (screenWidth / 3) - 10,
                    height: (screenWidth / 3),
                    margin: 3
                }}
            />
        </TouchableOpacity>
    )
}