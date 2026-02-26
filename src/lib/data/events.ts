import { z } from 'zod';
import events from './events.json';

const DatedEventSchema = z.object({
	title: z.string(),
	startsAt: z.string(),
	endsAt: z.string().optional(),
	location: z.string().optional(),
	details: z.string().optional()
});

const EventsSchema = z.object({
	upcomingMeetingDates: z.array(DatedEventSchema),
	upcomingEvents: z.array(DatedEventSchema),
	attendanceRecoveryReminder: z.object({
		title: z.string(),
		lines: z.array(z.string())
	}),
	varsityGames: z.array(DatedEventSchema)
});

const eventsMetadata = events
const parsedEvents = EventsSchema.parse(eventsMetadata);

export type DatedEvent = z.infer<typeof DatedEventSchema>;

export const upcomingMeetingDates = parsedEvents.upcomingMeetingDates;
export const upcomingEvents = parsedEvents.upcomingEvents;
export const attendanceRecoveryReminder = parsedEvents.attendanceRecoveryReminder;
export const varsityGames = parsedEvents.varsityGames;

export const isUpcoming = (event: DatedEvent, now: Date = new Date()) => {
	const start = new Date(event.startsAt);
	const end = event.endsAt ? new Date(event.endsAt) : start;
	return end.getTime() >= now.getTime();
};

export const sortByDate = (a: DatedEvent, b: DatedEvent) =>
	new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime();

export const getUpcoming = (events: DatedEvent[], now: Date = new Date()) =>
	events.filter((event) => isUpcoming(event, now)).sort(sortByDate);
