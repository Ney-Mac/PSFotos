import { IconButton } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function BackButton({ goBack }) {
    return (
        <TouchableOpacity
            onPress={goBack}
            style={{
                position: 'absolute',
                top: getStatusBarHeight() / 10,
                right: 8
            }}
        >
            <IconButton size={32} iconColor="#1C1C1E" icon='close' />
        </TouchableOpacity>
    )
}