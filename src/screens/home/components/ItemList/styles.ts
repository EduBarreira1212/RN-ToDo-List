import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFF',
        minHeight: 82,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        padding: 19,
      },
      textContainer: {
        flex: 6,
        gap: 5,
      },
      actionsContainer: {
        flex: 4,
        gap: 25,
        flexDirection: 'row',
        justifyContent: 'flex-end'
      },
});

export default styles;