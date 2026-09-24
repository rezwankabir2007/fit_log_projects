
import { TLibrary } from "@/types/library.type";
import LibraryCard from "../shared/LibraryCard";


const getLibrary = async (): Promise<TLibrary[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Failed to fetch library data");
  }

  const data: TLibrary[] = await response.json();

  return data;
};

const Library = async () => {
  const libraryData = await getLibrary();

  return (
   
   <section className="container mx-auto px-4 py-16">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          THE LIBRARY
        </h2>

        <p className="mt-3 max-w-xl text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {libraryData.map((library) => {
          return <LibraryCard key={library.id} library={library}/>
        })}
      </div>
    </section>

  );
};

export default Library;