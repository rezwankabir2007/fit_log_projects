'use client';

import { Bookmark } from 'lucide-react';
import { TLibrary } from '@/types/library.type';
import { useContext } from 'react';
import { LibrarysContext } from '@/context/LibrarysContext';
import { Bounce, toast } from 'react-toastify';

interface SaveForLateButtonProps {
  workout: TLibrary;
}

const SaveForLateButton = ({ workout }: SaveForLateButtonProps) => {
  const { wishlibrary, setWishLibrary } = useContext(LibrarysContext);

  const handleViewsLate = () => {
   
    
    const isAlreadySaved = wishlibrary?.some(
      (item: TLibrary) => item.id === workout.id
    );


    if (isAlreadySaved) {
      toast.info(`${workout.name} is already in your Saved list!`, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return; 
    }

  
    setWishLibrary([...wishlibrary, workout]);

    toast.success(`${workout.name} added successfully for later!`, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <button
      onClick={handleViewsLate}
      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#374151] hover:bg-[#4B5563] text-[#E5E7EB] font-extrabold py-2.5 px-4 rounded-xl transition-all active:scale-95 text-xs uppercase tracking-wider cursor-pointer"
    >
      <Bookmark className="h-3.5 w-3.5" /> Save for later
    </button>
  );
};

export default SaveForLateButton;