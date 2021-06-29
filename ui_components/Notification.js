import React, {Component} from 'react'
import { View, Text, Modal, TextInput, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global.js';


class Notification extends Component {

    constructor()
    {
        super();
        this.state={
            show:false
        }
    }

    render() {
        return(

            <View style={globalStyles.container}>

            <View style={globalStyles.topbar}>

                    <View style={globalStyles.storeIcon}>
                        <Image style={globalStyles.storeImage} source={require("../assets/Image/pic.png")} />
                        <Text style={globalStyles.storeName}> Mukul Digital store </Text>
                    </View>

            
             <TouchableOpacity onPress={()=>{this.setState({show:true})}} style={globalStyles.bellIcon}>
                 <Image style={globalStyles.bellImage} source={require('../assets/Image/bell.png')} />
             </TouchableOpacity>

             </View>      

             <View style={globalStyles.searchBar}>
                <TextInput style={globalStyles.search} placeholder="Search" />

                <TouchableOpacity style={globalStyles.soundIcon}>
                    <Image style={globalStyles.soundImage} source={require("../assets/Image/sound.png")} />
                </TouchableOpacity>
             </View>
  

             <View>
                
                <Modal 
                     animationType="fade"
                     transparent={true}
                     visible={this.state.show}
                     onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}>
                    
                    <View style={globalStyles.panel}>

                        <View style={globalStyles.panelBox}>
                         
                          <Text style={globalStyles.accountTasks}>Account Tasks</Text>
                          
                          <View style={globalStyles.accountContent}>
                              <View style={globalStyles.accountIcon}></View>
                              <View style={globalStyles.accountName}>
                                  <Text>Hitendra Singh Tomar</Text>
                                  <Text>$ 29000</Text>
                              </View>
                          </View>
                         
                          <View style={globalStyles.accountContent}>
                              <View style={globalStyles.accountIcon}></View>
                              <View style={globalStyles.accountName}>
                                  <Text>Sunny Singh Tomar</Text>
                                  <Text>$ 39000</Text>
                              </View>
                          </View>

                          <View style={globalStyles.accountContent}>
                              <View style={globalStyles.accountIcon}></View>
                              <View style={globalStyles.accountName}>
                                  <Text>Lucky</Text>
                                  <Text>$ 49000</Text>
                              </View>
                          </View>
                          
                          <TouchableOpacity onPress={()=>{this.setState({show:false})}} >
                               <Text style={globalStyles.productUpdates}>Product Updates</Text>
                          </TouchableOpacity>

                          <View style={globalStyles.productContent}>
                              <View style={globalStyles.productIcon}/>
                              <View style={globalStyles.productName}>
                                  <Text>Hitendra Singh Tomar</Text>
                                  <Text>$ 29000</Text>
                              </View>
                          </View>

                          <View style={globalStyles.productContent}>
                              <View style={globalStyles.productIcon}/>
                              <View style={globalStyles.productName}>
                                  <Text>Sunny Singh Tomar</Text>
                                  <Text>$ 39000</Text>
                              </View>
                          </View>

                          <View style={globalStyles.productContent}>
                              <View style={globalStyles.productIcon}/>
                              <View style={globalStyles.productName}>
                                  <Text>Lucky</Text>
                                  <Text>$ 49000</Text>
                              </View>
                          </View>

                        </View>
                    </View>
                </Modal>

                </View>
                
            </View>

            
        )

    }

}

export default Notification;