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
    let url="http://localhost:8080/student/list?isShuffle=0";
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

    url="http://localhost:8080/student/list?isShuffle=1";
    fetchData(url)
    .then(result => {
        console.log(result);
        parseGroupList(result);
        
    })
    .catch(error => {
        console.error(error);
    });
});

function parseGroupList(result){
    let total=result.length;
    let num=total/6;
    let rest=total % 6;
    for(let j=0;j<6;j++){
        let beginStr="<div class=\"group-item\">\
        <h3>"+(j+1)+" 组</h3>\
        <ul class=\"groupstu-list\">";
        for(let k=0;k<num+1;k++){
            if(k*6+j<total){
                beginStr+=("<li>"+result[k*6+j].id+result[k*6+j].name+"</li>");
            }
        }
        let endstr="</ul></div>";
        $(".group-list").append(beginStr+endstr);
    }

}




   