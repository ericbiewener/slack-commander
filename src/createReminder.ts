import { WebClient } from '@slack/web-api'
import chrono from 'chrono-node'
import log from 'log-all-the-things'

const userEric = 'UANJ8LMLL'

const web = new WebClient(process.env.SLACK_TOKEN);

export async function createReminder(str: string) {
  const results = chrono.parse(str)
  if (results.length !== 1) {
    log.e('Did not find exactly 1 result.')
    log.e(results)
    return
  }

  const time = results[0].text;
  const text = str.replace(time, '').replace(/\s\s+/g, ' ').trim()
  
  if (!text) {
    log.e('No message text.')
    return
  }

  const result = await web.reminders.add({
    user: userEric,
    time,
    text,
  })

  log.s(result)
}
