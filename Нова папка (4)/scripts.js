// Функція ініціалізації карти (викликається автоматично завдяки &callback=initMap в HTML)
function initMap() {


    // Створення об'єкта карти
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12, // Рівень наближення (від 1 до 20)
        center: kyiv,
    });

    // Додавання маркера на карту
    const marker = new google.maps.Marker({
        position: kyiv,
        map: map,
        title: "Ласкаво просимо до Києва!",
    });
}
