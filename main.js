let objectname=[
    {
        first_name:"krishna",
        last_name:"veni"

    },
    {
        first_name:"Uma",
        last_name:"Mahesh"
    },
    {
        first_name:"vino",
        last_name:"kumar"
    },
    {
        first_name:"bala",
        last_name:"latha"
    }
];
let final=objectname.map(function(value){
        return value.first_name;
})
    console.log(final);
