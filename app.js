const fs = require("fs").promises
async function taskTrack() {
  try{
const argv = await process.argv
  if(argv[2] == ("add")){
  const write = await fs.writeFile("app.log", argv[3], (err)=>{
    console.log(err);
  console.log(`File berhasil ditambah`);
  })
  }
  if(argv[2] == ("list")){
  const full = await fs.readFile("app.log","utf-8")
  console.log(`ini daftar: ${full}`)
  }
  
}catch(err){
  console.error(`ada error ${err}`);
}
}
taskTrack()



