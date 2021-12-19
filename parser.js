require('dotenv').config()

const nightmare=require('nightmare')()
const args=process.argv.slice(2)
const url=args[0]
const minPrice=args[1]
//"https://www.amazon.in/New-Apple-iPhone-Pro-128GB/dp/B08L5V1SBB"
checkPrice()
async function checkPrice(){
    const priceString = await nightmare
    .goto(url)
    .wait("#priceblock_dealprice")
    .evaluate(()=>document.getElementById("priceblock_dealprice").innerText)
    .end()
    var pricenumber = priceString.replace('₹','')
    const pricenumberfinal = parseFloat(pricenumber.replace(',',''))
    if(pricenumberfinal<minPrice){
        console.log("LOW")
    } else {
        console.log("High")
    }
}
