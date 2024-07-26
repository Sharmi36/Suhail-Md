const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923135629179";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_36_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NCxcbiAgICAgICAgODYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDU3LFxuICAgICAgICA3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDIxLFxuICAgICAgICA4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc3LFxuICAgICAgICA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUnRpMnJpOEVuL2N2ZGRrbWtCbldWcHRpVUZjWC9JU3N5L09Xd3QxY0hFdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUFdnOUhjbktRQ1d2S2kzN19JaG4yZ1wiLFxuICBcInBob25lSWRcIjogXCIxNjA0MTI1Ni1mOGVjLTRkN2ItYjgwNC1iMWZhZWIyNDY4MWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgNzQsXG4gICAgICAzOSxcbiAgICAgIDE4MixcbiAgICAgIDE1MixcbiAgICAgIDQxLFxuICAgICAgMTgxLFxuICAgICAgMTA0LFxuICAgICAgMjcsXG4gICAgICAxNTksXG4gICAgICA1MCxcbiAgICAgIDEzMSxcbiAgICAgIDIxNCxcbiAgICAgIDI0MCxcbiAgICAgIDE3NCxcbiAgICAgIDE1OCxcbiAgICAgIDEwMyxcbiAgICAgIDcwLFxuICAgICAgMzUsXG4gICAgICA1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAxODEsXG4gICAgICAyNixcbiAgICAgIDMwLFxuICAgICAgMyxcbiAgICAgIDQ4LFxuICAgICAgMTIyLFxuICAgICAgMTMyLFxuICAgICAgMTc0LFxuICAgICAgMTIsXG4gICAgICAxNDcsXG4gICAgICAxMzEsXG4gICAgICA2NSxcbiAgICAgIDc1LFxuICAgICAgNzcsXG4gICAgICAxOTksXG4gICAgICAyMTYsXG4gICAgICAzMixcbiAgICAgIDgsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3UUJaSjhNTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTM1NjI5MTc5OjU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MzcxMjk2MTcwNDA0OTo1NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCI5MjMxMzU2MjkxNzlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYlY4M3NRdlllTnRRWVlDaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpSMWFwUUZKK1QzRXlHTXhGK1lLeERPaWRJMXVXS0d0MDREZldPZS9sd1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM2pQY1NYSjFaSFJxd2lVNVJkUlZKa1FyMk1LUDU1SFFla2tJVm9EZWtxSXFVdktOUGp5RnNKZFd2MXoweHFiMmZQQmpDc3B6RmplUzE0UkNtWlhZQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMVNGYjI1VWc1Zjh5NGNuWGx2Q3lITFowR0VmZUh5OUVTaVlsYVMrTTNha082RkgxSCs0OTg5dWd0TUo4WlE2T2Y1Z1hjQWNUZ1NSY0F0azRuSzBiRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTM1NjI5MTc5OjU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5NzU3NTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFONkdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU42Ry5qc29uIjogIntcImtleURhdGFcIjpcIjhMREFzVTJzVlcrN01EU05CK2djODg0NjZ6Y1k4K3BoVkhnczFiWkY0NW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjU5ODQ0ODUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMjc1MTE2MTg1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
