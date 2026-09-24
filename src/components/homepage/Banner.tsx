import Image from 'next/image';
import BannerImg from '@/assets/banner.png';


const Banner = () => {
  return (
    <div className="container mx-auto px-4 my-6 sm:my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-8 bg-[#222630] p-6 sm:p-10 rounded-2xl">
       
        

        <div className="text-center lg:text-left">
          <p className="text-[#C2F800] font-bold text-sm sm:text-base tracking-wider mb-2">
            WORKOUT LIBRARY
          </p>


          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold my-4 leading-tight">
            TRAIN WITH INTENT. LOG <br /> EVERY SET.
          </h2>


          <p className="text-[#9CA3AF] text-sm sm:text-base my-4 max-w-lg mx-auto lg:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>


          <button className="btn bg-[#C2F800] hover:bg-[#b0e000] text-[#000000] font-bold border-none mt-2">
            BROWSE WORKOUTS
          </button>
        </div>


       
        <div className="w-full flex justify-center">
          <Image
            src={BannerImg}
            alt="Banner Image"
            className="w-full max-w-md lg:max-w-full h-auto object-contain"
            priority
          />
        </div>


      </div>
    </div>
  );
};


export default Banner;

