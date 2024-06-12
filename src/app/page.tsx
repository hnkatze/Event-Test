import { CardView } from "@/components/component/card-view";
import { getAllEvents } from "@/accions/serverActions";

export default async function Home() {
  const data = await getAllEvents();

  return (
    <div className="flex flex-col  justify-center items-center w-full  m-auto ">
      <h1 className="w-full text-xl text-center md:text-5xl pt-5 pb-5">
        Welcome to the Event Management System
      </h1>
      <div className="flex flex-col md:flex-wrap gap-2 justify-center w-full items-center">
        {data?.map((event) => (
          <CardView event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}
