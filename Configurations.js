require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "2347071035915,2349251919746";   // You can replace this number with yours //
}


global.owner = gg.split("Apostlepraize");
global.mongodb = process.env.MONGODB || "mongodb+srv://Apostlepraize:23052003@apostlepraize.k9giezt.mongodb.net/?appName=Apostlepraize";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || "#";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `Atlas Bot`;
global.author = process.env.AUTHOR || "by: Team Atlas";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.owner = gg.split("Apostlepraize");

module.exports = {
  mongodb: global.mongodb,
};
