import validateUrl from "./checkURL";
const results = document.querySelectorAll('section > div');
const handleSubmit = async (url) => {
    const validtion = validateUrl(url);
    if (validtion) {
        try {
            const req = await fetch("http://localhost:8081/sentiment", {
                method: 'POST',
                credentials: "same-origin",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url })
            });
            const data = await req.json();
            results.forEach(res => {
                (data[res.id]) && (res.innerHTML = `${res.id} : ${data[res.id]}`)
            })
        } catch (err) {
            alert('something went wrong try again later');
        }
    } else {
        alert('enter a valid url 😒😒😒😒😒😒');
    }
}

export default handleSubmit;