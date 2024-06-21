import { AppContext } from "../contexts/AppContext";
import {
    List, ListItem, ListItemText,
    IconButton, Box, Typography,
    Button, TextField, FormControl, Select, MenuItem, InputLabel
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useContext, useState } from "react";


const Expenses = () => {
    const { friends, expenses,
        addExpenses, editExpenses,
        deleteExpenses, currency } = useContext(AppContext);

    const [friendId, setFriendId] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [editing, setEditing] = useState(null);

    const handleAdd = () => {
        if (friendId.toString().trim() && description.trim() && amount.trim()) {
            const updatedExpense = {
                id: Date.now(),
                friendId,
                description: description,
                amount: parseFloat(amount),
                editing
            }
            addExpenses(updatedExpense);
            setFriendId("");
            setDescription("");
            setAmount("");
            setEditing(null);
        }
    }

    const handleEdit = (expense) => {
        setFriendId(expense.friendId);
        setDescription(expense.description);
        setAmount(expense.amount);
        setEditing(expense.id);
    }

    const handleSave = () => {
        if (friendName.toString().trim() && description.trim() && amount.trim()) {
            const updatedExpense = {
                id: editing,
                friendId,
                description: description,
                amount: parseFloat(amount)
            }
            editExpenses(updatedExpense);
            setFriendId("");
            setDescription("");
            setAmount("");
            setEditing(null);
        }
    }
    return (
        <div className="section">
            <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>Add Friend</Typography>
                <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                    <FormControl variant="outlined" sx={{ mr: 2, minWidth: 120 }}>
                        <InputLabel>Friends</InputLabel>
                        <Select label="Friends" value={friendId} onChange={e => setFriendId(e.target.value)}>
                            {friends.map((friend) => (
                                <MenuItem key={friend.id} value={friend.id}>
                                    {friend.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        variant="outlined"
                        sx={{ mr: 2 }}
                    />
                    <TextField
                        label="Amount"
                        value={amount}
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                        variant="outlined"
                        sx={{ mr: 2 }}
                    />
                    <Button variant="contained" color="primary" onClick={editing ? handleSave : handleAdd}>
                        {editing ? "Save" : "Add"}
                    </Button>
                </Box>
                <List>
                    {expenses.map((expense) => (
                        <ListItem
                            key={expense.id}
                            secondaryAction={
                                <>
                                    <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(expense)}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteExpenses(expense.id)}>
                                        <Delete />
                                    </IconButton>
                                </>
                            }>
                            <ListItemText primary={`${friends.find((friend) => friend.id === expense.friendId)?.name} - ${expense.description} - ${expense.amount} ${currency}`} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </div>
    )
}

export default Expenses;
