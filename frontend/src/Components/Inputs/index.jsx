import {
    View,
    TextInput,
} from 'react-native'



export const Inputs = ({placeholder, bgColor, width, height}) => {

    return (
        <>
            <View>
                <TextInput 
                    placeholder={placeholder}
                    style={{
                        backgroundColor: bgColor,
                        width: width,
                        height: height,
                        borderRadius: 12,
                        padding: 14,
                        marginBottom: 7,
                        marginTop: 7,
                        color: '#EAEAEA',
                        fontSize: 15,
                        fontWeight: 'bold',
                    }}
                />
            </View>
        </>
    )
}