"use client";
import { updateEvent } from "@/api/firebase/crude";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { revalidatePath } from "next/cache";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Textarea } from "./ui/textarea";

export function CardEvEdit({ event }: { readonly event: MyEvent }) {
  const [name, setName] = useState<string>(event.name);
  const [description, setDescription] = useState<string>(event.description);
  const [date_start, setDate_start] = useState<string>(event.date_start);
  const [date_end, setDate_end] = useState<string>(event.date_end);
  const [location, setLocation] = useState<string>(event.location);
  const [organizer, setOrganizer] = useState<string>(event.organizer);
  const [capacity, setCapacity] = useState<number>(event.capacity);
  const [contact_info, setContact_info] = useState<string>(event.contact_info);
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const data = {
        id: event.id,
        name,
        description,
        date_start,
        date_end,
        location,
        organizer,
        capacity,
        contact_info,
      };
      await updateEvent(data).then(() => {
        toast.success("Event updated successfully");
        router.push(`/view/${event.id}`);
      });
    } catch (error) {
      console.log("Error updating event: " + error);
    }
  };
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Edit An Event </CardTitle>
        <CardDescription>
          Fill in the details to create an event
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid w-full items-center gap-4'>
          <div className='flex flex-col space-y-1.5'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              name='name'
              placeholder=' Name of event '
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className='flex flex-col space-y-1.5'>
            <Label htmlFor='description'>Description</Label>
            <Textarea
              id='description'
              name='description'
              placeholder='Description'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className='flex flex-col space-y-1.5'>
            <Label htmlFor='date_start'>Date Start</Label>
            <Input
              id='date_start'
              name='date_start'
              type='datetime-local'
              onChange={(e) => setDate_start(e.target.value)}
              value={date_start}
            />
          </div>
          <div className='flex flex-col space-y-1.5'>
            <Label htmlFor='date_end'>Date End</Label>
            <Input
              id='date_end'
              name='date_end'
              type='datetime-local'
              onChange={(e) => setDate_end(e.target.value)}
              value={date_end}
            />
          </div>
          <div className='flex flex-col space-y-1.5'>
            <Label htmlFor='location'>Location</Label>
            <Input
              id='location'
              name='location'
              placeholder='Location'
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </div>
          <div className='flex flex-col space-y-1.5'>
            <Label htmlFor='organizer'>Organizer</Label>
            <Input
              id='organizer'
              name='organizer'
              placeholder='Organizer'
              onChange={(e) => setOrganizer(e.target.value)}
              value={organizer}
            />
          </div>
          <div className='flex flex-col space-y-1.5'>
            <Label htmlFor='contact_info'>Contact Info</Label>
            <Input
              id='contact_info'
              name='contact_info'
              placeholder='Contact Info'
              onChange={(e) => setContact_info(e.target.value)}
              value={contact_info}
            />
          </div>
          <div className='flex flex-col space-y-1.5'>
            <Label htmlFor='capacity'>Capacity</Label>
            <Input
              id='capacity'
              name='capacity'
              type='number'
              onChange={(e) => setCapacity(Number(e.target.value))}
              value={capacity}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button type='button' variant='outline'>
          <Link href='/'>Cancel</Link>
        </Button>
        <Button
          type='submit'
          onClick={() => {
            handleSubmit();
          }}
          className='bg-gray-400 rounded-xl'>
          Edit This Event
        </Button>
      </CardFooter>
    </Card>
  );
}
