'use client';

import { LibrarysContext } from '@/context/LibrarysContext';
import { TLibrary } from '@/types/library.type';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const MyPlanPage = () => {
  const { readLibrary, setReadLibrary, wishlibrary, setWishLibrary } = useContext(LibrarysContext) as {
    readLibrary: TLibrary[];
    setReadLibrary: React.Dispatch<React.SetStateAction<TLibrary[]>>;
    wishlibrary: TLibrary[];
    setWishLibrary: React.Dispatch<React.SetStateAction<TLibrary[]>>;
  };
  
  // Track active tab ('plan' or 'saved')
  const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');

  // Currently active list based on selected tab
  const currentList: TLibrary[] = activeTab === 'plan' ? readLibrary || [] : wishlibrary || [];

  // Stats Calculation for active tab
  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce((sum, item) => sum + (Number(item.duration) || 0), 0);
  const totalCalories = currentList.reduce((sum, item) => sum + (Number(item.caloriesBurned) || 0), 0);

  // Remove item handler
  const handleRemove = (id: string | number, isSavedTab = false) => {
    if (isSavedTab) {
      setWishLibrary(wishlibrary.filter((item: TLibrary) => String(item.id) !== String(id)));
    } else {
      setReadLibrary(readLibrary.filter((item: TLibrary) => String(item.id) !== String(id)));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl text-white">
      {/* Title */}
      <h1 className="text-3xl font-black uppercase tracking-tight">MY PLAN</h1>
      <p className="text-[#8A92A0] text-sm mt-1 mb-6">
        Cap of five lifts for today. Finish them, then load more.
      </p>

   
   
      <div className="grid grid-cols-3 gap-4 bg-[#121824] p-6 rounded-2xl border border-white/5 mb-8">
        <div>
          <span className="text-xs text-gray-400 font-medium">Exercises</span>
          <p className="text-3xl font-bold text-[#C2F800] mt-1">{totalExercises}</p>
        </div>
        <div>
          <span className="text-xs text-gray-400 font-medium">Minutes</span>
          <p className="text-3xl font-bold text-white mt-1">{totalMinutes}</p>
        </div>
        <div>
          <span className="text-xs text-gray-400 font-medium">Calories</span>
          <p className="text-3xl font-bold text-white mt-1">{totalCalories}</p>
        </div>
      </div>

   
   
      <div className="tabs tabs-border">
      
      
        <input
          type="radio"
          name="my_plan_tabs"
          className="tab text-[#8A92A0] font-bold"
          aria-label="Today’s Plan"
          defaultChecked
          onChange={() => setActiveTab('plan')}
        />
        <div className="tab-content border-base-300 bg-transparent py-6">
          {readLibrary && readLibrary.length > 0 ? (
            <div className="space-y-4">
              {readLibrary.map((item: TLibrary) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between bg-[#121824] p-4 rounded-2xl border border-white/5 gap-4"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h3 className="font-black text-white uppercase text-base tracking-wide">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-400 mb-2">{item.equipment || 'Bodyweight'}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-300">
                        <span>⏱ {item.duration} min</span>
                        <span>🔥 {item.caloriesBurned} kcal</span>
                        <span className="text-yellow-400">★ {item.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <Link
                      href={`/library/${item.id}`}
                      className="text-xs font-semibold text-gray-300 border border-white/10 hover:border-white/30 px-4 py-2 rounded-xl transition-all"
                    >
                      View Details
                    </Link>
                    <button className="bg-[#C2F800] text-black font-semibold text-xs px-4 py-2 rounded-xl hover:bg-[#b0e000] transition-colors cursor-pointer">
                      ✓ Mark as Done
                    </button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-gray-500 hover:text-red-400 p-1 text-lg cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-8 gap-3 border border-white/5 rounded-2xl bg-[#121824]">
              <p className="text-white font-bold tracking-wider">NOTHING HERE YET</p>
              <p className="text-[#A1A1AA] text-sm max-w-sm">
                Browse the library and add a lift to get today moving.
              </p>
              <Link
                href="/library"
                className="mt-2 text-black font-bold bg-[#C2F10D] hover:bg-[#b0e000] px-6 py-2.5 rounded-2xl text-sm transition-colors cursor-pointer"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>

       {/* It's save tab  */}
       

        <input
          type="radio"
          name="my_plan_tabs"
          className="tab text-white font-bold"
          aria-label="Saved"
          onChange={() => setActiveTab('saved')}
        />
        <div className="tab-content border-base-300 bg-transparent py-6">
          {wishlibrary && wishlibrary.length > 0 ? (
            <div className="space-y-4">
              {wishlibrary.map((item: TLibrary) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between bg-[#121824] p-4 rounded-2xl border border-white/5 gap-4"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h3 className="font-black text-white uppercase text-base tracking-wide">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-400 mb-2">{item.equipment || 'Bodyweight'}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-300">
                        <span>⏱ {item.duration} min</span>
                        <span>🔥 {item.caloriesBurned} kcal</span>
                        <span className="text-yellow-400">★ {item.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <Link
                      href={`/library/${item.id}`}
                      className="text-xs font-semibold text-gray-300 border border-white/10 hover:border-white/30 px-4 py-2 rounded-xl transition-all"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleRemove(item.id, true)}
                      className="text-gray-500 hover:text-red-400 p-1 text-lg cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-8 gap-3 border border-white/5 rounded-2xl bg-[#121824]">
              <p className="text-white font-bold tracking-wider">NO SAVED WORKOUTS</p>
              <Link
                href="/library"
                className="mt-2 text-black font-bold bg-[#C2F10D] hover:bg-[#b0e000] px-6 py-2.5 rounded-2xl text-sm transition-colors cursor-pointer"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;