
import { View, Image, StyleSheet } from 'react-native'

const Card = ({img, color}: {img: any, color: string}) => {

  return (
    <View style={[{ backgroundColor: color }, style.container]}>
        <Image 
        source={{ uri: img }} 
        resizeMode="contain"
        style={{ width: 39, height: 39 }} 
      />
    </View>
  )
}

const style = StyleSheet.create({
    container: {
       width: 69.58,
       height: 72.95,
       justifyContent: 'center',
       alignItems: 'center', 
       borderRadius: 20
    }
})

export default Card