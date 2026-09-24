import Image from 'next/image';
import FooterImage from '@/assets/logo.png';

const Footer = () => { 
    
  return (
    <footer className="bg-[#090A0D]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 p-8">
        
      
      
        <div className="flex items-center gap-2">
          <Image 
            src={FooterImage} 
            alt="FitLog Logo" 
            width={32} 
            height={32} 
          />
          <h2 className="text-[#FFFFFF] font-bold text-2xl">FITLOG</h2>
        </div>


        <h4 className="text-[#6B7280]  text-center md:text-left">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </h4>

      </div>
    </footer>
  );
};

export default Footer; 