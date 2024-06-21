import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { FormControl,MenuItem, Select } from "@mui/material";

const CurrencySelector = () => {
    const {currency,setCurrency} = useContext(AppContext);

    return(
        <div className="sections">
            <FormControl variant="outlined" sx={{ ml: 2, minWidth: 200 }}>
                <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    <MenuItem value="JP">Japanese Yen</MenuItem>
                    <MenuItem value="USD">US Dollar</MenuItem>
                    <MenuItem vale="RS">Nepelese Rupees</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default CurrencySelector;