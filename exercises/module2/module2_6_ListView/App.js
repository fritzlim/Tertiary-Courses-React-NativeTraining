// Module 2: UI Components
// ListView

import React from 'react'
import {ScrollView,Text,} from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <FlatList
           data={[
             {key: 'Apple'},
             {key: 'Orange'},
             {key: 'Banana'},
             {key: 'Kiwi'},
             {key: 'Pipeapple'},
             {key: 'Mango'},
             {key: 'Durian'},
             {key: 'Peach'},
           ]}
           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
         />
      </View>

      const styles = StyleSheet.create({
          container: {
            flex: 1,
            paddingTop: 22
          },
          item: {
            padding: 10,
            fontSize: 18,
            height: 44,
          },
        })
    )
  }
}
