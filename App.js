import React, { useCallback, useState } from "react";
import { View, Text, Button } from "react-native";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
const App = () => {
  const [text, settext] = useState("");
  const [Data, setData] = useState([]);
  const Add = () => {
    const New = (Data) => [...Data, text];
    setData(New);
  };
  const Remove = () => {
    const New = Data.filter((cv) => cv != text);
    setData(New);
  };
  return (
    <View style={{ top: "6%", alignItems: "center" }}>
      <Text>Welcome</Text>
      <View>
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            padding: 10,
            width: 250,
            textAlign: "center",
          }}
          placeholder="Enter your Email"
          onChangeText={settext}
        />
        {/* <Button/> */}
        <TouchableOpacity onPress={() => Add()}>
          <View
            style={{
              margin: 20,
              backgroundColor: "cyan",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Add Data</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Remove()}>
          <View
            style={{
              margin: 20,
              backgroundColor: "cyan",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Remove Data</Text>
          </View>
        </TouchableOpacity>
        <FlatList
          data={Data}
          keyExtractor={({ item, index }) => index}
          renderItem={({ item, index }) => (
            <View key={index}>
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default App;
