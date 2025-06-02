import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OrderIcon from 'react-native-vector-icons/FontAwesome';
import ArrowRightIcon from 'react-native-vector-icons/AntDesign';
import { accountSettingData } from '../MockData/AccountSettingsData';

const AccountItem = () => {
    return (
        <View style={styles.listContainer}>
            {accountSettingData.map((item) => (
                <View key={item.id} style={{
                    flexDirection: "row", alignItems: "center", padding: 10, gap: 10, justifyContent: 'space-between', width: '100%', borderBottomWidth: 0.5,
                    borderBottomColor: '#ccc',
                }}>
                    {/* first Div  */}
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, padding: 8 }}>
                        <OrderIcon name="shopping-basket" size={20} color="#1F41BB" />
                        <Text style={{ fontSize: 16 }}>{item.title}</Text>
                    </View>

                    {/* second Div  */}
                    <View>
                        <ArrowRightIcon name="right" size={20} color="#1F41BB" />
                    </View>
                </View>
            ))}

        </View>
    )
}
export default AccountItem;

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 5,
        width: '100%',
        paddingHorizontal: 2,  
    }
});