import type { HistoryEntry } from '@/sample/history'

type HistoryGroup = {
  dateKey: string
  heading: string
  items: HistoryEntry[]
}

const parseDate = (isoString: string): Date | null => {
  const date = new Date(isoString)
  return Number.isNaN(date.getTime()) ? null : date
}

export const formatHistoryHeading = (isoString: string): string => {
  const date = parseDate(isoString)
  if (!date) return 'Unknown date'

  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

export const formatHistoryTime = (isoString: string): string => {
  const date = parseDate(isoString)
  if (!date) return '--:--'

  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  })
}

export const formatHistoryDateTag = (isoString: string): string => {
  const date = parseDate(isoString)
  if (!date) return 'Unknown date'

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  })
}

export const groupHistoryEntriesByDate = (entries: HistoryEntry[]): HistoryGroup[] => {
  const groups = new Map<string, HistoryGroup>()

  entries.forEach(entry => {
    const date = parseDate(entry.occurredAt)
    const dateKey = date ? date.toISOString().split('T')[0] : 'unknown'
    const heading = date ? formatHistoryHeading(entry.occurredAt) : 'Unknown date'

    if (!groups.has(dateKey)) {
      groups.set(dateKey, {
        dateKey,
        heading,
        items: []
      })
    }

    groups.get(dateKey)?.items.push(entry)
  })

  const sortedGroups = Array.from(groups.values()).sort((a, b) => {
    if (a.dateKey === 'unknown') return 1
    if (b.dateKey === 'unknown') return -1
    return a.dateKey < b.dateKey ? 1 : -1
  })

  sortedGroups.forEach(group => {
    group.items.sort((a, b) => (a.occurredAt < b.occurredAt ? 1 : -1))
  })

  return sortedGroups
}
