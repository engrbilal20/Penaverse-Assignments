const guestList1 = ["Hassan", "Hussain", "Ahmad", "Ali", "Umar", "Usman"]
console.log(`${guestList1[5]} has just sent an sms and told that he can't join us at the dinner`)
guestList1.pop()
guestList1.push("Abdullah")
console.log(`Assalamualaikum ${guestList1[0]} \n You are invited to a dinner at my house. Please confirm your availibility.`)
console.log(`Assalamualaikum ${guestList1[1]} \n You are invited to a dinner at my house. Please confirm your availibility.`)
console.log(`Assalamualaikum ${guestList1[2]} \n You are invited to a dinner at my house. Please confirm your availibility.`)
console.log(`Assalamualaikum ${guestList1[3]} \n You are invited to a dinner at my house. Please confirm your availibility.`)
console.log(`Assalamualaikum ${guestList1[4]} \n You are invited to a dinner at my house. Please confirm your availibility.`)
console.log(`Assalamualaikum ${guestList1[5]} \n You are invited to a dinner at my house. Please confirm your availibility.`)
var newGuestList = guestList1.slice();
export {newGuestList};