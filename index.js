fetchData=(url)=> {
    // <-- start
    // TODO 23: 通过Fetch API实现异步请求
    // end -->
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .catch(function(e) {
        return e;
      });
  }
$(function() {
    //alert();
    //getData("http://localhost:8080/student/list").then((res)=>console.log(res));
    let url="http://localhost:8080/student/list";
    fetchData(url)
    .then(result => {
        console.log(result);
        for(let i=0;i<result.length;i++){
            $(".stu-list").append("<li>"+result[i].id+result[i].name+"</li>")
        }
    })
    .catch(error => {
        console.error(error);
    });
    //alert();
});




   