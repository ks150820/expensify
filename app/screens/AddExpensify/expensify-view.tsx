import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './expensify-style';



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

interface Props {
  onClick: any
}


const HomeScreenView: React.FC<Props> = ({ onClick }) => {
  const [value, setValue] = useState('');
  const [activeTab, setActiveTav] = useState(1);
  const [amount, setAmount] = useState('');
  const [errorMsg, setErrorMesg] = useState('');

  const handleSaveButton = () => {
    if (value.length === 0 && amount.length === 0) {
      setErrorMesg("Please fill the 'Type' & 'Amount'")
    } else if (amount.length === 0) {
      setErrorMesg("Please enter amount");
    } else if (value.length === 0) {
      setErrorMesg("Please select atleast one 'Type'");
    } else {
      onClick(activeTab, { type: value, amount: parseInt(amount) })
    }
  }

  const handleOnChane = (text: string) => {
    setErrorMesg('');
    setAmount(text);
  }

  return (
    <View style={styles.component}>
      <View style={styles.header}>
        <Pressable onPress={() => setActiveTav(1)} style={activeTab === 1 ? styles.tabColor : styles.inc}>
          <Text style={activeTab === 1 ? styles.textActive : styles.textNotActive} >Income</Text>
        </Pressable>
        <Pressable onPress={() => setActiveTav(2)} style={activeTab === 2 ? styles.tabColor : styles.exp}>
          <Text style={activeTab === 2 ? styles.textActive : styles.textNotActive}>Expense</Text>
        </Pressable>
      </View>
      <View style={styles.body}>
        <View style={styles.fields}>
          <Text style={styles.labelText}>Type :</Text>
          <Dropdown data={activeTab === 1 ? incomeData : expenceData}
            style={styles.dropDownMenu}
            containerStyle={{ backgroundColor: 'tomato' }}
            selectedTextStyle={{ color: 'black' }}
            activeColor='tomato'
            labelField="label"
            valueField="value"
            placeholder='Type'
            placeholderStyle={{ color: "gray" }}
            maxHeight={120}
            onChange={item => {
              setValue(item.value);
            }}
          />
        </View>
        <View style={styles.fields}>
          <Text style={styles.labelText}>Amount :</Text>
          <TextInput placeholder="Amount" keyboardType="numeric" value={amount} onChangeText={(text) => handleOnChane(text)} style={styles.inputBox} placeholderTextColor="gray" />
        </View>
        <View>
          {errorMsg.length > 0 && <Text style={styles.errorMessage}>*{errorMsg}</Text>}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.saveButton} onPress={handleSaveButton}>
          <Text style={styles.saveText}>Save</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreenView;
