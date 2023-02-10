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

  return (
    <ThemeProvider theme={outerTheme}>
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    </ThemeProvider>
  );
}