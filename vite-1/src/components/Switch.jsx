import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green} from '@mui/material/colors';
import { useState } from 'react';

const outerTheme = createTheme({
    palette: {
      secondary: {
        main: green[500],
      },
    },
  });
  

export default function ControlledSwitches() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const useStyles = makeStyles((theme) => ({  
    switch_track: {
        backgroundColor: "#f50057",
    },
    switch_base: {
        color: "#f50057",
        "&.Mui-disabled": {
            color: "#e886a9"
        },
        "&.Mui-checked": {
            color: "#95cc97"
        },
        "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#4CAF50",
        }
    },
    switch_primary: {
        "&.Mui-checked": {
            color: "#4CAF50",
        },
        "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#4CAF50",
        },
    },
}));




  return (
    <ThemeProvider theme={outerTheme}>
    <Switch
  classes={{
    track: classes.switch_track,
    switchBase: classes.switch_base,
    colorPrimary: classes.switch_primary,
  }}
  color={!disabled ? "primary" : "default"}
  checked={value}
  onChange={handleChange}
  name="<your_name>"
  disabled={disabled}
/>
    </ThemeProvider>
  );
}