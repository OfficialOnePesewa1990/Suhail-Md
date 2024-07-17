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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_50_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDYwLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNSxcbiAgICAgICAgODIsXG4gICAgICAgIDYyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU0LFxuICAgICAgICA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDksXG4gICAgICAgIDg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNixcbiAgICAgICAgMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDMwLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MyxcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDY3LFxuICAgICAgICA2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDI2LFxuICAgICAgICAyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDMzLFxuICAgICAgICA0NixcbiAgICAgICAgMjA4LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSW52Y0w0WTlxOGVSL0tSY2RKQWcwZnZ2QWJtelMvcjFPVzREbDFlcG1FRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNzBLUzF5aWhURjJTQ29RblRRaVEyZ1wiLFxuICBcInBob25lSWRcIjogXCI1ZDVlZmZlOC0zNjRlLTRkNzMtODMyOC1iODhmNTk2ZmIxZDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE5LFxuICAgICAgMTMyLFxuICAgICAgMTUyLFxuICAgICAgMTY3LFxuICAgICAgNSxcbiAgICAgIDIyNCxcbiAgICAgIDEwMCxcbiAgICAgIDk1LFxuICAgICAgNzIsXG4gICAgICA4NCxcbiAgICAgIDEwMixcbiAgICAgIDIwNixcbiAgICAgIDEzOSxcbiAgICAgIDg4LFxuICAgICAgNSxcbiAgICAgIDI1NSxcbiAgICAgIDE5MixcbiAgICAgIDQ3LFxuICAgICAgNDQsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgMjQ4LFxuICAgICAgMjUwLFxuICAgICAgMjA3LFxuICAgICAgMjI1LFxuICAgICAgMjExLFxuICAgICAgMTI2LFxuICAgICAgMTMwLFxuICAgICAgMTE1LFxuICAgICAgNDIsXG4gICAgICAxOTQsXG4gICAgICAyMDYsXG4gICAgICAyMTEsXG4gICAgICAyNCxcbiAgICAgIDIyMCxcbiAgICAgIDc3LFxuICAgICAgMjAsXG4gICAgICAxNDcsXG4gICAgICAyNyxcbiAgICAgIDEzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSVFI3WFlIN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTQ0NDgyNDk0OjkyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTAwMTQ3MTA0MTU1MDY6OTJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiT2ZmaWNpYWwgT25lUGVzZXdhIPCfh6zwn4etXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGY5NFpJSEVJZmQ0TFFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBdmFRUFNxVFppb3gyeWdtNUxRQmF2OXFkNHd6eHlXYk5oL0o5eG5TeVNzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJ6a0w1WjI4SHBBSjUvTDdJWWtYVnVmYUN4SzVmaEprTE9YUkhyaGZ3MmtqekZUMHdXejR5L3Vya3hQZllzRVBWY2NmR055UHVxWm11SUVBejEyVkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNzRDJkQUJoWDdoSDhTQ0Z5akxSNjZ6aVcxdExlVjRQUmtoei9EMFdISzcyekR5dGQ1RUN6dlBZWE0xaGUrMlRGVU5HY1VHRFlvcW1NUktEdHFsdUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU0NDQ4MjQ5NDo5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjQ5NDE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTUllXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNSWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhYkE3eFhJNkJwVzJEYUcvUDBsTXAydmt4eU9ueDhHMUQzY1RSbFpEQWNNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MTg0MDIyODgsXCJjdXJyZW50SW5kZXhcIjozMCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDE3LDE4LDMwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
