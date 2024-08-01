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


global.devs = "923135629179" // Developer Contact
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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "trye"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923135629179,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_13_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDkzLFxuICAgICAgICA0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYwLFxuICAgICAgICA0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwLFxuICAgICAgICA1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIS093RE92WmxyUlA4UGptSnAvajNHeXBwcWtraDdJME03UzlTSE1TSmw4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVd3RCLTBrNVFyU3U2d0tJc1dmZjFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjljNmRjZTA4LWNkNDQtNGE4ZC05ZGY5LWFhODY1YTk0MjZhMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDIwNCxcbiAgICAgIDM2LFxuICAgICAgMjMyLFxuICAgICAgMjQxLFxuICAgICAgMTU0LFxuICAgICAgMjA1LFxuICAgICAgMTI1LFxuICAgICAgMTAwLFxuICAgICAgMjEwLFxuICAgICAgMTUsXG4gICAgICAxNzIsXG4gICAgICAxNyxcbiAgICAgIDc5LFxuICAgICAgMTIsXG4gICAgICA1NixcbiAgICAgIDE2MCxcbiAgICAgIDIwNixcbiAgICAgIDkwLFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICAxNTYsXG4gICAgICAxMyxcbiAgICAgIDE1OSxcbiAgICAgIDE0MCxcbiAgICAgIDE1NCxcbiAgICAgIDExMixcbiAgICAgIDQ5LFxuICAgICAgMTEzLFxuICAgICAgMjE3LFxuICAgICAgMTM0LFxuICAgICAgMTIxLFxuICAgICAgMTQsXG4gICAgICAxNzIsXG4gICAgICAxMzUsXG4gICAgICAxNTMsXG4gICAgICA0OSxcbiAgICAgIDI2LFxuICAgICAgOSxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJINllOTDZUV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTM1NjI5MTc5OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MzcxMjk2MTcwNDA0OTo1NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYlY4M3NRb2FDdnRRWVlDeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpSMWFwUUZKK1QzRXlHTXhGK1lLeERPaWRJMXVXS0d0MDREZldPZS9sd1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNWZMVXY5cU9GVFFHa282bUMyZm5HOWtadTNoUXNEcXNGRWJjNmxaS0h4Q3A2cHgycHBaa2cwOUVpUGlCbC91WjFuUFVHZDRVWUlLcklQYXEvbEhOQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTEwrTThrcm1KVUY4TGFlV0RUbUxEbFVraWZ6UVF1cVl3MVI1cnpQN1V6WVFQT3RhczY0TVN0dWJRODZsWU5nR1Bla2dKVUZvNm0zWFNWc0JTYlNwQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTM1NjI5MTc5OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1MzU5NzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFONkdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU42Ry5qc29uIjogIntcImtleURhdGFcIjpcIjhMREFzVTJzVlcrN01EU05CK2djODg0NjZ6Y1k4K3BoVkhnczFiWkY0NW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjU5ODQ0ODUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMjc1MTE2MTg1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Sarim",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SARIM"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "picture",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
