import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config";

//this function will get all events from the firebase database
export async function getEvents(): Promise<MyEvent[]> {
  try {
    const eventsRef = await getDocs(collection(db, "events"));
    if (eventsRef.empty) {
      return [];
      console.log("No matching documents.");
    }
    const events = eventsRef.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return events as MyEvent[];
  } catch (e) {
    console.error("Error getting documents: ", e);
    return [];
  }
}

//this function will get an event by id from the firebase database
export async function getEventById(id: string): Promise<MyEvent | null> {
  try {
    const docRef = doc(db, "events", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.log("No matching document found.");
      return null;
    }

    return { id: docSnap.id, ...docSnap.data() } as MyEvent;
  } catch (e) {
    console.error("Error getting document: ", e);
    return null;
  }
}

//this function will create an event in the firebase database
export async function createEvent(event: EventCreate): Promise<string> {
  try {
    const events = await addDoc(collection(db, "events"), event);
    return events.id;
  } catch (e) {
    throw new Error("Error adding document: " + e);
  }
}

//this function will update an event in the firebase database
export async function updateEvent(event: MyEvent): Promise<string> {
  try {
    await updateDoc(doc(db, "events", event.id), {
      name: event.name,
      description: event.description,
      date_start: event.date_start,
      date_end: event.date_end,
      location: event.location,
      organizer: event.organizer,
      contact_info: event.contact_info,
      capacity: event.capacity,
    });
    return event.id;
  } catch (e) {
    throw new Error("Error updating document: " + e);
  }
}

//this function will delete an event in the firebase database
export async function deleteEvent(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, "events", id));
    return console.log("Document successfully deleted!");
  } catch (e) {
    throw new Error("Error deleting document: " + e);
  }
}
