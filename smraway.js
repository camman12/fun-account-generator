const puppeteer = require('puppeteer');
//const Captcha = require('2captcha');
//const SMS
const imap = {
  user: "**",
  password: "**",
  host: "imap.gmail.com",
  port: 993, // imap port
  tls: true,// use secure connection
  tlsOptions: { rejectUnauthorized: false }
};
const notifier = require('mail-notifier');
var fs = require("fs")
var sleep = require("sleep")
var querystring = require('querystring');
var request = require('request');
var email= [];
const SMSActivate = require('./smsgen')
const sms = new SMSActivate('**')
// puppeteer usage as normal
require('fs').readFileSync('emails.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
   email.push(line);
})
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function strcmp(a, b)
{
    return (a<b?-1:(a>b?1:0));
}
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks**");

const IMAGE_URL = 'https://cdn11.bigcommerce.com/s-fduu8evurl/images/stencil/320w/uploaded_images/blue.jpg?t=1593485603';
hook.setUsername('Bubba');
hook.setAvatar(IMAGE_URL);







function smrabub(){
  var number_proxy = getRandomInt(400)
  const whatt = email[number_proxy]
  var proxyserver = "--proxy-server=" + "**"

  puppeteer.launch({ headless: true, args: [proxyserver]}).then(async browser => {
  setTimeout(() => { process.exit(1); }, 400000);
  const page = await browser.newPage();
  await page.goto('https://www.amazon.com/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3F_encoding%3DUTF8%26ref_%3Dnav_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&%27');
  await page.type('input[name=customerName]', 'John Smith');
  await page.$eval('input[name=customerName]', el => el.value = 'John Smith')
  var cam = getRandomInt(4000) +'@generic.com';

  await page.type('input[name=email]', cam)


  await page.type('input[name=password]', 'XXXX')
  await page.$eval('input[name=password]', el => el.value = 'XXXXX')

  await page.type('input[name=passwordCheck]', 'XXXX')
  await page.$eval('input[name=passwordCheck]', el => el.value = 'XXXX')

  await page.click('input[type=submit]')
  console.log('Account form filled, fetching captcha...')
  await page.waitForNavigation()
  var url = await page.url()
  const Captcha = require('2captcha');
  const solver = new Captcha.Solver('your api key')
    var cookie = await solver.funCaptcha("your funcaptcha token", url) //2F1CD804-FE45-F12B-9723-240962EBA6F8
    .then(function(res) {
      // Logs the image tex
      console.log(res.data)
      return res;
    })
    .catch(function(error){
      process.exit(1)
    })
    console.log("captcha solved!");
    await page.evaluate( function(cookie)
    {
      document.querySelector("#cvf_captcha_arkose_response_token").value = cookie.data
    },cookie);
    sleep.sleep(1)
    await page.evaluate( () =>
    {
      document.querySelector("#cvf-arkose-captcha-form").submit()
    });

//  await page.waitForNavigation()
//  sleep.sleep(2)
  console.log("getting email sms...")
  let inputveri = await page.waitForSelector('#cvf-input-code')
  sleep.sleep(25)
  await notifier(imap)
    .start()
    .on('mail', mail => inputveri.type(mail.html[3223]+mail.html[3224]+mail.html[3225]+mail.html[3226]+mail.html[3227]+mail.html[3228]) )
  //  .catch(function (error){
  //      process.exit(1)

    //})
  await page.waitForFunction('document.querySelector("#cvf-input-code").value.length == 6')
  sleep.sleep(2)
  await page.click('input[type=submit]')
  const balance = await sms.getBalance()

if (balance > 0) {
  const { id, number } = await sms.getNumber('am')
  await sms.setStatus(id, 1)
  console.log("getting sms...")

  await page.select('#cvf_phone_cc_native', 'ID')
  .catch(function (error){
      process.exit(1)

  })
  let input5 = await page.waitForSelector('#cvf-page-content > div > div > div > form > div:nth-child(6) > div > div.a-fixed-left-grid.a-spacing-top-mini > div > div.a-fixed-left-grid-col.a-col-right > input')
  await input5.type(number.toString());
  await page.click('input[type=submit]')

  const waitForCode = setInterval(async () => {
    const code = await sms.getCode(id)
    if (code) {
      clearInterval(waitForCode)
      await sms.setStatus(id, 6)
      hook.send("||" + cam + "kkyjdxa7" + "||" );
      console.log("sms retrieved, acc created")
      fs.appendFile('helloworld.txt', cam + ":" + "kkyjdxa7" + "\n", (err) => {
        if (err) {
          console.log(err);
        }
        else {
          // Get the file contents after the append operation
        }})
       await page.type('input[name=code]', code.toString());

       await page.click('input[type=submit]')


    //  sleep.sleep(3)
      hook.send("||" + cam + "kkyjdxa7" + "||" );
    //  await browser.close()
      sleep.sleep(3)
  //    await page.goto("https://www.amazon.com/gp/css/homepage.html?ref_=nav_youraccount_btn")
  //    await page.waitForNavigation()
  //    const elements2 = await page.$x(`//*[@id="a-page"]/div[2]/div/div[2]/div[2]/a/div/div/div/div[2]`);
//      await elements2[0].click();
  //    await page.waitForNavigation()
//      const phonebut = await page.$x(`//*[@id="auth-cnep-edit-phone-button"]`);
//      await phonebut[0].click();
//      await page.waitForNavigation()
  //    const phonebutdel = await page.$x(`//*[@id="ap_delete_mobile_claim_link"]/button`);
  //    await phonebutdel[0].click();
  //    const phonebutdel2 = await page.$x(`//*[@id="ap-remove-mobile-claim-submit-button"]`);
//      await phonebutdel2[0].click();
      process.exit(1)
    }
  }, 1000)
} else {
  console.log('You don\'t have enough money')
}
//  page.close()
  //*[@id="a-page"]/div[1]/div/div/a

})
}


smrabub()
