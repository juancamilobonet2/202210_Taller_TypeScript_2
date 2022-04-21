import { data } from './data.js';
var seriesTbody = document.getElementById('series');
//const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
//const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
var avgSeasons = document.getElementById("avg-seasons");
//btnfilterByName.onclick = () => applyFilterByName();
renderSeriesInTable(data);
avgSeasons.innerHTML = "Seasons average: ".concat(getAvgSeasons(data));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = " <td>".concat(serie.id, "</td>\n                            <td class=\"serieName\">").concat(serie.name, "</td>\n                            <td>").concat(serie.channel, "</td>\n                            <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
/* function applyFilterByName() {
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
} */
/* function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c =>
    c.name.match(nameKey));
} */
function getAvgSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    var avgSeasons = totalSeasons / (series.length);
    return avgSeasons;
}
// function clearCoursesInTable() {
//   while (coursesTbody.hasChildNodes()) {
//     if (coursesTbody.firstChild != null) {
//       coursesTbody.removeChild(coursesTbody.firstChild);
//     }
//   }
// }
