// Определить какой четверти принаджлежит точка с координатам (х ; у)
function coordinate(x,y){
// Первая четверть
if (x > 0 && y > 0) {
    return("Введенные координаты Принадлежат I четверти");
// Вторая четверть     
}else if (x < 0 && y > 0) {
          return ("Введенные координаты Принадлежат I I четверти");
// Третья четверть    
}else if (x < 0 && y < 0){
    return("Введенные координаты Принадлежат I I I четверти");
// Четвертая четверть    
} else if (x > 0 && y < 0){
    return("Введенные координаты Принадлежат I V четверти"); 
   }
}