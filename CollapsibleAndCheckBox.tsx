import React, { useState } from 'react';
import {
    LayoutAnimation,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View
} from 'react-native';
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}



export const CollapsibleAndCheckBox = () => {
    const [active, setActive] = useState(null);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {[1, 2, 3, 4, 5].map((x, i) => (
                <Item key={x} active={active} i={i} setActive={setActive} />
            ))}
        </ScrollView>
    );
}
function Item({ i, active,setActive }) {
    const onDropDown = () => {
        LayoutAnimation.easeInEaseOut();
        setActive(i == active ? null : i);
    };
    const open = active == i;
    return (
        <TouchableOpacity style={styles.item} onPress={onDropDown} activeOpacity={1}>
            <View style={styles.row}>
                <Text style={styles.text}>List {i + 1}</Text>
            </View>
            {open &&
                [1, 2, 3].map(x => (
                    <View style={styles.checkBox}>
                        <Text key={x} style={styles.subItem}>Option {x}</Text>
                        <Checkbox/>
                    </View>
                    ))
               }
        </TouchableOpacity>
    );
}
function Checkbox(){
    const [check, setCheck] = useState(false)
    const onCheck = () => {
        LayoutAnimation.easeInEaseOut();
        setCheck(!check);
    };
    return(
        <TouchableOpacity onPress={onCheck} style={styles.box} >
            <Text style={styles.check}>{check === true ? 'X':''}</Text>
        </TouchableOpacity>  
    )
}
    


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        paddingHorizontal: 50,
        paddingTop: 5,
        backgroundColor:"#F07167",

    },
    item: {
        width: '100%',
        paddingHorizontal: 20,
        overflow: 'hidden',
        paddingVertical: 10,
        marginBottom: 5,
        borderWidth: 2,
        backgroundColor:'#FDFCDC',
        borderRadius:10,
        borderColor:'#780000'
    },
    subItem: {
        padding: 5,
        color:'black',
        textAlignVertical:'center'
    },
    row: {
        height:30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    checkBox:{
        height:40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth:1,
        borderBottomColor:'black'
    },
    box: {
        height:30,
        width:30,
        backgroundColor:'white',
        alignSelf:'center',
        borderWidth:1,
        borderColor:'black'
    },
    check: {
        width:28,
        height:28,
        fontSize:20,
        color:'#0081A7',
        textAlign:'center',
    },
    text: {
        color:'black',
        textAlignVertical:'center'
    },
})
