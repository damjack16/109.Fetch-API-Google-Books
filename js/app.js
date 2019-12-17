const btn = document.querySelector("button");
const input = document.querySelector("#search");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${input.value}`)
        .then(resp =>
            resp.json()
        )
        .then(resp => {
            resp.items.forEach(item => {
                const titles = item.volumeInfo.title;
                console.log(titles);
            })
        })
})