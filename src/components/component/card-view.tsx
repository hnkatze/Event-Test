import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EventButtonDelete } from "./EventButtonDelete";
import Link from "next/link";

export function CardView({ event }: { event: MyEvent }) {
  function formatDateTime(dateTimeString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit",
    };

    const formattedDate = new Date(dateTimeString).toLocaleString(
      "en-US",
      options
    );

    // Convertir la hora a un formato AM/PM
    const hour = new Date(dateTimeString).getHours();
    const period = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;

    return formattedDate.replace(/(\d+):(\d+)/, `${hour12}:$2 ${period}`);
  }
  return (
    <Card className="w-full max-w-[400px] mx-auto rounded-xl">
      <CardHeader>
        <CardTitle>{event.name}</CardTitle>
        <CardDescription>{event.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Start Date
            </p>
            <p>{formatDateTime(event.date_start)} </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              End Date
            </p>
            <p>{formatDateTime(event.date_end)}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Directions
          </p>
          <p>{event.location}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Organizer
          </p>
          <div className="flex items-center gap-4">
            {event.organizer}
            <div>
              <p className="font-medium">Contact</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {event.contact_info}
              </p>
            </div>
            <div>
              <p className="font-medium"> Places</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {event.capacity}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <EventButtonDelete id={event.id} />
        <Button>
          <Link href={`/event/${event.id}`}> Edit </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
