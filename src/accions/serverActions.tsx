"use server";
//in this components all the server functions are defined and not the client functions

import {
  deleteEvent,
  getEventById,
  getEvents,
  getLaunchById,
} from "@/api/firebase/crude";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// function to handle event creation

//server function to handle event deletion
export const handleDeleteEvent = async (formData: FormData): Promise<void> => {
  try {
    const id = formData.get("id")?.toString();
    await deleteEvent(id ?? "").then(() => {
      console.log("Event deleted successfully");
      revalidatePath(`/`);
      redirect("/");
    });
  } catch (error) {
    console.log("Error deleting event");
  }
};
//server function to get all events
export const getAllEvents = async () => {
  try {
    const event = await getEvents();
    return event;
  } catch (error) {
    console.log("Error getting events");
  }
};
//server function to get an event by id
export const getEventByIds = async (
  id: string
): Promise<{ event: MyEvent; type: number }> => {
  try {
    // try to get the event by ID
    const event = await getEventById(id);

    // if the event is found, return it
    if (event) {
      return { event, type: 1 };
    } else {
      // is't not found, find the launch by ID
      const launch = await getLaunchById(id);
      return { event: launch, type: 2 };
    }
  } catch (error) {
    console.error("Error to get a document:", error);
    throw error;
  }
};
