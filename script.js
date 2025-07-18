
const colorEl = document.getElementById("colorPrediction");
const sizeEl = document.getElementById("sizePrediction");
const numberEl = document.getElementById("numberPrediction");

const ws = new WebSocket("wss://ws-pro.ar-lottery01.com");

ws.onmessage = function(event) {
    try {
        const data = JSON.parse(event.data);
        if (data && data.data && data.data.current) {
            const game = data.data.current;
            const number = parseInt(game.number);
            numberEl.textContent = number;

            colorEl.textContent = (number === 0 || number === 5 || number === 10) ? "Green" :
                                  (number % 2 === 0) ? "Red" : "Violet";

            sizeEl.textContent = (number >= 5) ? "Big" : "Small";
        }
    } catch (error) {
        console.error("Error processing WebSocket data:", error);
    }
};
