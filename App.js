import {Text, View,Image,Linking} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ActivityIndicator, Button, SafeAreaView, ScrollView } from 'react-native-web';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
  const name = "Arafat Mamia"
  const title = "Contact me"
  const links = {
  github: 'SavinVadim1312',
  email: 'vadim@notjust.dev',
  // x: 'VadimNotJustDev',
};
  const contactMe = ()=>{
    Linking.openURL("mailto:arafatmamia001@gmail.com")
  }
  const renderIcons = () => {
	  return (
	    <View style={{ flexDirection: 'row', gap: 10, marginVertical: 10 }}>
	      {links.github && <FontAwesome6 name="github" size={24} color="black" />}
	      {links.x && <FontAwesome6 name="x-twitter" size={24} color="black" />}
	      {links.email && <FontAwesome6 name="at" size={24} color="black" />}
	    </View>
	  );
	};
 
  return (
      <SafeAreaProvider>
        <SafeAreaView>
    <View style={{flex:1,alignItems:'center'}}>
      <Image source={{
        uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg"}}
        style={{width:"100%",aspectRatio:16/9}}/>
      <Image 
      source={require('./assets/vadim.png')}
       style={{width:150,height:150,borderRadius:150, borderColor:'white', borderWidth:5,marginTop:-75}}/>
      <Text style={{fontSize:30,fontWeight:'bold'}}>{name}</Text>
      <Text>Founder of shopConnect</Text>
      {renderIcons()}
      <Button title={title} onPress={contactMe} />
      <ScrollView >
       <Text style={{ padding: 10, fontSize: 16 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
    aliquam sem et tortor consequat id porta nibh. Pellentesque nec
    nam aliquam sem. Placerat duis ultricies lacus sed. Non curabitur
    gravida arcu ac tortor dignissim convallis aenean. Amet nisl purus
    in mollis nunc. Vel elit scelerisque mauris pellentesque pulvinar
    pellentesque. Sagittis orci a scelerisque purus semper eget duis
    at tellus. Sed libero enim sed faucibus turpis in eu mi bibendum.
    Duis at consectetur lorem donec massa sapien faucibus et molestie.
    At ultrices mi tempus imperdiet nulla malesuada pellentesque elit
    eget. Purus sit amet volutpat consequat mauris nunc congue nisi
    vitae. Urna condimentum mattis pellentesque id nibh tortor id.
    Consequat id porta nibh venenatis. Lectus vestibulum mattis
    ullamcorper velit sed ullamcorper. Mauris a diam maecenas sed enim
    ut sem. Volutpat commodo sed egestas egestas fringilla phasellus.
    Turpis egestas integer eget aliquet nibh praesent tristique magna
    sit. Congue mauris rhoncus aenean vel elit scelerisque. Tellus
    integer feugiat scelerisque varius morbi enim. Consectetur a erat
    nam at. Bibendum arcu vitae elementum curabitur vitae nunc. Sit
    amet consectetur adipiscing elit. Rhoncus mattis rhoncus urna
    neque viverra justo. Malesuada pellentesque elit eget gravida.
    Vitae nunc sed velit dignissim sodales ut eu sem integer.
  </Text>
  </ScrollView>
    </View>
  </SafeAreaView>
  </SafeAreaProvider>
  )
}


