// @ts-ignore
import log from 'log-all-the-things'
import { createReminder } from './createReminder'

const args = process.env.npm_config_argv as string
const str = JSON.parse(args).original.slice(1).join(' ')

if (!str) {
  log.e('No text provided.')
  process.exit(0)
}

createReminder(str)

