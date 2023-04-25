// // // // //we are going to cover some of the core concepts in react
// // // // //jsx, components,props and state
// // // // //to read deeper we are required to read depeer in react documentation
 
// // // // import React from 'react';
// // // // import {Text} from 'react-native';
// // // // //Your component starts as a function:
// // // // const Cat =()=>{
// // // //     return(
// // // //         <Text>Hello my cat</Text>
// // // //     );
// // // // };
// // // // //This is one of many ways to export your component. 
// // // // //This kind of export works well with the Snack Player. However, depending on your app’s file structure, you might need to use a different convention. 
// // // // //This handy cheatsheet on JavaScript imports and exports can help.

// // // // export default Cat;
// // // // //writting my first react application using text components
// // // // //be default react components are class based or function based and the function or classes should start with a capital letter
// // // // // Jsx is the same as html but the structure and functions are different. ie 
 

// // // // import React from 'react-native';
// // // // import {Text} from 'react-native';
// // // // const App=()=>{
// // // //     const name='Maru';
// // // //     return(
// // // //         <Text>
// // // //             Hello my world, how are you , {name}
// // // //         </Text>
// // // //     );
// // // // };
// // // // //Any JavaScript expression will work between curly braces,
// // // // including function calls like {getFullName("Rum", "Tum", "Tugger")}:
// // // import React from 'react';
// // // import {Text} from 'react-native';

// // // const getFullName = (firstName, secondName, thirdName) => {
// // //   return firstName + ' ' + secondName + ' ' + thirdName;//concatenation,,we are writting two function then embedding the two functions together
// // //   //since we are calling function getfullname in the app function
// // // };

// // // const Cat = () => {
// // //   return <Text>Hello, I am {getFullName('Rum', 'Tum', 'Tugger')}!</Text>;
// // // };

// // // export default Cat;
// // //Because JSX is included in the React library, it won’t work if you don’t have 
// // //import React from 'react' at the top of your file!

// // //we have see the react core components like view,scrollview,text etc
// // //so we are going to learn react custom components which comprises of a group of react core components

// // import React from 'react';
// // import {Text, TextInput, View} from 'react-native';

// // const Cat = () => {
// //   return (
// //     <View>
// //       <Text>Hello, I am...</Text>
// //       <TextInput
// //         style={{
// //           height: 40,
// //           borderColor: 'gray',
// //           borderWidth: 1,
// //         }}
// //         defaultValue="Name me!"//give the text in the text button
// //       />
// //     </View>
// //   );
// // };

// // export default Cat;
// // //If you’re familiar with web development, <View> and <Text> might remind you of HTML!
// // // You can think of them as the <div> and <p> tags of application development.

// import React from 'react-native';
// import {Text,View} from 'react-native';

// const Cat=()=>{
//     return(
//         <Text>
//             Welcome sir or Madam
//         </Text>
//     );
// };

// const Caffe=()=>{
//     return(
//         <View>
//             <Text>
//                 Hey how are you
//             </Text>
//             <Cat/>//am calling the function in the caffe function
//             <Cat/>//so js allows OOP
//             <Cat/>
//         </View>
//     );
// };
// //here caffe component is a parent component bcoz it renders another component ie cat
// //cat is a child component bcoz it is being rendered by the parent component

// export default Caffe;

//Props is short for “properties”. Props let you customize React components.
// For example, here you pass each <Cat> a different name for Cat to render:

// import React from 'react';
// import {Text, View} from 'react-native';

// const Cat = props => {
//   return (
//     <View>
//       <Text>Hello, I am {props.name}!</Text>
//     </View>
//   );
// };

// const Cafe = () => {
//   return (
//     <View>
//       <Cat name="Maru" />
//       <Cat name="Jellylorum" />
//       <Cat name="Spot" />
//     </View>
//   );
// };

// export default Cafe;
//Most of React Native’s Core Components can be customized with props, too. 
//For example, when using Image, you pass it a prop named source to define what image it shows:
// import React from 'react';
// import {Text, View, Image} from 'react-native';

// const CatApp = () => {
//   return (
//     <View>
//       <Image
//         source={{
//           uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
//         }}
//         style={{width: 200, height: 200}}
//         //so every data type must be passed in double curly brackets apart from string
//       />
//       <Text>Hello, I am your cat!</Text>
//     </View>
//   );
// };
// //source is a prop component used to customise images in react
// export default CatApp;
//Image has many different props, including style, 
//which accepts a JS object of design and layout related property-value pairs.
//Notice the double curly braces {{ }} surrounding style‘s width and height. 
//In JSX, JavaScript values are referenced with {}. 
//This is handy if you are passing something other than a string as props, like an array or number: <Cat food={["fish", "kibble"]} age={2} />. 
//However, JS objects are also denoted with curly braces: {width: 200, height: 200}. Therefore, to pass a JS object in JSX,
// you must wrap the object in another pair of curly braces: {{width: 200, height: 200}}


//You can build many things with props and the Core Components Text, Image, and View!
// But to build something interactive, you’ll need state.

//While you can think of props as arguments you use to configure how components render, state is like a component’s personal data storage. 
//State is useful for handling data that changes over time or that comes from user interaction. State gives your components memory!

// import React, {useState} from 'react';
// import {Button, Text, View} from 'react-native';

// const Cat = props => {
//   const [isHungry, setIsHungry] = useState(true);

//   return (
//     <View>
//       <Text>
//         I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
//       </Text>
//       <Button
//         onPress={() => {
//           setIsHungry(false);
//         }}
//         disabled={!isHungry}
//         title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
//       />
//     </View>
//   );
// };

// const Cafe = () => {
//   return (
//     <>
//       <Cat name="Munkustrap" />
//       <Cat name="Spot" />
//     </>
//   );
// };

// export default Cafe;
//You can use useState to track any kind of data: strings, numbers, Booleans, arrays, objects. 
// For example, you can track the number of times a cat has been petted with const [timesPetted, setTimesPetted] = useState(0)!
// it creates a “state variable” with an initial value—in this case the state variable is isHungry and its initial value is true
// it creates a function to set that state variable’s value—setIsHungry
// It doesn’t matter what names you use. But it can be handy to think of the pattern as [<getter>, <setter>] = useState(<initialValue>).

// Now, when someone presses the button, onPress will fire, calling the setIsHungry(false). 
// This sets the state variable isHungry to false.
//  When isHungry is false, the Button’s disabled prop is set to true and its title also changes:

//text input

// import React, {useState} from 'react';
// import {Text, TextInput, View} from 'react-native';

// const PizzaTranslator = () => {
//   const [text, setText] = useState('');
//   return (
//     <View style={{padding: 10}}>
//       <TextInput
//         style={{height: 40}}
//         placeholder="Type here to translate!"
//         onChangeText={newText => setText(newText)}
//         defaultValue={text}
//       />
//       <Text style={{padding: 10, fontSize: 42}}>
//         {text
//           .split(' ')
//           .map(word => word && '🍕')
//           .join(' ')}
//       </Text>
//     </View>
//   );
// };

// export default PizzaTranslator;

//i have by passed scroll view functions because it is easy you use it to enable scroll dow the app or web page

//using list views
//  generally if you want to present your data you either use flatlist or sectionlist
//The FlatList component displays a scrolling list of changing, but similarly structured, data.
//FlatList works well for long lists of data, where the number of items might change over time.
// Unlike the more generic ScrollView, 
//the FlatList only renders elements that are currently showing on the screen, not all the elements at once.

// import React from 'react';
// import {FlatList, StyleSheet, Text, View} from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22,
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

// const FlatListBasics = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={[
//           {key: 'Devin'},
//           {key: 'Dan'},
//           {key: 'Dominic'},
//           {key: 'Jackson'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//         ]}
//         renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//       />
//     </View>
//   );
// };

// export default FlatListBasics;

// If you want to render a set of data broken into logical sections, maybe with section headers,
//  similar to UITableViews on iOS, then a SectionList is the way to go
import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
          {
            title: 'J',
            data: [
              'Jackson',
              'James',
              'Jillian',
              'Jimmy',
              'Joel',
              'John',
              'Julie',
            ],
          },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
 };

export default SectionListBa

// One of the most common uses for a list view is displaying data that you fetch from a server.
//  To do that, you will need to learn about networking in React Native.


// TROUBLESHOOTING
// These are some common issues you may run into while setting up React Native.
//  If you encounter something that is not listed here, try searching for the issue in GitHub.

//PROBLEMS ENCOUNTERED WHILE DEVELOPING REACT NATIVE APPLICATIONS
// 1 Port already in use
    //The Metro bundler runs on port 8081. If another process is already using that port, you can either terminate that process,
    // or change the port that the bundler uses.
 //Run the following command to find the id for the process that is listening on port 8081
//  sudo lsof -i :8081 THEN kill -9 <PID>

//On Windows you can find the process using port 8081 using Resource Monitor and stop it using Task Manager.



//you can build your first reactive application after downloading node.js or you go online and use SNACK


//ok react native , you can  use expo go quick start or react native cli or xcode to go with the terminal