import { useEffect, useState } from 'react';

import SettingsContext from './SettingsContext';

const SettingsProvider = (props) => {
  const [ai1Name, setAi1Name] = useState('Earth Destroyer');
  const [ai2Name, setAi2Name] = useState('Real girlfriend');
  const [ai1ImageUrl, setAi1ImageUrl] = useState(
    'https://i.pinimg.com/736x/ec/ef/cd/ecefcdbfe6f899038dc514e32acd98b4.jpg',
  );
  const [ai2ImageUrl, setAi2ImageUrl] = useState(
    'https://cdna.artstation.com/p/assets/images/images/053/575/430/large/villiam-s-speedart-villiamw-vogue-magazine-cover-shooting-beautiful-woman-with-swe-f2f6bba2-9828-4569-91d5-9a7c468f167e.jpg?1662537999',
  );

  return (
    <SettingsContext.Provider
      value={{
        ai1Name,
        ai2Name,
        ai1ImageUrl,
        ai2ImageUrl,
        setAi1Name,
        setAi2Name,
        setAi1ImageUrl,
        setAi2ImageUrl,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
