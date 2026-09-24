import Image from "next/image";
import Link from "next/link";

import { Clock, Flame, Star } from "lucide-react";
import { TLibrary } from "@/types/library.type";

type TLibraryCardProps ={
    library :TLibrary;
}


const LibraryCard = ({ library }: TLibraryCardProps) => {
    return (
       <Link
           
            href={`/library/${library.id}`}
            className="group block overflow-hidden rounded-3xl border border-white/10 bg-[#0d1420] shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={library.image}
                alt={library.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                unoptimized
              />

              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1420] via-black/10 to-transparent" />

              
              
              <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                {library.difficulty}
              </span>

        
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                {library.muscleGroups.slice(0, 2).map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-lime-400 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-950"
                  >
                    {muscle}
                  </span>
                ))}
              </div>
            </div>

           
            <div className="p-5">
           
              <h3 className="line-clamp-1 text-lg font-extrabold uppercase tracking-tight text-white">
                {library.name}
              </h3>

              
              <p className="mt-1 text-sm text-gray-500">{library.equipment}</p>

              
              <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4 text-sm text-gray-300">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-cyan-400" />
                  {library.duration} min
                </span>

                <span className="h-1 w-1 rounded-full bg-white/20" />

                <span className="flex items-center gap-1.5">
                  <Flame className="h-4 w-4 text-orange-400" />
                  {library.caloriesBurned} kcal
                </span>

                <span className="h-1 w-1 rounded-full bg-white/20" />

                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {library.rating}
                </span>
              </div>
            </div>
          </Link>
    );
};

export default LibraryCard;