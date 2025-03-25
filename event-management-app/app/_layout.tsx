import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="landing" 
      options={{
        headerShown: false,
        
      }}/>
      <Stack.Screen name="SignUp"
            options={{
        headerTransparent: true,
        headerTitle: '',
        
   
      }}/>
    
    </Stack>
  );
}
