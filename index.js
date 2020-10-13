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
    })
    .catch(error => {
        console.error(error);
    });
    alert();
});

requestData = (url, postData)=> {
    return new Promise(function (resolve, reject) {
          //fetch也是一个Promise
          fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Content-Encoding': 'identity'  //编码方式
              },
              body: JSON.stringify(postData),
          }).then((response) => response.json())
              .then((responseData)=> {
                  resolve(responseData);
              })
              .catch((err)=> {
                  console.log('err', err);
                  reject(err);
              });
          });
    }

getData = (url)=> {
    return new Promise(function (resolve, reject) {
          //fetch也是一个Promise
                fetch(url).then((response) => response.json())
              .then((responseData)=> {
                  resolve(responseData);
              })
              .catch((err)=> {
                  console.log('err', err);
                  reject(err);
              });
          });
    }

   