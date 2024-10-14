export class CoderHttp 
{
    constructor()
    {
        this.http = new XMLHttpRequest();
    }

    //GET
    get = (url, callback)=>{ //get func

        this.http.open('GET', url, true);
        this.http.send();

        this.http.onload = ()=>{ // another func

            if(this.http.status === 200 )
            {
                let data = this.http.responseText;
            // console.log(data);
            let employees = JSON.parse(data);
                
            callback(null, employees) // used becos of 2 functions // null to catch errors

            }else{
                callback(`Error:  ${this.http.status}`)
            }
            
        }
    }


     //POST
     post = (url, employee, callback)=>{ //get func  // cllback to send the data back to the server

        this.http.open('POST', url, true);
        this.http.setRequestHeader('Content-Type', 'application/json');

        this.http.send(JSON.stringify(employee));

        this.http.onload = ()=>{ // another func

          let data = this.http.responseText;
          let emplyees = JSON.parse(data)
          callback(emplyees);
            
        }
    }


    //PUT
    put = (url, employee, callback)=>{ //get func  // cllback to send the data back to the server

        this.http.open('PUT', url, true);
        this.http.setRequestHeader('Content-Type', 'application/json');

        this.http.send(JSON.stringify(employee));

        this.http.onload = ()=>{ // another func

          let data = this.http.responseText;
          let emplyees = JSON.parse(data)
          callback(emplyees);
            
        }
    }

    
    //DELETE
    delete = (url, callback)=>{ //get func  // cllback to send the data back to the server

        this.http.open('DELETE', url, true);
        this.http.setRequestHeader('Content-Type', 'application/json');

        this.http.send();

        this.http.onload = ()=>{ // another func

          let data = this.http.responseText;
          let emplyees = JSON.parse(data)
          callback(emplyees);
            
        }
    }




}