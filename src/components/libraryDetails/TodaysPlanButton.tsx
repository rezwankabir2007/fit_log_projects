'use client';

import { Calendar } from 'lucide-react';
import { TLibrary } from '@/types/library.type';
import { useContext } from 'react';
import { LibrarysContext } from '@/context/LibrarysContext';
import { Bounce, toast } from 'react-toastify';

interface TodaysPlanButtonProps {
  workout: TLibrary;
}

const TodaysPlanButton = ({ workout }: TodaysPlanButtonProps) => {
  const { readLibrary, setReadLibrary } = useContext(LibrarysContext);

  const handleViewsPlan = () => {
  

    const isAlreadyInPlan = readLibrary?.some(
      (item: TLibrary) => item.id === workout.id
    );

  
    if (isAlreadyInPlan) {
      toast.info(`${workout.name} is already in Today's Plan!`, {
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
    setReadLibrary([...readLibrary, workout]);

    toast.success(`${workout.name} added to Today's Plan!`, {
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
      onClick={handleViewsPlan}
      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#C2F800] hover:bg-[#b0e000] text-black font-extrabold py-2.5 px-4 rounded-xl transition-all active:scale-95 text-xs uppercase tracking-wider cursor-pointer"
    >
      <Calendar className="h-3.5 w-3.5" />
      Add to today&apos;s plan
    </button>
  );
};

export default TodaysPlanButton;