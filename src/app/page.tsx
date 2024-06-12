"use client";
import { getAllEvents } from "@/accions/serverActions";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { CardViewLitte } from "@/components/component/CardViewLitte";

export default function Home() {
  const [data, setData] = useState<MyEvent[]>([]);
  useEffect(() => {
    async function data() {
      const data = await getAllEvents();
      if (data) {
        setData(data);
      } else {
        return toast.error("Error loading events");
      }
    }
    data();
  }, []);

  return (
    <div className='flex flex-col  justify-center items-center w-full  m-auto '>
      <h1 className='w-full text-xl text-center md:text-5xl pt-5 pb-5'>
        Welcome to the Event Management System
      </h1>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4 w-full'>
        {data?.map((event) => (
          <CardViewLitte event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}
