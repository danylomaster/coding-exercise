(function() {
  axios
    .get("/problem1/problem1.json")
    .then(function(response) {
      let data = response.data;
      // console.log(data);
      console.log(findLabelById(8, data));
    })
    .catch(function(error) {
      console.log(error);
    });
  function findLabelById(id, currentNode) {
    let i, currentChild, result;
    if (id == currentNode.id) {
      return currentNode.label;
    } else {
      if (currentNode.hasOwnProperty("children")) {
        for (i = 0; i < currentNode.children.length; i += 1) {
          currentChild = currentNode.children[i];
          // console.log(currentChild);
          result = findLabelById(id, currentChild);
          if (result !== false) {
            return result;
          }
        }
      }
      return false;
    }
  }
})();
