import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const BookCard = ({title,author,price,imageURL,onDeleteItem,onEditItem}) => {
  return (
    <View style={styles.container}>
      
      {/* Image Section */}
      <Image source={{uri:imageURL}} style={styles.coverImage}>

      </Image>
      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.bookName}>{title}</Text>
        <Text style={styles.AuthorName}>{author}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      {/* Delete and Edit Buttons */}
      <View style={styles.delEditContainer}>
        <TouchableOpacity style={styles.circleButton} onPress={onDeleteItem}>
          <AntDesign name="delete" size={20} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton} onPress={onEditItem}>
          <FontAwesome6 name="edit" size={20} color="#25a" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BookCard

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    backgroundColor:'#fff',
    borderRadius:10,
    padding:10,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:.1,
    shadowRadius:4,
    elevation:3,
    margin:10
  },
  coverImage:{
    height:120,
    width:"25%",
    borderRadius:8,
    resizeMode:"stretch"
  },
  detailsContainer:{
    flex:1,
    marginHorizontal:10,
    marginTop:10
  },
  bookName:{
    fontSize:16,
    fontWeight:"bold",
    color:"#000"
  },
  AuthorName:{
    fontSize:14,
    color:"#888",
    marginVertical:3
  },
  price:{
    fontSize:16,
    fontWeight:"bold",
    color:"#25a"
  },
  delEditContainer:{
    flexDirection:"row",
    alignItems:"center"
  },
  circleButton:{
    height:35,
    width:35,
    borderRadius:20,
    backgroundColor:"#eee",
    justifyContent:"center",
    alignItems:"center",
    marginStart:10
  }
})