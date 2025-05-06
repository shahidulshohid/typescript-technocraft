{
    //access modifiers;
    class BackAccount {
       public readonly id: number;
       public name: string;
       protected _balance: number;
        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        // public addDeposit (amount : number) {
        //     this._balance = this._balance + amount
        
        //getter
        get Balance(){
            return this._balance
        }

        // }
        // public getBalance(){
        //     return this._balance;
        // }
    }

    // class studentAccount extends BackAccount {
    //     test(){
    //         this._balance
    //     }
    // }

    const goribManusherAccount = new BackAccount(111, "GoribManush", 20)
    // goribManusherAccount.balance = 0
    // goribManusherAccount.addDeposit(20) // function call korte hosse
    // const myBalance = goribManusherAccount.getBalance() // function call korte hosse
    const myBalance = goribManusherAccount.Balance
    console.log(myBalance)

    //
}