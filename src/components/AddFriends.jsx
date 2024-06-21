import { useContext, useState } from "react"
import { AppContext } from "../contexts/AppContext"
import {
    Button, TextField, Typography,
    List, ListItem, ListItemText,
    IconButton, Box
} from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"

const AddFriends = () => {
    const { friends, addFriends, editFriends, deleteFriends } = useContext(AppContext);
    const [name, setName] = useState("");
    const [editing, setEditing] = useState(null);



    const handleAdd = () => {
        if (name.trim()) {
            const updatedName = {
                id: Date.now(),
                name,
                editing
            }
            addFriends(updatedName);
            setName("");
            setEditing(null)
        }
    };

    const handleEdit = (friend) => {
        setName(friend.name);
        setEditing(friend.id);
    };

    const handleSave = () => {
        if (name.trim()) {
            const updatedName = {
                id: editing,
                name,
                editing: null
            }
            editFriends(updatedName);
            setName("");
            setEditing(null);
        }
    }



    return (
        <div className="sections">
            <Box>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Add Friends
                </Typography>
                <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                    <TextField
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        variant="outlined"
                        sx={{ mr: 2 }}
                    />
                    <Button variant="contained" color="primary" onClick={editing ? handleSave : handleAdd}>
                        {editing ? "Save" : "Add"}
                    </Button>
                </Box>
                <List>
                    {friends.map((friend) => (
                        <ListItem key={friend.id} secondaryAction={
                            <>
                                <IconButton key="edit" edge="end" aria-label="edit" onClick={() => handleEdit(friend)}>
                                    <Edit />
                                </IconButton>
                                <IconButton key="delete" edge="end" aria-label="delete" onClick={() => deleteFriends(friend.id)}>
                                    <Delete />
                                </IconButton>
                            </>
                        }>
                            <ListItemText primary={friend.name} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </div>
    )
}

export default AddFriends
