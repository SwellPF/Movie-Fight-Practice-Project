const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '81b387fe',
            s: searchTerm
        }
    } );

    console.log(response.data);
};

const input = document.querySelector('input');
let timeoutID;
const onInput = event => {
    if(timeoutID) {
        clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {fetchData(event.target.value);
    }, 1000)
};

input.addEventListener('input', onInput);
