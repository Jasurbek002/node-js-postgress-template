
const ADDBALANCE =`
insert into temporary(user_id,temp_score) 
 values ($2,$1);
`


module.exports = {
    ADDBALANCE
}