var os = require('os');
var toMb = function(f) {
    return(Math.round((f/1024/1024)*100)/100);
}
console.log('Host: ' + os.hostname());
console.log('15 min. load average: ' + os.loadavg()[2]);
console.log(toMb(os.freemem()) + ' of ' + toMb(os.totalmem()) + ' Mb free');
console.log(os.arch());
console.log(os.cpus());
console.log(os.platform());
console.log(os.type());