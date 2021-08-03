import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const { primary } = theme.colors
const { Regular, Bold } = theme.fonts

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '85%',
    },

    image: {
        width: '100%',
        height: '100%',
    },

    content: {
        height: '100%',
        marginHorizontal: 30,
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 90,
    },

    title: {
        fontSize: 48,
        fontFamily: Bold,
        color: 'white',
    },

    subTitle: {
        fontSize: 24,
        fontFamily: Regular,
        color: 'white',
    },

    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        paddingTop: 3,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    trending: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 30,
        right: 0,

        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,
        height: 20,
        backgroundColor: primary,
        paddingHorizontal: 5,
    },

    trendingText: {
        fontSize: 14,
        fontFamily: Bold,
        color: 'white',
    },
})
