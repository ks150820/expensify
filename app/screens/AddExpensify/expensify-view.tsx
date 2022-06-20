
import React, { useState } from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import {styles} from './expensify-style';



const incomeData = [
    { label: 'Salary', value: 'salary' },
    { label: 'Others', value: 'other' }
  ];

  const expenceData = [
    { label: 'Food', value: 'food' },
    { label: 'Travel', value: 'travel' },
    { label: 'Entertainent', value: 'entertainent' },
    { label: 'Others', value: 'other' }
  ];


const HomeScreenView: React.FC<{}> = ({}) => {
    const [value,setValue] = useState('');
    const [activeTab,setActiveTav] = useState(1);
  return (
    <View>
      <View style={styles.header}>
        <Pressable onPress={()=>setActiveTav(1)} style={activeTab===1 ? styles.tabColor : styles.inc}>
          <Text style={activeTab===1 ? styles.textActive : styles.textNotActive} >Income</Text>
        </Pressable>
        <Pressable onPress={()=>setActiveTav(2)} style={activeTab===2 ? styles.tabColor : styles.exp}>
          <Text style={activeTab===2 ? styles.textActive : styles.textNotActive}>Expense</Text>
        </Pressable>
      </View>
      <View style={styles.body}>
        <View style={styles.fields}>
        <Text style={styles.labelText}>Type :</Text>
        <Dropdown data={activeTab===1 ? incomeData:expenceData}
        style={styles.dropDownMenu}
        containerStyle={{backgroundColor:'tomato'}}
        selectedTextStyle={{color:'black'}}
        placeholderStyle={{color:'black'}}
        labelField="label"
        valueField="value"
        placeholder='Type'
        maxHeight={120}
        activeColor='tomato'
        onChange={item => {
            setValue(item.value);
          }}
        />
        </View>
        <View style={styles.fields}>
        <Text style={styles.labelText}>Amount :</Text>
        <TextInput placeholderTextColor={'black'}  placeholder="Amount" keyboardType="numeric" style={styles.inputBox}/>
        </View>
        
      </View>
      <View style={styles.buttonContainer}>
      <Pressable style={styles.saveButton}>
          <Text style={styles.saveText}>Save</Text>
    </Pressable>
      </View>
    </View>
  );
};

export default HomeScreenView;
