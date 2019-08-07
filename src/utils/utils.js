export default {
  formateDate(time) {
    if (!time) return '';
    let date = new Date(time);
    const format = date => +date < 10 ? '0' + date : date;
    return date.getFullYear() + '-' + format(date.getMonth()+1) + '-' + format(date.getDate()) + ' ' + format(date.getHours()) + ':' + format(date.getMinutes()) + ':' + format(date.getSeconds());
  }
}