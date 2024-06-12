"use client";
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
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createEvent } from "@/api/firebase/crude";
import { handlerCreateEvents } from "@/accions/accionClient";

export function CardCreateEvent() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date_start, setDate_start] = useState<string>("");
  const [date_end, setDate_end] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [organizer, setOrganizer] = useState<string>("");
  const [capacity, setCapacity] = useState<number>(0);
  const [contact_info, setContact_info] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      console.log("Creating event");
      const eventData: EventCreate = {
        name,
        description,
        date_start,
        date_end,
        location,
        organizer,
        capacity,
        contact_info,
      };
      console.log(eventData);
      await handlerCreateEvents(eventData).then(() => {
        toast.success("Event created successfully");
        router.push("/");
      });
    } catch (error) {
      console.log("Error creating event: " + error);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create An Event </CardTitle>
        <CardDescription>
          Fill in the details to create an event
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder=" Name of events "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="date_start">Date Start</Label>
            <Input
              id="date_start"
              name="date_start"
              type="datetime-local"
              value={date_start}
              onChange={(e) => setDate_start(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="date_end">Date End</Label>
            <Input
              id="date_end"
              name="date_end"
              type="datetime-local"
              value={date_end}
              onChange={(e) => setDate_end(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="organizer">Organizer</Label>
            <Input
              id="organizer"
              name="organizer"
              placeholder="Organizer"
              value={organizer}
              onChange={(e) => setOrganizer(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="contact_info">Contact Info</Label>
            <Input
              id="contact_info"
              name="contact_info"
              placeholder="Contact Info"
              value={contact_info}
              onChange={(e) => setContact_info(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="capacity">Capacity</Label>
            <Input
              id="capacity"
              name="capacity"
              type="number"
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="button" variant="outline">
          <Link href="/">Cancel</Link>
        </Button>
        <Button type="button" onClick={() => handleSubmit()}>
          Create Event
        </Button>
      </CardFooter>
    </Card>
  );
}
