import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//this function will transform a launch object to a MyEvent object
export function transformLaunchToMyEvent(launch: Launch): MyEvent {
  return {
    id: launch.flight_number.toString(),
    name: launch.mission_name,
    description: launch.details ?? "No disponible",
    date_start: launch.launch_date_utc,
    date_end: launch.launch_date_utc,
    location: launch.launch_site?.site_name_long ?? "Desconocido",
    organizer: "Elonk Musk",
    contact_info: "ElonMusk@spacex.com",
    capacity: 6,
  };
}
