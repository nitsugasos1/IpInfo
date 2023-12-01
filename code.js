const $ = (selector) => document.querySelector(selector)

  const $form = $('#form')
  const $input = $('#input')
  const $submit = $('#submit')
  const $results = $('#results')


const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '917bb1a01amshd4d0dc3e22275d3p1ad0edjsne59b83d54963',
		'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
	}
};


async function fetchIpInfo(ip) {
    try {
        const respuesta = await fetch(`http://ipwho.is/${ip}`, OPTIONS);
        if (!respuesta.ok) {
            throw new Error(`Error al cargar los datos desde ${ip}`);
        }

        const datos = await respuesta.json();

        if ($results) {
            console.log(datos)
            return $results.innerHTML = JSON.stringify(datos, null, 2);
            
        }
    } catch (error) {
        console.error(error);
    }
}



  $form.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const {value} = $input
    if(!value) return
    
    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    await fetchIpInfo(value)

    $submit.removeAttribute('disabled'); // Change here
    $submit.removeAttribute('aria-busy'); // Change here

  })


