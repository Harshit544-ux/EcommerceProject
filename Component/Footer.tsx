import React from 'react';
import { View,StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View
      style={styles.footerContainer}
    >
      {/* <Text style={styles.footerText}>{'\u00A9'} Powered By XYZCompany</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    height: 100,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 20,
  },
  footerText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});

export default Footer;
