'use client';

import Logo from 'components/logo';
import Searchbar from 'components/Searchbar';
import { useState } from 'react';
import FileDragDropZone from 'components/FileDragdropZone';
import DropboxImageList from 'components/DropboxImageList';

export default function UI() {
  const [searchInput, setSearchInput] = useState('');
  return (
    <main className='w-full p-2 flex flex-col gap-4'>
      <Logo />
      <Searchbar searchInput={searchInput} setSearchInput={setSearchInput} />
      <FileDragDropZone />
      <DropboxImageList />
    </main>
  );
}
