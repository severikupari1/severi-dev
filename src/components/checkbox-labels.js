import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels({ extraFeatures }) {
  return (
    <FormGroup>
      {
        extraFeatures.map((value, index) => {
          return <FormControlLabel
            sx={{ '& .MuiSvgIcon-root': { fontSize: 22 },'& .MuiTypography-root': { fontSize: '2rem' } }}
            control={ <Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }}/> }
            value={ value.extraprice }
            label={ value.label + ` +${value.extraprice} €` }/>
        })
      }
    </FormGroup>
  );
}
