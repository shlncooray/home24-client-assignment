import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Language } from 'models/metaData';
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher({ languages }: { languages: Language[] }) {
  const { i18n } = useTranslation();

  const changeLanguage = (event: SelectChangeEvent<string>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <FormControl sx={{ mt: 1.5, minWidth: 120 }} size="small">
      <Select
        data-testid="language-selecter"
        value={i18n.language}
        onChange={(e) => {
          changeLanguage(e);
        }}
      >
        {languages.map((l) => (
          <MenuItem
            data-testid={`menu-item-${l.value}`}
            key={`${l.value}-${l.label}`}
            value={l.value}
          >
            {l.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default LanguageSwitcher;
