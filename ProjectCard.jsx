import { Image, View, Text } from 'react-native';

export default function ProjectCard({ image, name }) {
  return (
    <View>
      <Image
        source={image}
        style={{ height: 150, width:150, borderRadius: 10 }}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          color: 'dimgray',
          marginTop: 10,
        }}
      >
        {name}
      </Text>
    </View>
  );
}
