import React, { Fragment } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import style from "../../styles";
import TextInput from "../../components/TextInput";

const Modal = ({ showModal, onSave, updateField }) => {
  return (
    <TouchableHighlight
      style={style.contentModal}
      onPress={e => showModal(false)}
    >
      <TouchableHighlight
        underlayColor="rgba(255,255,255,0.7)"
        style={style.modal}
        onPress={e => {}}
      >
        <Fragment>
          <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 15 }}>
            Crear Lugar
          </Text>
          <TextInput
            updateField={updateField}
            styleCustom={{ color: "#000" }}
            name="title"
            placeholder="Nombre del lugar"
            placeholderTextColor="#00000079"
          />
          <View style={style.row}>
            <TouchableHighlight
              underlayColor="transparent"
              style={[style.btn, { flex: 1, marginRight: 10 }]}
              onPress={e => {
                showModal(false);
              }}
            >
              <Fragment>
                <Text style={style.textBtn}>Cancelar</Text>
              </Fragment>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="transparent"
              style={[style.btn, { flex: 1 }]}
              onPress={e => {
                onSave(true);
              }}
            >
              <Fragment>
                <Text style={style.textBtn}>Guardar</Text>
              </Fragment>
            </TouchableHighlight>
          </View>
        </Fragment>
      </TouchableHighlight>
    </TouchableHighlight>
  );
};

export default Modal;
