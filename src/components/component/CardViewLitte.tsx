import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CardViewLitte({ event }: { readonly event: MyEvent }) {
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
  return (
    <Card className='w-full max-w-[400px] mx-auto rounded-xl'>
      <CardHeader>
        <CardTitle>{event.name}</CardTitle>
        <CardDescription>By {event.organizer}</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='flex'>
          <div>
            <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
              Start Date
            </p>
            <p>{formatDateTime(event.date_start)} </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className=' gap-2'>
        <Button>
          <Link href={`/view/${event.id}`}> See This Event </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
