var CronJob = require('cron').CronJob;
const fs = require('fs');
const pMinute = 5;
const dir = 'output'

// Create output folder if not exist
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

// Run job ever pMinute
var job = new CronJob(
	`* */${pMinute} * * * *`,
	function() {
    let now = new Date();
    let year = now.getFullYear()
    let month = now.getMonth()+1
    let date = now.getDate()
    let filePath = year + '-' + month + '-' + date + '.txt'
    fs.appendFile(`output/${filePath}`, now.toLocaleString() + '\n', err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
	},
	null,
	true,
);
// Use this if the 4th param is default value(false)
job.start()