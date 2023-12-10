class PromiseV2{
    constructor(callbackFunction){
    this.chainingArray = []
    this.handleError = () =>{};
    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);
    callbackFunction(this.onResolve(),this.onReject);
  
   }
  
   then(Successhandler){
    this.promiseChain.push(Successhandler);
    return this;
  
   }catch(errorHandler){
    this.errorHandler = handleError;
  
    return this;
   }
  
   onResolve(value){
    let storedValue = value;
  
    try {
        this.promiseChain.forEach((nextFunction) => {
            storedValue = nextFunction(storedValue);
          });
    } catch (error) {
      this.promiseChain = [];
  
      this.onReject(error);
    }
  }
   onReject(err){
    this.handleError(error);
   }
  }
  //It takes one function when we create a Promise object.
  