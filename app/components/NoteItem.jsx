import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useRef, useState } from "react";
const NoteItem = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);
  const inputRef = useRef(null);

  const handleSave = () => {
    if(editedText.trim() === '') return;
    onEdit(note.$id, editedText)
    setIsEditing(false);
  }

  return (
    <View style={styles.noteItem}>
      {isEditing ? (
        <TextInput
          ref={inputRef}
          style={styles.input}
          value={editedText}
          onChangeText={setEditedText}
          autoFocus
          onSubmitEditing={handleSave}
          returnKeyType="done"
        ></TextInput>
      ) : (
        <Text style={styles.noteText}>{note.text}</Text>
      )}
      <View style={styles.actions}>
        {isEditing ? (
          <TouchableOpacity
            onPress={() => {
              handleSave();
              inputRef.current?.blur();
            }}
          >
            <Text style={styles.edit}>✅</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsEditing(true)}>
            <Text style={styles.edit}>📝</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => onDelete(note.$id)}>
          <Text style={styles.edit}>❌</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "lightgrey",
    padding: 15,
    borderRadius: 15,
    boxShadow: "10px 4px 8px rgba(0, 0, 0, 0.2)",
    marginVertical: 5,
  },
  noteText: {
    fontSize: 20,
  },
  delete: {
    fontSize: 18,
    color: "red",
  },
  actions: {
    flexDirection:'row',
    justifyContent: 'center',
  },
  edit: {
    fontSize: 18,
    marginRight: 10,
    color: 'blue',
  }
});

export default NoteItem;
