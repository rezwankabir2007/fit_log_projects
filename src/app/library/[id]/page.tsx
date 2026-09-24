import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Bookmark } from "lucide-react";
import { TLibrary } from "@/types/library.type";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Single Workout Fetching Function
const getSingleWorkout = async (id: string): Promise<TLibrary | null> => {
  try {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data: TLibrary = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching single workout:", error);
    return null;
  }
};

const LibraryDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const workout = await getSingleWorkout(id);

  if (!workout) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Workout Not Found</h2>
        <p className="text-gray-400 mb-6">Looking for ID: {id}</p>
        <Link
          href="/"
          className="inline-block bg-[#C2F800] text-black font-bold px-6 py-2.5 rounded-xl hover:bg-[#b0e000] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f17] py-8 text-white font-sans">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-5 inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-[#C2F800] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Library
        </Link>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch bg-[#0d1420] p-6 rounded-3xl border border-white/5">
          
          {/* Left Column: Image Container (Full height stretch) */}
          <div className="md:col-span-5 relative w-full h-full min-h-[350px] rounded-2xl overflow-hidden bg-slate-900 border border-white/5">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover object-center"
              unoptimized
              priority
            />
          </div>

          {/* Right Column: Workout Details */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-4">
            
            {/* Title & Description */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                {workout.name}
              </h1>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                {workout.description}
              </p>

              {/* Muscle Groups Badges */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {workout.muscleGroups?.map((group) => (
                  <span
                    key={group}
                    className="rounded-full bg-[#C2F800] px-2.5 py-0.5 text-[10px] font-extrabold text-black uppercase"
                  >
                    {group}
                  </span>
                ))}
              </div>
            </div>

            {/* Info Table */}
            <div className="rounded-xl bg-[#121824] border border-white/5 p-3.5 space-y-2 text-xs text-gray-300">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-bold text-gray-400">Equipment</span>
                <span className="font-semibold text-white">{workout.equipment || "N/A"}</span>
              </div>
              <hr className="border-white/5" />

              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-bold text-gray-400">Difficulty</span>
                <span className="font-semibold text-white capitalize">{workout.difficulty}</span>
              </div>
              <hr className="border-white/5" />

              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-bold text-gray-400">Sets</span>
                <span className="font-semibold text-white">{workout.sets || 4}</span>
              </div>
              <hr className="border-white/5" />

              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-bold text-gray-400">Reps</span>
                <span className="font-semibold text-white">{workout.reps || "6-10"}</span>
              </div>
              <hr className="border-white/5" />

              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-bold text-gray-400">Duration</span>
                <span className="font-semibold text-white">{workout.duration} min</span>
              </div>
              <hr className="border-white/5" />

              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-bold text-gray-400">Calories</span>
                <span className="font-semibold text-white">{workout.caloriesBurned} kcal</span>
              </div>
              <hr className="border-white/5" />

              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-bold text-gray-400">Rating</span>
                <span className="font-semibold text-white">{workout.rating}</span>
              </div>
            </div>

            {/* Instructions */}
            {workout.instructions && workout.instructions.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                  Instructions
                </h3>
                <ol className="space-y-1.5 text-xs text-gray-400">
                  {workout.instructions.map((step, idx) => (
                    <li key={idx} className="flex gap-1.5 leading-relaxed">
                      <span className="font-bold text-gray-300">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2 pt-1">
              <button className="flex-1 inline-flex items-center justify-center gap-2 bg-[#C2F800] hover:bg-[#b0e000] text-black font-extrabold py-2.5 px-4 rounded-xl transition-all active:scale-95 text-xs uppercase tracking-wider">
                <Calendar className="h-3.5 w-3.5" /> Add to today&apos;s plan
              </button>
              
              <button className="inline-flex items-center justify-center gap-1.5 bg-transparent hover:bg-white/5 text-gray-300 border border-white/10 font-bold py-2.5 px-4 rounded-xl transition-all active:scale-95 text-xs">
                <Bookmark className="h-3.5 w-3.5" /> Save for later
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default LibraryDetailsPage;