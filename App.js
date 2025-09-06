import {Text, View,Image} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
export default function App() {
  return (
    <View style={{flex:1,alignItems:'center'}}>
      <Image source={{
        uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg"}}
        style={{width:"100%",aspectRatio:16/9}}/>
      <Image 
      source={require('./assets/vadim.png')}
       style={{width:150,height:150,borderRadius:150, borderColor:'white', borderWidth:5,marginTop:-75}}/>
      <Text style={{fontSize:30,fontWeight:'bold'}}>Arafat Mamia</Text>
      <Text>Founder of shopConnect</Text>
      <View style={{gap:10,flexDirection:'row',marginVertical:10}}>
       <FontAwesome6 name="github" size={24} color="black" />
       <FontAwesome6 name="x-twitter" size={24} color="black" />
       <FontAwesome6 name="at" size={24} color="black" />
      </View>
    </View>
  );
}


