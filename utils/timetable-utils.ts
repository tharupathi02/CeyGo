import type { BusTimetable } from '@/sample/bus-timetable'

const parseTimeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

export const findTimetablesBetweenStations = (
  fromStationId: string | null,
  toStationId: string | null,
  timetables: BusTimetable[]
): BusTimetable[] => {
  if (!fromStationId || !toStationId) {
    return []
  }

  return timetables
    .filter(
      timetable =>
        (timetable.fromStation === fromStationId && timetable.toStation === toStationId) ||
        (timetable.fromStation === toStationId && timetable.toStation === fromStationId)
    )
    .map(timetable => ({
      ...timetable,
      departures: [...timetable.departures].sort(
        (a, b) => parseTimeToMinutes(a.departureTime) - parseTimeToMinutes(b.departureTime)
      )
    }))
}
