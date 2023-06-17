export function formateDate(date) {
  let tempDate = new Date(date)
  let now = new Date()
  let timeName = tempDate.getMonth() === now.getMonth() && tempDate.getFullYear() === now.getFullYear()
  if (timeName && tempDate.getDate() === now.getDate()) {
    return 'hoje'
  }
  if (timeName && tempDate.getMonth() === now.getMonth() && tempDate.getFullYear() === now.getFullYear() && tempDate.getDate() === (now.getDate() - 1)) {
    return 'Ontem'
  }
  if (timeName && tempDate.getMonth() === now.getMonth() && tempDate.getFullYear() === now.getFullYear() && tempDate.getDate() === (now.getDate() + 1)) {
    return 'Amanha'
  }
  return tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
}
