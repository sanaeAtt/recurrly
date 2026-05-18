import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text> 
      <Link href="/sign_up" className=" mt-4  bg-primary text-lg text-white font-bold px-4 py-2 rounded">
        Sign Up
      </Link>
    </View>
  );
}