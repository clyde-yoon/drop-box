'use client';

import Image from 'next/image';
import Mock from '../public/images/dropbox_icon.png';
import { IconButton, Spinner } from '@material-tailwind/react';
import { getImageUrl } from 'utils/supabase/storage';
import { useMutation } from '@tanstack/react-query';
import { deleteFile } from 'actions/storageActions';
import { queryClient } from 'config/ReactQueryClientProvider';

export default function DropboxImage({ image }) {
  const deleteFileMutation = useMutation({
    mutationFn: deleteFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['images'],
      });
    },
  });
  return (
    <div className='relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md'>
      <div>
        <img src={getImageUrl(image.name)} alt='이미지' />
      </div>
      <div className=''>{image.name}</div>
      <div className='absolute top-4 right-4'>
        <IconButton
          onClick={() => {
            deleteFileMutation.mutate(image.name);
          }}
          color='red'
        >
          {deleteFileMutation.isPending ? (
            <Spinner />
          ) : (
            <i className='fas fa-trash' />
          )}
        </IconButton>
      </div>
    </div>
  );
}
