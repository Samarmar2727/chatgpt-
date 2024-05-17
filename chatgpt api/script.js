
document.getElementById("submit-btn").addEventListener("click", function(){
    let value = document.getElementById("word-input").value;
    sendToChatgpt();
});

function sendToChatgpt(){
    let value = document.getElementById("word-input").value;

    let body = {
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": value}],
    };

    let headers = {
        "Authorization": "Bearer sk-proj-18ilMQBM1Mk0KMVL53MJT3BlbkFJiYR0oRiI3Dlu30dIsOaC"
    };


    axios.post("https://api.openai.com/v1/chat/completions", body, {headers: headers})
    .then((response) => {
        console.log(response);
    });
}


