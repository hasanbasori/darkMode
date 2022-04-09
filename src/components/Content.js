import React, { useContext } from 'react';
import light from '../image/light.svg';
import dark from '../image/dark.svg';
import { ThemeContext } from '../App';

function Content() {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme === 'dark' ? 'dark' : 'light'}>
      <div>
        <h1>Bearsore Official</h1>
        <p>This is Hasanbasori Portfolio</p>
      </div>
      <img src={theme === 'dark' ? dark : light} alt='logo' />
      {/* <img src={dark} alt="logo" /> */}
    </main>
  );
}

export default Content;
