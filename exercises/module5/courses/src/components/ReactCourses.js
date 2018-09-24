import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ListView, Image } from 'react-native';
import data from '../data/courses.json';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
const dataSource = ds.cloneWithRows(data);

export default class ReactCourses extends Component {
  static navigationOptions = {
      label: 'React Courses',
      icon: ({ tintColor }) => (
        <Icon
          name={'home'}
          size={26}
          style={{ color: tintColor }} />
      )
  }

  render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>React Courses</Text>
            <ListView
              dataSource={dataSource}
              renderRow={(rowData) =>
                <View>
                  <Text>{rowData.title}</Text>
                  <Text>{rowData.description}</Text>
                  <Text>{rowData.views}</Text>
                  <Text>{rowData.link}</Text>
                  <Image source={{uri: rowData.image}}
                   style={{width: 400, height: 200}}
                   />
                </View>
              }
             />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  icon: {
    width: 26,
    height: 26,
  },
});

// Sesssion 2
// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Button, ListView, Image } from 'react-native';
// import data from '../data/courses.json';

// const ds = new ListView.DataSource({
//   rowHasChanged: (r1, r2) => r1 !== r2
// });
// const dataSource = ds.cloneWithRows(data);

// export default class ReactCourses extends Component {
//   static navigationOptions = {
//     title: 'React Courses',
//   }

//   render() {
//       const { navigate } = this.props.navigation;
//       console.log(data);
//       return (
//         <View style={styles.container}>
//           <Button
//             onPress={() => navigate('NativeCourses')}
//             title='React Native Courses'
//             />
//             <ListView
//               dataSource={dataSource}
//               renderRow={(rowData) =>
//                 <View>
//                   <Text>{rowData.title}</Text>
//                   <Text>{rowData.description}</Text>
//                   <Text>{rowData.views}</Text>
//                   <Button
//                    title="Link to course"
//                    />
//                   <Text>{rowData.link}</Text>
//                   <Image source={{uri: rowData.image}}
//                    style={{width: 400, height: 200}}
//                    />
//                 </View>
//               }
//              />
//         </View>
//       );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//     paddingTop: 10,
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
// });

// Sesssion 1
// import React, {Component} from 'react';
// import {StyleSheet, Text, View,Button} from 'react-native';

// export default class ReactCourses extends Component {
//   static navigationOptions = {
//     title: 'React Courses',
//   }
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={styles.container}>
//       <Text style={styles.welcome}>
//         Welcome to React Courses
//       </Text>
//       <Button
//         onPress={() => navigate('NativeCourses')}
//         title='React Native Courses'
//         />
//     </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },

// });