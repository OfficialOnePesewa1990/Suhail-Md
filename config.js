const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="1pesewa2012@gmail.com"
global.location="Goaso,Ghana."


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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "233544482494";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233544482494";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_38_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDYyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk5LFxuICAgICAgICA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg0LFxuICAgICAgICA1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODUsXG4gICAgICAgIDg4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE5LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI5LFxuICAgICAgICA5MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgODgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk5LFxuICAgICAgICA5NixcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUwLFxuICAgICAgICAzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDczLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsbERRd3VaSlBNK0VQenNzRHpxWkU1QkU4Vi9RZjE5VFRQbmlqaWxDYUgwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzU0NDQ4MjQ5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUQxRjI5NzBFNkNGMTk4ODA5NkEzQkUxMjc3OUE1MEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMzM1ODc3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtla1VqT0pkUzktMnRoWEMzc0hSX1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDEyMTM0NmItZWQ1ZS00ZGZjLTk4ZDEtOWI3Zjk5NDVjNDY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMTUxLFxuICAgICAgNDYsXG4gICAgICAyMTAsXG4gICAgICAxMSxcbiAgICAgIDE2NSxcbiAgICAgIDUwLFxuICAgICAgNTUsXG4gICAgICA0OSxcbiAgICAgIDEzMSxcbiAgICAgIDE2NCxcbiAgICAgIDE0MSxcbiAgICAgIDI3LFxuICAgICAgMjMwLFxuICAgICAgMTgsXG4gICAgICAxMDIsXG4gICAgICAxNTgsXG4gICAgICAxNjAsXG4gICAgICAxNDQsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDgwLFxuICAgICAgMTA1LFxuICAgICAgMTM2LFxuICAgICAgMTQ1LFxuICAgICAgMjM2LFxuICAgICAgMjM1LFxuICAgICAgMzQsXG4gICAgICAxMDcsXG4gICAgICAyMDEsXG4gICAgICAxMixcbiAgICAgIDIzLFxuICAgICAgNDYsXG4gICAgICAyNTIsXG4gICAgICAyMCxcbiAgICAgIDQ0LFxuICAgICAgMjksXG4gICAgICAxNDQsXG4gICAgICAyMjAsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUTFFUUg4SDZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU0NDQ4MjQ5NDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTAwMTQ3MTA0MTU1MDY6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQajk0WklIRVA2RW83VUdHQkFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkF2YVFQU3FUWmlveDJ5Z201TFFCYXY5cWQ0d3p4eVdiTmgvSjl4blN5U3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ09kTy9zQU5NTzdsalVCMkVYVDZBV1JaNlprSlozYWxBTXdhTUR1QWR6a2tNOFFSQ0EwcGU3dzd2cG02clg0eHFiZmc1UTNNai95UlIxZGZlbkNSQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRnArUFE4Yk5QaFdTQkdBWkY3WitNRTJJWFZMQmprMzFpUHlMOVpQTVM1M1RoUEhYV3hBbmNyTkM0QXJIaWoyTjY4Mkl3dXNpTjlyT3BVQUtYLzJTRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTQ0NDgyNDk0OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjMzNTg3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1KYVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTUphLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaGFqbEN6MFRrblI5cWFTVVlEWG5lTTFjazI5aUZKaXgwd1dhS3hPa05idz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTE4NDAyMjk2LFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNyw5LDExXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxMDUxOTExMDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Official OnePesewa",
  packname: process.env.PACK_NAME || "Official OnePesewa",
  botname : process.env.BOT_NAME  || "Official OnePesewa-BOT",
  ownername:process.env.OWNER_NAME|| "Official OnePesewa",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "OFFICIAL ONEPESEWA"  ).toUpperCase(),



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
