export const formatCurrency = (value: number, currency: string = 'LKR') => {
  const [integerPart, decimalPart] = value.toFixed(2).split('.')
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return `${currency} ${formattedInteger}.${decimalPart}`
}

export const formatNumber = (value: number) => {
  return value.toLocaleString(undefined, {
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  })
}

export const formatPercentage = (value: number) => `${value}%`

export const maskCardNumber = (value: string) => {
  const clean = value.replace(/\s+/g, '')
  const groups: string[] = []

  for (let i = 0; i < clean.length; i += 4) {
    groups.push(clean.slice(i, i + 4))
  }

  return groups
    .map((group, index) => (index === groups.length - 1 ? group : '••••'))
    .join(' ')
}
