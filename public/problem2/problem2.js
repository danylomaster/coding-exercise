(function() {
  axios
    .get("/problem1/problem1.json")
    .then(function(response) {
      let data = response.data;
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
})();
