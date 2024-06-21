import { useState } from "react";
import { Tabs,Tab,Box } from "@mui/material";
import AddFriends from "./AddFriends";
import Expenses from "./Expenses";
import Transactions from "./Transactions";

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState(0); 

    return(
        <Box>
            <Tabs value={activeTab} onChange={(e,value) => setActiveTab(value)}>
                <Tab label="Add Friends" />
                <Tab label="Expenses" />
                <Tab label="Transactions" />
            </Tabs>
            <Box sx={{mt:2}}>
                {activeTab === 0 && <AddFriends/>}
                {activeTab === 1 && <Expenses/>}
                {activeTab === 2 && <Transactions/>}
            </Box>
        </Box>
    )
}
export default TabsComponent;