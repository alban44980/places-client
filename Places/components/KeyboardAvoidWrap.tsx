
// import React from 'react';
// import {
//   Button,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableWithoutFeedback,
//   View,
//   Image,
//   ImageBackground,
//   Dimensions,ScrollView,TouchableOpacity
// } from 'react-native';

// const screenHeight = Dimensions.get('screen').height;
// const screenWidth = Dimensions.get('window').width;


// const KeyboardAvoidWrap = ({children}) => {

//   return (
//     <>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
//         style={{flex: 1}}>
//         <SafeAreaView style={styles.container}>
//           <ScrollView style={{paddingVertical:2}}>
//             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//               { children }
//             </TouchableWithoutFeedback>
//           </ScrollView>
//         </SafeAreaView>
//       </KeyboardAvoidingView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inner: {
//     padding: 24,
//     flex: 1,
//     justifyContent: 'flex-end',
//     paddingBottom:100
//   },
//   header: {
//     fontSize: 36,
//     marginBottom: 48,
//   },
//   input: {
//     height: 40,
//     borderColor: '#000000',
//     borderBottomWidth: 1,
//     marginBottom: 36,
//   },
//   btnContainer: {
//     backgroundColor: 'white',
//     marginTop: 12,
//   },
// });

// export default KeyboardAvoidWrap;