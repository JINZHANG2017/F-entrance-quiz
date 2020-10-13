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

    $(".btn").click(function(){
        //alert();
        url="http://localhost:8080/student/shuffle";
            fetchData(url)
            .then(result => {
                console.log(result);
                parseGroupList(result);
                
            })
            .catch(error => {
                console.error(error);
            });
    });

    

    //alert();
    //getData("http://localhost:8080/student/list").then((res)=>console.log(res));
    let url="http://localhost:8080/student/list?isShuffle=0";
    fetchData(url)
    .then(result => {
        console.log(result);
        for(let i=0;i<result.length;i++){
            $(".stu-list").append("<li>"+result[i].id+" "+result[i].name+"</li>")
        }
        $(".stu-list").append("<li>+添加学员</li>");
        $(".stu-list").append('<input type="text" placeholder="请输入学生姓名" style="display:none" id="stuName" />')
        $(".stu-list").append('<button type="button" id="addStuBtn" style="display:none" >提交</button>');
        bindClick();
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
    $(".group-list").empty();
    let total=result.length;
    let num=total/6;
    let rest=total % 6;
    for(let j=0;j<6;j++){
        let beginStr="<div class=\"group-item\">\
        <h3>"+(j+1)+" 组</h3>\
        <ul class=\"groupstu-list\">";
        for(let k=0;k<num+1;k++){
            if(k*6+j<total){
                beginStr+=("<li>"+result[k*6+j].id+" "+result[k*6+j].name+"</li>");
            }
        }
        let endstr="</ul></div>";
        $(".group-list").append(beginStr+endstr);
    }

}

function bindClick(){
    $(".stu-list li:last").click(function(){
        $("#stuName").show();
        $("#addStuBtn").show();
    })

    $("#addStuBtn").click(function(){
    //    alert();
        let name=$("#stuName").val();
        let url="http://localhost:8080/student/list";
        let json="{\"name\":\""+name+"\"}";
        fetch(url,{
            method:"POST",
            headers: {"Content-Type":"application/json",'Access-Control-Allow-Origin':'*'},
            body:json
        }).then((response)=>{
            if(response.status==200){
                alert("添加成功！");
            }else{
                alert("添加失败！错误码："+response.status);
            }
        })
    })
}






   