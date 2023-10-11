"use client"
import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Image from 'next/image';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const fileInputRef = useRef(null); 

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

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
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
      <Button variant="outlined" className='MuiInputBase-root formbtn d-flex justify-content-between' fullWidth onClick={handleBrowseClick}>
      <label>Upload Prescription</label>
      <span><Image src="/svg/attachment.svg" alt="My Icon" width={30} height={30} /></span>
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
       <Button variant="outlined" className='MuiInputBase-root formbtn d-flex justify-content-between' fullWidth >
      <label>Download Reports</label>
      </Button>
      {/* <div className='MuiInputBase-root formbtn download'>
        <label>Download Reports</label>
        <span></span>
      </div> */}
    </div>
  );
};

export default SearchBar;
