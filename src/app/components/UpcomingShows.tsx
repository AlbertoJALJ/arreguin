// src/app/components/UpcomingShows.jsx
"use client";
const concerts = [
  {
    id: 1,
    place: "Madison Square Garden, New York",
    date: "2024-12-15T20:00:00",
    ticketUrl: "https://example.com/tickets/1",
    eventName: "Fox & Bones Live at Madison Square Garden",
  },
  {
    id: 2,
    place: "The Fillmore, San Francisco",
    date: "2025-01-20T19:30:00",
    ticketUrl: "https://example.com/tickets/2",
    eventName: "Fox & Bones at The Fillmore",
  },
  // Agrega más conciertos aquí...
];

export default function UpcomingShows() {
  const formatDate = (dateString: Date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    //@ts-ignore
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const generateGoogleCalendarLink = (event: {
    id?: number;
    place: any;
    date: any;
    ticketUrl?: string;
    eventName: any;
  }) => {
    const startTime = new Date(event.date)
      .toISOString()
      .replace(/-|:|\.\d+/g, "");
    const endTime = new Date(
      new Date(event.date).getTime() + 2 * 60 * 60 * 1000
    )
      .toISOString()
      .replace(/-|:|\.\d+/g, ""); // Evento de 2 horas
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.eventName
    )}&dates=${startTime}/${endTime}&details=Join+us+for+an+amazing+concert&location=${encodeURIComponent(
      event.place
    )}&sf=true&output=xml`;
    return calendarUrl;
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Lugar</th>
            <th className="px-4 py-2 text-left">Fecha</th>
            <th className="px-4 py-2 text-center">Acción</th>
          </tr>
        </thead>
        <tbody>
          {concerts.map((concert) => (
            <tr
              key={concert.id}
              className="border-b hover:bg-blue-100 cursor-pointer"
              onClick={() => window.open(concert.ticketUrl, "_blank")}
            >
              <td className="px-4 py-2">{concert.place}</td>
              <td className="px-4 py-2">
                {formatDate(new Date(concert.date))}
              </td>
              <td className="px-4 py-2 text-center">
                <a
                  href={generateGoogleCalendarLink(concert)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  onClick={(e) => e.stopPropagation()} // Evita que el click abra la página de tickets
                >
                  Agregar al Calendar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
