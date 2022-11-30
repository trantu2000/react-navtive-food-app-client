import React, { useState } from "react";
import { View } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

const radio_props = [
  { label: "param1", value: 0 },
  { label: "param2", value: 1 },
  { label: "param3", value: 2 },
];

const RadioButtonCustom = () => {
  const [state,setState] = useState(0)
  return (
    <View>
      <RadioForm
        radio_props={radio_props}
        initial={1}
        onPress={(value) => {
          setState( value );
        }}
        
      />
    </View>
  );
};
export default RadioButtonCustom;
