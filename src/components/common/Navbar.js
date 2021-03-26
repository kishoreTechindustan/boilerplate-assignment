import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FormControl, MenuItem, InputLabel, Select } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  formControl: {
    width: 200,
    background: 'white',
    borderRadius: 5,
  },
}));

export default function ButtonAppBar(props) {
  const { language, setLanguage } = useState('en');
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setLanguage(value);
    changeLanguage(value);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {t('App')}
          </Typography>
          {/* <button type="button" onClick={() => changeLanguage('hi')}>
            {t('translation:hi')}
          </button> */}

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Select language
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              name="language"
              value={language}
              onChange={handleChange}
              // label="Langauge"
            >
              <MenuItem value={'en'}>English</MenuItem>
              <MenuItem value={'hi'}>Hindi</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </div>
  );
}
