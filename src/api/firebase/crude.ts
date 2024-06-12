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
import { transformLaunchToMyEvent } from "@/lib/utils";

//this function will get all events from the firebase database
export async function getEvents(): Promise<MyEvent[]> {
  try {
    const eventsRef = await getDocs(collection(db, "events"));
    if (eventsRef.empty) {
      console.log("No matching documents.");
      return [];
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
    const events = await addDoc(collection(db, "events"), { ...event });
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

//be careful with this function, it will create events in the firebase database
const events: EventCreate[] = [
  {
    name: "Summit de Innovación 2024",
    description:
      "El evento principal para descubrir y discutir las últimas innovaciones tecnológicas.",
    date_start: "2024-07-05T09:00",
    date_end: "2024-07-07T18:00",
    location: "Centro de Convenciones de Los Ángeles, Los Ángeles, CA",
    organizer: "TechPioneers",
    contact_info: "info@techpioneers.com",
    capacity: 12000,
  },
  {
    name: "Feria de Tecnología y Negocios 2024",
    description:
      "Una feria que conecta la tecnología emergente con el mundo empresarial.",
    date_start: "2024-08-15T10:00",
    date_end: "2024-08-17T17:00",
    location: "Centro de Exposiciones de Chicago, Chicago, IL",
    organizer: "BizTechExpo",
    contact_info: "info@biztechexpo.com",
    capacity: 15000,
  },
  {
    name: "Congreso de IA y Machine Learning 2024",
    description:
      "Un congreso dedicado a los avances en inteligencia artificial y machine learning.",
    date_start: "2024-09-10T09:00",
    date_end: "2024-09-12T18:00",
    location: "Palacio de Congresos de Madrid, Madrid, España",
    organizer: "AIMLGlobal",
    contact_info: "info@aimlglobal.com",
    capacity: 8000,
  },
  {
    name: "Foro de Robótica Avanzada 2024",
    description:
      "Un foro para discutir y mostrar los últimos desarrollos en robótica avanzada.",
    date_start: "2024-10-05T10:00",
    date_end: "2024-10-07T17:00",
    location: "Centro de Convenciones de Tokio, Tokio, Japón",
    organizer: "RoboticsWorld",
    contact_info: "info@roboticsworld.com",
    capacity: 10000,
  },
  {
    name: "Simposio de Ciberseguridad 2024",
    description:
      "Un simposio centrado en los desafíos y soluciones de la ciberseguridad moderna.",
    date_start: "2024-11-12T09:00",
    date_end: "2024-11-14T18:00",
    location: "Centro de Convenciones de Berlín, Berlín, Alemania",
    organizer: "CyberSecure",
    contact_info: "info@cybersecure.com",
    capacity: 9000,
  },
  {
    name: "Expo de Tecnología Verde 2024",
    description:
      "Una expo dedicada a las tecnologías sostenibles y ecológicas.",
    date_start: "2024-06-18T09:00",
    date_end: "2024-06-20T17:00",
    location: "Centro de Convenciones de Vancouver, Vancouver, BC, Canadá",
    organizer: "GreenTech",
    contact_info: "info@greentech.com",
    capacity: 7000,
  },
  {
    name: "Cumbre de Innovación en Salud 2024",
    description:
      "Una cumbre para explorar las innovaciones en tecnología de la salud.",
    date_start: "2024-07-20T10:00",
    date_end: "2024-07-22T17:00",
    location: "Centro de Convenciones de Houston, Houston, TX",
    organizer: "HealthTech",
    contact_info: "info@healthtech.com",
    capacity: 11000,
  },
  {
    name: "Conferencia de Tecnología Educativa 2024",
    description:
      "Una conferencia dedicada a la tecnología en el ámbito educativo.",
    date_start: "2024-08-22T09:00",
    date_end: "2024-08-24T18:00",
    location: "Centro de Convenciones de Nueva York, Nueva York, NY",
    organizer: "EduTech",
    contact_info: "info@edutech.com",
    capacity: 13000,
  },
  {
    name: "Festival de Startups 2024",
    description: "Un festival para startups tecnológicas y emprendedores.",
    date_start: "2024-09-15T10:00",
    date_end: "2024-09-17T17:00",
    location: "Centro de Convenciones de San Diego, San Diego, CA",
    organizer: "StartupFest",
    contact_info: "info@startupfest.com",
    capacity: 10000,
  },
  {
    name: "Conferencia de Realidad Virtual 2024",
    description:
      "Una conferencia centrada en las aplicaciones de la realidad virtual.",
    date_start: "2024-10-25T09:00",
    date_end: "2024-10-27T18:00",
    location: "Centro de Convenciones de Las Vegas, Las Vegas, NV",
    organizer: "VRWorld",
    contact_info: "info@vrworld.com",
    capacity: 14000,
  },
];

export async function uploadEvents() {
  try {
    const promises = events.map(async (event) => {
      const docRef = await addDoc(collection(db, "events"), event);
      console.log("Document written with ID: ", docRef.id);
    });
    await Promise.all(promises);
    console.log("All events uploaded successfully");
  } catch (e) {
    console.error("Error adding documents: ", e);
  }
}

//this function will get all launches from the SpaceX API in type of MyEvent
export async function GetApiSpace(value: number): Promise<MyEvent[]> {
  try {
    const response = await fetch(
      `https://api.spacexdata.com/v3/launches/?limit=${value}&sort=launch_date_utc&order=asc`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = (await response.json()) as Launch[];
    const events: MyEvent[] = data.map((launch) =>
      transformLaunchToMyEvent(launch)
    ); // Transfor the launch to MyEvent

    return events; // return the data
  } catch (error) {
    console.error("Error:", error);
    throw error; // error handling
  }
}
//this function will get a launch by id from the SpaceX API in type of MyEvent
export async function getLaunchById(launchId: string): Promise<MyEvent> {
  try {
    const response = await fetch(
      `https://api.spacexdata.com/v3/launches/${launchId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = (await response.json()) as Launch;
    const transfor = transformLaunchToMyEvent(data); // transform the data
    return transfor; // rerturn the data
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
