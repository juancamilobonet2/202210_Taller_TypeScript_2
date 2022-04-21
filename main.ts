
import { Serie } from './serie.js';

import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
//const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
//const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const avgSeasons: HTMLElement = document.getElementById("avg-seasons")!;


//btnfilterByName.onclick = () => applyFilterByName();

renderSeriesInTable(data);

avgSeasons.innerHTML = `Seasons average: ${getAvgSeasons(data)}`


function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = ` <td>${serie.id}</td>
                            <td class="serieName">${serie.name}</td>
                            <td>${serie.channel}</td>
                            <td>${serie.seasons}</td>`;
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


function getAvgSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  let avgSeasons: number = totalSeasons/(series.length);
  return avgSeasons;
}

// function clearCoursesInTable() {
//   while (coursesTbody.hasChildNodes()) {
//     if (coursesTbody.firstChild != null) {
//       coursesTbody.removeChild(coursesTbody.firstChild);
     
//     }
//   }
// }