import { List, ListItem, ListItemText, Box, Typography, Checkbox } from "@mui/material";
import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";

const Transactions = () => {
    const {friends, expenses, currency} = useContext(AppContext);

    const calculateBalanceSheet = (expenses, friends) => {
        let balanceSheet = friends.reduce((acc,friend) => {
            acc[friend.id] = 0;
            return acc;
        },{})

        expenses.forEach((expense) => {
            const splitAmount = expense.amount / friends.length;
            balanceSheet[expense.friendId] += expense.amount - splitAmount;
            friends.forEach(friend => {
                if(friend.id !== expense.friendId){
                    balanceSheet[friend.id] -= splitAmount;
                }
            })
        })
        return balanceSheet;
    }

    const calculateTransactions = (balanceSheet, friends) => {
        let transactions = [];

        let debtors = Object.entries(balanceSheet)
        .filter(([_,balance])=> balance < 0)
        .map(([id,balance]) => ({
            id: parseInt(id),
            balance: Math.abs(balance)
        }));

        let creditors = Object.entries(balanceSheet)
        .filter(([_,balance])=> balance > 0)
        .map(([id,balance]) => ({
            id: parseInt(id),
             balance
        }));

        while(debtors.length > 0 && creditors.length > 0){
            const debtor = debtors[0];
            const creditor = creditors[0];

            const amount = Math.min(debtor.balance, creditor.balance);
            transactions.push({
                from: friends.find((friend) => friend.id === debtor.id)?.name,
                to: friends.find((friend) => friend.id === creditor.id)?.name,
                amount,
            })
            debtor.balance -= amount;
            creditor.balance += amount;

            if(debtor.balance === 0){
                debtors.shift();
            }
            if(creditor.balance === 0){
                creditors.shift();
            }
        }


        return transactions;

    };
    const balanceSheet = calculateBalanceSheet(expenses, friends);
    const transactions = calculateTransactions(balanceSheet, friends);

    return(
        <div className="section">
            <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>Transactions</Typography>
                <List>
                    {transactions.map((transaction) => (
                        <ListItem key={transaction.id}>
                            <Checkbox />
                            <ListItemText primary={`${transaction.from} give ${transaction.to}  ${transaction.amount.toFixed(2)} ${currency}`} />
                        </ListItem>
                    ))}
                </List>
                <Typography variant="h6" sx={{ mt: 4 }}>
                    Total Amount : {expenses.reduce((acc,expense) => acc + expense.amount,0).toFixed(2)} {currency}
                </Typography>
            </Box>
        </div>
    )

}
export default Transactions;