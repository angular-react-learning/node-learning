const a = () => 4
a();

// function a()
//     {
//         return 4
//     }




class ABC
    {
        callme()
            {
                console.log("Calling")
            }

        handler()
            {
                setTimeout(()=>{
                    this.callme()
                })
            }

        handler2()
            {
                var _this = this;
                setTimeout(function(){
                    _this.callme()
                })
            }
    };

const ABCInstance = new ABC();

ABCInstance.handler()
ABCInstance.handler2()