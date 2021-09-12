let url = document.getElementById('texturl');
let btnUrl = document.getElementById('btnurl');
let choose = document.getElementsByName('short_domain');
let result = document.getElementById('result');

function makeid(length) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   
    for (let i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
   
    return text;
}

async function load() {
        const conn = await fetch("https://api.shrtco.de/v2/");
        const data = await conn.json();
        data.ok = true;
        data['fullLink'] = url.value;
        let text1 = makeid(5);
        let text2 = "";
        for (let i = 0; i < choose.length; i++){
            if (choose[i].checked === true){
                text2 = choose[i].value;
            }
        }
        data['shortLink'] = `${text2}/${text1}`;
        result.innerHTML = data.shortLink;
        result.href = data.fullLink;
        console.log(data);
    }

btnUrl.addEventListener('click', () => {
    
    load();
    
});