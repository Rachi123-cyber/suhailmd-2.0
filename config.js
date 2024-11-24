const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_12_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwLFxuICAgICAgICAzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk2LFxuICAgICAgICA3NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU1LFxuICAgICAgICA0OCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAzNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MixcbiAgICAgICAgOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgODUsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NCxcbiAgICAgICAgODAsXG4gICAgICAgIDc5LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgODksXG4gICAgICAgIDUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDUwLFxuICAgICAgICA3NixcbiAgICAgICAgNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaXlhWm1DOHkvTlFmNFRLSEpPVXMxUFk4aDloeENxT0pJdm1Kc1JvcUhTbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyMjMyMjQ2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUI1RjlFMDlDM0JCRDUxNkNDNDY2MDc0MkE5MDNDMTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyNDM5NTcxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MjIzMjI0NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI5MzNDRUY3MDVBNjUyOEQ2MzlCRkFFMjVEMDUzOUJFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjQzOTU3MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItMUVOY1lQd1F2QzN5RlFQRFJhMTdBXCIsXG4gIFwicGhvbmVJZFwiOiBcImNiOWI3OTMxLTQyZmMtNDJmYS05YWI3LThhMzZhNTE4YmFkMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MSxcbiAgICAgIDE3MyxcbiAgICAgIDE4OCxcbiAgICAgIDExMCxcbiAgICAgIDIxNCxcbiAgICAgIDIsXG4gICAgICA0NSxcbiAgICAgIDI0OCxcbiAgICAgIDc5LFxuICAgICAgMTAyLFxuICAgICAgNzEsXG4gICAgICAxNTcsXG4gICAgICA4NixcbiAgICAgIDIzMixcbiAgICAgIDE0MyxcbiAgICAgIDYzLFxuICAgICAgMjEwLFxuICAgICAgMjMxLFxuICAgICAgNzAsXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICAyMDAsXG4gICAgICAxOTIsXG4gICAgICA4OCxcbiAgICAgIDIwLFxuICAgICAgMTI3LFxuICAgICAgMTM3LFxuICAgICAgMjE4LFxuICAgICAgMjA3LFxuICAgICAgMjU0LFxuICAgICAgMjMwLFxuICAgICAgMzUsXG4gICAgICAyMDAsXG4gICAgICAyNTUsXG4gICAgICAxOTksXG4gICAgICA5NCxcbiAgICAgIDEzLFxuICAgICAgMjA2LFxuICAgICAgMTAwLFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNkVDMThOWkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzIyMzIyNDYxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZi88J2ZjfCdmY/wnZmvIPCdmaTwnZmbIPCdmY3wnZi88J2YvvCdmYPwnZmE8J2ZlPCdmLxcIixcbiAgICBcImxpZFwiOiBcIjY1MTUwOTI5MzY3MTQ1OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTS9senlvUWpOeUx1Z1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjbGRERW8xdTh1YkpvS0dJbVV3cDhKa3BCNHBhL3hER2NQZEJyYXdOYVUwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInl2NDA4ZVhJeU9SeEJBZ3Q5Z3N3QXBObXZZUGNrVVZhcERFcGI5djRuS3dnUTYydmRnaURLWEowMk04cktJTTByYVdqMTVZMFZTN0lWZjhOcnhUS0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNnT08yWUtoVHluRXNSWGJMdjRRcUtHaHBPVXZaMFk3aXFSb3ZMWkRBQVJYVTQyamRwcnN1ZmNYbmRVTUUyUDhFQWo2dGtoRFZyUlUxVmJhVHdGVWdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzIyMzIyNDYxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjQzOTU2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUwrTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTCtNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNnZXMW1ZSlNwZi9UNEZSTjVLcVZFUlljTE8xWjJmbUNNVjhsaFZKV2hqRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4OTM4NzcyNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyNDM5NTcwMzc0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
