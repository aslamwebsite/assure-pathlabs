"use client"
import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';  
import { Attachement } from './svg-components/Attachement';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'H PYLORI IgM ANTIBODIES'},
    { label: 'QUARDUAPLE MATERNAL SECREEN (QUADRUPLE TEST)'},
    { label: '17-ALPHA-HYDROXY PROGESTERONE'},
    { label: '24 HOURS URINE PROTEIN ELECTROPHORESIS'},
    { label: 'ADENOSINE DEAMINASE'},
    { label: 'ALANINE AMINOTRANSFERASE ( ALT ), SGPT (LIVER)'},
    { label: 'ALBUMIN (KIDNEY,LIVER)'},
    { label: 'ALBUMIN GLOBULIN A/G RATIO'},
  ];

  const handleInputChange = (_, newInputValue) => {
    setInputValue(newInputValue);
  };


  return (
    <div className='col-12 pull-left position-relative'>
      <Autocomplete
        id="search-bar"
        options={options}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Find your package/test/scan"
            fullWidth
            className='inputmodified'
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <div className='searchbutton'>
                    <SearchIcon color="action"/>
                    
                </div>
              )
            }}
          />
        )}
      />
      {selectedOption && (
        <div className='dropdownpackage'>
          <div className='row'>
            <div className='col-md-12'>
              <ul className='srv_dropdown p-0 m-0'>
                <li data-id="1">{selectedOption.label} <span>{selectedOption.value}</span></li>
              </ul>
            </div>
          </div>
        </div>
      )}
   
    </div>
  );
};

export default SearchBar;
