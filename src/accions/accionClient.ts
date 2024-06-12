import { createEvent, updateEvent } from "@/api/firebase/crude";

export const handlerCreateEvents = async (data: EventCreate) => {
  try {
    if (
      !data.name ||
      !data.description ||
      !data.date_start ||
      !data.date_end ||
      !data.location ||
      !data.organizer ||
      !data.capacity ||
      !data.contact_info
    ) {
      console.log("All fields are required");
      return;
    }

    const sendEvent = await createEvent(data);
    if (sendEvent) {
      console.log("Event created successfully");
    }
  } catch (error) {
    console.log("Error creating event: " + error);
  }
};
// function to handle event update
export const handleUpdateEvent = async (data: MyEvent) => {
  try {
    if (
      !data.id ||
      !data.name ||
      !data.description ||
      !data.date_start ||
      !data.date_end ||
      !data.location ||
      !data.organizer ||
      !data.capacity ||
      !data.contact_info
    ) {
      console.log("All fields are required");
      return;
    }

    await updateEvent(data).then(() => {
      console.log("Event updated successfully");
    });
  } catch (error) {
    console.log("Error updating event: " + error);
  }
};
