document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('response').innerText = "Great! mg chall kophchyattttt....!😍";
  });
  
  document.getElementById('no-btn').addEventListener('click', function() {
    const responses = [
      "aali n gali n udat geli tuzaya vachun adlay ka tula kay son laglaly ka bc "
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    document.getElementById('response').innerText = randomResponse;
  });
  