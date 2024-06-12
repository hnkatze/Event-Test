"use client";
import { GetApiSpace } from "@/api/firebase/crude";
import { CardViewLitte } from "@/components/component/CardViewLitte";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Space() {
  const [eventss, setEventss] = useState<MyEvent[]>([]);
  const [value, setValue] = useState<number>(10);
  useEffect(() => {
    async function data() {
      const data = await GetApiSpace(value);
      if (data) {
        setEventss(data);
      } else {
        return toast.error("Error loading events");
      }
    }
    data();
  }, [value]);

  return (
    <div className='flex flex-col  justify-center items-center w-full  m-auto '>
      <div className='m-y-auto flex pb-10 gap-5'>
        <h1 className='w-full text-xl text-center md:text-5xl pt-5 pb-5'>
          Space X 🚀 API Launches
        </h1>
        <div className='flex flex-col justify-center items-center'>
          <Label>Launches </Label>
          <Input
            type='number'
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className='w-20 text-center text-xl border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          />
        </div>
      </div>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4 w-full'>
        {eventss?.map((event) => (
          <CardViewLitte event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}
