import type { RouteFare } from '../sample/route-fare'

type FareDetail = NonNullable<RouteFare['fareBreakdown'][keyof RouteFare['fareBreakdown']]>

export type FareClassDetail = FareDetail & {
  key: string
}

export const findRoutesBetweenStations = (
  fromStationId: string | null,
  toStationId: string | null,
  routes: RouteFare[]
): RouteFare[] => {
  if (!fromStationId || !toStationId) {
    return []
  }

  return routes.filter(route => {
    const directMatch = route.fromStation === fromStationId && route.toStation === toStationId
    const reverseMatch = route.fromStation === toStationId && route.toStation === fromStationId
    return directMatch || reverseMatch
  })
}

export const getFareClasses = (route: RouteFare): FareClassDetail[] => {
  return Object.entries(route.fareBreakdown)
    .filter((entry): entry is [string, FareDetail] => Boolean(entry[1]))
    .map(([key, value]) => ({
      key,
      ...value
    }))
}
