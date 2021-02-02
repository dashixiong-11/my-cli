const spawn = require("cross-spawn");
module.exports = function install(option){
    const cwd = option.cwd|| process.cwd()
    return new Promise((resolve,reject)=>{
        const command = option.isYarn? 'yarn':'npm'
        const args = ['install','--save','--save-exavt','--loglevel','error']
        const child = spawn(command,args,{cwd,stdio:['pipe',process.stdout,process.stderr]})

        child.once('close',code => {
            if(code !== 0){
                reject({
                    command:`${command} ${args.join(" ")}`
                })
                return
            }
            resolve()
        })
        child.once('error',reject)
    })
}