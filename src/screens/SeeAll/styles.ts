import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const { Bold } = theme.fonts

export const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
    },

    container: {
        top: 7,
        marginHorizontal: 20,
    },

    header: {
        flexDirection: 'row',
        marginTop: 60,
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between',
    },

    title: {
        fontSize: 48,
        fontFamily: theme.fonts.Bold,
        color: 'black',
    },

    searchContainer: {
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
