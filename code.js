
const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '917bb1a01amshd4d0dc3e22275d3p1ad0edjsne59b83d54963',
		'X-RapidAPI-Host': 'ip-forensics-ip-geolocation-currency-exchange-and-threat-intelligence-api.p.rapidapi.com'
	}
};

  function fetchIpInfo(ip) {
     fetch(`https://ip-forensics-ip-geolocation-currency-exchange-and-threat-intelligence-api.p.rapidapi.com/single?apikey=917bb1a01amshd4d0dc3e22275d3p1ad0edjsne59b83d54963&ip_address=${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err))
  }



  const $ = (selector) => document.querySelector(selector)

  const $form = $('#form')
  const $input = $('#input')
  const $submit = $('#submit')
  const $results = $('#results')

  $form.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const {value} = $input
    if(!value) return
    
    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)
    

    if(ipInfo){
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disable', '')
    $submit.removeAttribute('aria-busy', 'true')

  })


