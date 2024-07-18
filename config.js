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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_56_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTczLFxuICAgICAgICA5OCxcbiAgICAgICAgNixcbiAgICAgICAgMTkyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NixcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDU2LFxuICAgICAgICAzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk0LFxuICAgICAgICA1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE1LFxuICAgICAgICAwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAzNixcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNyxcbiAgICAgICAgNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDksXG4gICAgICAgIDU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgOTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4LFxuICAgICAgICAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm4yMFh3S1NhM3U5Q0JMNzBqOG9HUy8vS3A2ajByeFdLR0JaUXIwdHFXSzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZKeUdRTDlnUm5PYTh5dENxYlVTRndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDY1Yzg1NGMtY2U0Ny00OGU4LTllZGUtYWFkODVmY2JiMmQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDE5NixcbiAgICAgIDEzMCxcbiAgICAgIDIxOCxcbiAgICAgIDI0NyxcbiAgICAgIDE1MyxcbiAgICAgIDM2LFxuICAgICAgMjMzLFxuICAgICAgMTA0LFxuICAgICAgMTUsXG4gICAgICAyMzcsXG4gICAgICAwLFxuICAgICAgMTkwLFxuICAgICAgMTU5LFxuICAgICAgMTU1LFxuICAgICAgMTc2LFxuICAgICAgMTk1LFxuICAgICAgMTUwLFxuICAgICAgMjMzLFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgOCxcbiAgICAgIDE2OCxcbiAgICAgIDMyLFxuICAgICAgMTczLFxuICAgICAgNTQsXG4gICAgICA0MyxcbiAgICAgIDE2NixcbiAgICAgIDk4LFxuICAgICAgMTQ3LFxuICAgICAgMjM5LFxuICAgICAgOTEsXG4gICAgICAxNjgsXG4gICAgICA1OCxcbiAgICAgIDE4NixcbiAgICAgIDExMSxcbiAgICAgIDIyMCxcbiAgICAgIDY4LFxuICAgICAgNDYsXG4gICAgICAzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaMzZXR1gzU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTQ0NDgyNDk0Ojk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTAwMTQ3MTA0MTU1MDY6OTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGo5NFpJSEVQK2U1clFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBdmFRUFNxVFppb3gyeWdtNUxRQmF2OXFkNHd6eHlXYk5oL0o5eG5TeVNzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIitOeUtzZ3ZEdHI5VmxsSEdibmw3TCtsV1JxcHU0d2pNQ3NLNC9PTEo5cEtOTnN4U0dIMEJiTUovRXVLM0QyNWNRYlZUTEJiMUk4S2lrTksrNmVRcURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNGZUNjcThYMnN6RjNHWkZlWXBRNnNyNW16VHhUcHdsVm9wRHRaV24vQUVxanZsR3RxWmNkaklBeWNCQ1U5TlpLa0RKUTUwcDkwM0ZNWG8xQXcwU0JBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU0NDQ4MjQ5NDo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzM5Nzc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFEVUFBTUlhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQURVQUFNSWEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVWjRUa2ZoeE5PaU5wdmlOUGdNeHVXR3lvTWxXd0djUENWbHd4S3lpenRrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MTg0MDIyODgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDE3LDE4LDUzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc2ODU4MzEwMjJcIn0iCn0="  // PUT your SESSION_ID 


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
