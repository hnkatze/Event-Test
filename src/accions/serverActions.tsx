"use server";
//in this components all the server functions are defined and not the client functions

import { deleteEvent, getEventById, getEvents } from "@/api/firebase/crude";
import { revalidatePath } from "next/cache";
// function to handle event creation

//server function to handle event deletion
export const handleDeleteEvent = async (formData: FormData) => {
  try {
    const id = formData.get("id")?.toString();
    await deleteEvent(id || "").then(() => {
      console.log("Event deleted successfully");
      revalidatePath("/");
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
export const getEventByIds = async (id: string) => {
  try {
    const event = await getEventById(id);
    return event;
  } catch (error) {
    console.log(error);
  }
};
//server function to format date and time
