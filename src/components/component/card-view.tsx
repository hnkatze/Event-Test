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

export function CardView({
  event,
  type,
}: {
  readonly event: MyEvent;
  readonly type: number;
}) {
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
    const hour12 = hour % 12 || 12;

    return formattedDate.replace(/(\d+):(\d+)/, `${hour12}:$2 `);
  }
  let footerContent;
  if (type === 1) {
    // Rendering content for events
    footerContent = (
      <CardFooter className='gap-2'>
        <EventButtonDelete id={event.id} />
        <Button>
          <Link href={`/event/${event.id}`}> Editar </Link>
        </Button>
      </CardFooter>
    );
  } else if (type === 2) {
    // Rendering content for spaces
    footerContent = (
      <CardFooter className='gap-2'>
        <Button>
          <Link href={`/space`}> Volver </Link>
        </Button>
      </CardFooter>
    );
  } else {
    // Rendering message for type not found
    footerContent = (
      <CardFooter className='gap-2'>
        <p>Type not found </p>
      </CardFooter>
    );
  }
  return (
    <Card className='w-auto max-w-[950px] mx-auto rounded-xl lg:h-auto lg:border-0'>
      <CardHeader>
        <CardTitle className=' md:text-5xl lg:text-6xl'>{event.name}</CardTitle>
        <CardDescription className='lg:text-2xl'>
          {event.description}
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <p className='text-sm lg:text-4xl font-medium text-gray-500 dark:text-gray-400'>
              Start Date
            </p>
            <p className=' lg:text-2xl pr-10'>
              {formatDateTime(event.date_start)}{" "}
            </p>
          </div>
          <div>
            <p className='text-sm font-medium lg:text-4xl text-gray-500 dark:text-gray-400'>
              End Date
            </p>
            <p className='lg:text-2xl'>{formatDateTime(event.date_end)}</p>
          </div>
        </div>
        <div>
          <p className='text-sm lg:text-4xl font-medium text-gray-500 dark:text-gray-400'>
            Directions
          </p>
          <p className=' lg:text-2xl'>{event.location}</p>
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <div>
              <p className='lg:text-4xl font-medium'>Organizer</p>
              <p className='text-sm text-gray-500 dark:text-gray-400 lg:text-2xl'>
                {event.organizer}
              </p>
            </div>
            <div>
              <p className='lg:text-4xl font-medium'>Contact</p>
              <p className='text-sm text-gray-500 dark:text-gray-400 lg:text-2xl'>
                {event.contact_info}
              </p>
            </div>
            <div>
              <p className='lg:text-4xl font-medium'> Places</p>
              <p className='text-sm text-gray-500 dark:text-gray-400 lg:text-2xl'>
                {event.capacity}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      {footerContent}
    </Card>
  );
}
