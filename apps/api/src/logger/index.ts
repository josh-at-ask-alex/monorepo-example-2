import { connect } from '@/conn/appDB'

export function logIt() {
  console.log('hello')
  connect()
}
