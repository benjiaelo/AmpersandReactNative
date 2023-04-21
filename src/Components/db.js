import React from "react";
import Profile from "../Screens/Profile";

const db = () => {
  const dataBase = [{ name: "Nana", role: "Horrors" }];
  return (
    <View>
      <FileList
        data={dataBase}
        renderItem={({ item }) => {
          return <Profile name={item.name} role={item.role} />;
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default db;
