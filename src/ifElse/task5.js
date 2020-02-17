// Определение оценки студента по его рейтингу, на основе
function rating(rating){
if (rating >= 0 && rating < 20){
    return ("Ваша оценка F")
} else if (rating > 19 && rating < 40) {
    return ("Ваша оценка E")
} else if (rating > 39 && rating < 60){
    return ("Ваша оценка D")
} else if (rating > 59 && rating < 75){
    return ("Ваша оценка C")
} else if (rating > 74 && rating  < 90){
    return ("Ваша оценка B")
} else if (rating > 89 && rating <= 100){
    return ("Ваша оценка A")
}
}