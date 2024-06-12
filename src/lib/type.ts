interface MyEvent {
  id: string; // Identificador único del evento/Lo Genera Firebase
  name: string; // Nombre del evento
  description: string; // Descripción del evento
  date_start: string; // Fecha y hora de inicio
  date_end: string; // Fecha y hora de finalización
  location: string; // Ubicación física o enlace virtual
  organizer: string; // Nombre del organizador
  contact_info: string; // Información de contacto del organizador
  capacity: number; // Capacidad máxima de asistentes
}

interface EventCreate {
  name: string; // Nombre del evento
  description: string; // Descripción del evento
  date_start: string; // Fecha y hora de inicio
  date_end: string; // Fecha y hora de finalización
  location: string; // Ubicación física o enlace virtual
  organizer: string; // Nombre del organizador
  contact_info: string; // Información de contacto del organizador
  capacity: number; // Capacidad máxima de asistentes
}
